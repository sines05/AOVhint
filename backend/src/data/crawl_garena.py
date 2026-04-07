import requests
import json

# Link API Garena
URL_CONFIG = "https://herowinrate.moba.garena.vn/vn/api/config"
URL_TREND = "https://herowinrate.moba.garena.vn/vn/api/server_trend"

# Thêm User-Agent giả lập trình duyệt để Garena không chặn Bot Python
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*"
}

def fetch_data():
    try:
        print("⏳ Đang tải dữ liệu Tướng (Config API)...")
        res_config = requests.get(URL_CONFIG, headers=HEADERS)
        res_config.raise_for_status() # Báo lỗi nếu mạng hỏng
        config_data = res_config.json()
        
        print("⏳ Đang tải Thống kê Tỷ lệ Thắng/Chọn/Cấm (Trend API)...")
        res_trend = requests.get(URL_TREND, headers=HEADERS)
        res_trend.raise_for_status()
        trend_data = res_trend.json()
        
        return config_data, trend_data
    except Exception as e:
        print(f"❌ Lỗi khi tải dữ liệu: {e}")
        return None, None

def build_heroes_json():
    config_data, trend_data = fetch_data()
    
    if not config_data or not trend_data:
        return

    print("⚙️ Đang xử lý và ghép nối dữ liệu...")

    # 1. Tạo từ điển Vai trò (Ánh xạ ID vai trò -> Tên vai trò)
    roles_map = {}
    for role in config_data.get('hero_type', []):
        roles_map[role['hero_type_id']] = role['name']

    # 2. Lấy thông tin cơ bản của Tướng
    heroes_meta = {}
    for hero_id, info in config_data.get('hero', {}).items():
        role_id = info.get('hero_type', '-1')
        role_name = roles_map.get(role_id, 'Chưa rõ')
        
        heroes_meta[hero_id] = {
            "name": info['name'],
            "role": [role_name],
            "image": info['image']
        }

    # 3. Lấy Dữ liệu Thống kê: Chế độ 5v5 Hạng (Key "4") -> Tất cả Bậc Rank (Key "-1")
    # Tùy chỉnh: Nếu bạn chỉ muốn lấy Rank Thách Đấu, đổi "-1" thành "8" (dựa theo config API)
    ranked_stats = trend_data.get("4", {}).get("-1", [])

    final_data = []

    # 4. Ghép dữ liệu Thống kê vào Thông tin Tướng
    for stat in ranked_stats:
        h_id = str(stat['hero_id'])
        
        # Bỏ qua nếu dữ liệu lỗi không có trong config
        if h_id not in heroes_meta:
            continue
            
        meta = heroes_meta[h_id]

        # Biến mảng ID tướng khắc chế (top3) thành danh sách Tên tướng
        counters = []
        for counter_id in stat.get('top3', []):
            c_id_str = str(counter_id)
            if c_id_str in heroes_meta:
                counters.append(heroes_meta[c_id_str]['name'])

        # Cấu trúc JSON Chuẩn cho Tool Ban/Pick
        final_hero = {
            "id": f"hero_{h_id}",
            "name": meta['name'],
            "role": meta['role'],
            "avatar_img": meta['image'],
            
            # --- KHU VỰC NHẬP TAY (MẶC ĐỊNH BẰNG 0 HOẶC RỖNG) ---
            "stats": {
                "sinh_menh": 0,
                "sat_thuong": 0,
                "hieu_ung": 0,
                "do_kho": 0
            },
            "skills": {
                "passive": "",
                "s1": "",
                "s2": "",
                "s3": ""
            },
            # -----------------------------------------------------
            
            "meta_data": {
                "win_rate": stat.get('win_rate') or 0.0,
                "pick_rate": stat.get('pick_rate') or 0.0,
                "ban_rate": stat.get('ban_rate') or 0.0  # Chuyển null thành 0
            },
            "counters": counters
        }
        
        final_data.append(final_hero)

    # 5. Sắp xếp danh sách tướng theo Tên (Alphabet) cho đẹp mắt
    final_data = sorted(final_data, key=lambda k: k['name'])

    # 6. Lưu kết quả ra file heroes_data.json
    output_filename = 'heroes_data.json'
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(final_data, f, ensure_ascii=False, indent=4)

    print(f"✅ HOÀN TẤT! Đã cào và tạo file '{output_filename}' với {len(final_data)} tướng.")

if __name__ == "__main__":
    print("===========================================")
    print("🚀 BẮT ĐẦU CÀO DỮ LIỆU LIÊN QUÂN MOBILE 🚀")
    print("===========================================")
    build_heroes_json()