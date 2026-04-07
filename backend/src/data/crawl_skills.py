import json
import requests
from bs4 import BeautifulSoup
import re
import time
import os

# =================================================================
# 1. BẢNG ÁNH XẠ THỦ CÔNG (DÀNH CHO CÁC TƯỚNG BỊ LỆCH TÊN API vs WEB)
# Nếu failed_log.json báo lỗi con nào, hãy thêm nó vào đây.
# =================================================================
TRANSLATION_MAP = {
    "Lubu": "lu-bo",
    "Zanis": "trieu-van",
    "Wukong": "ngo-khong",
    "Diaochan": "dieu-thuyen",
    "Mganga": "mganga",
    "Payna": "helen",     # Payna đổi tên thành Helen
    "Mortos": "arthur",    # Mortos đổi tên thành Arthur
    "Tavern": "chaugnar",
    "Krixi": "krixi",
    "Tel'Annas": "telannas",
    "Gildur": "gildur",
    "Chaugnar": "chaugnar",
    "Slimz": "slimz",
    "Arthur": "arthur",
    "Veera": "veera",
    "Kahlii": "kahlii",
    "Alice": "alice",
    "Yorn": "yorn",
    "Grakk": "grakk",
    "Butterfly": "butterfly",
    "Nakroth": "nakroth",
    "Violet": "violet",
    "Zephys": "zephys",
    "Ormarr": "ormarr",
    "Azzen'Ka": "azzenka",
    "Edras": "11596"
}

def slugify(text):
    """
    Chuyển tên tiếng Việt có dấu/tiếng Anh sang slug URL không dấu.
    Ví dụ: 'Ngộ Không' -> 'ngo-khong'
    """
    text = text.lower()
    # Loại bỏ dấu tiếng Việt
    unicode_map = {
        'a': 'áàảãạăắằẳẵặâấầẩẫậ',
        'd': 'đ',
        'e': 'éèẻẽẹêếềểễệ',
        'i': 'íìỉĩị',
        'o': 'óòỏõọôốồổỗộơớờởỡợ',
        'u': 'úùủũụưứừửữự',
        'y': 'ýỳỷỹỵ',
    }
    for non_accent, accent_chars in unicode_map.items():
        for char in accent_chars:
            text = text.replace(char, non_accent)
    
    # Loại bỏ ký tự đặc biệt (giữ lại chữ cái, số và khoảng trắng)
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    # Thay khoảng trắng thành dấu gạch ngang
    text = re.sub(r'\s+', '-', text).strip('-')
    return text

def main():
    # 1. Kiểm tra file đầu vào
    input_file = 'heroes_data.json'
    if not os.path.exists(input_file):
        print(f"❌ Lỗi: Không tìm thấy file {input_file} trong thư mục!")
        return

    # 2. Đọc dữ liệu tướng
    with open(input_file, 'r', encoding='utf-8') as f:
        heroes = json.load(f)

    total_heroes = len(heroes)
    success_count = 0
    failed_list = []

    print("====================================================")
    print(f"🚀 BẮT ĐẦU CÀO CHIÊU THỨC CHO {total_heroes} VỊ TƯỚNG")
    print("====================================================")

    # 3. Lặp qua từng tướng (KHÔNG BỎ QUA BẤT CỨ AI)
    for index, hero in enumerate(heroes, start=1):
        name = hero['name']
        
        # Xác định Slug (Ưu tiên bảng Map -> Nếu không có thì slugify)
        slug = TRANSLATION_MAP.get(name, slugify(name))
        url = f"https://lienquan.garena.vn/hoc-vien/tuong-skin/d/{slug}/"

        print(f"[{index}/{total_heroes}] Đang xử lý: {name} ...", end=" ", flush=True)

        try:
            # Gửi request (Header giả lập trình duyệt)
            headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
            response = requests.get(url, headers=headers, timeout=10)

            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Tìm các block chiêu thức trong HTML
                skill_blocks = soup.select('.hero__skills--detail')
                
                if skill_blocks:
                    # Map nội dung vào 4 trường: passive, s1, s2, s3
                    keys = ['passive', 's1', 's2', 's3']
                    for i, block in enumerate(skill_blocks):
                        if i < len(keys):
                            # Lấy tên chiêu (h3) và mô tả (article)
                            s_title = block.find('h3').get_text(strip=True)
                            s_desc = block.find('article').get_text(strip=True)
                            hero['skills'][keys[i]] = f"{s_title}: {s_desc}"
                    
                    print("✅ Xong")
                    success_count += 1
                else:
                    print("⚠️ Lỗi: Không tìm thấy class HTML kỹ năng.")
                    failed_list.append({"name": name, "url": url, "reason": "HTML structure changed"})
            
            elif response.status_code == 404:
                print("❌ Thất bại (404 - Link sai)")
                failed_list.append({"name": name, "url": url, "reason": "404 Not Found"})
            else:
                print(f"❌ Thất bại (Lỗi {response.status_code})")
                failed_list.append({"name": name, "url": url, "reason": f"HTTP {response.status_code}"})

        except Exception as e:
            print(f"❌ Lỗi hệ thống: {str(e)}")
            failed_list.append({"name": name, "url": url, "reason": str(e)})

        # Nghỉ 0.3s để tránh bị Garena chặn (Cực kỳ quan trọng)
        time.sleep(0.3)

    # 4. Ghi đè lại file heroes_data.json với dữ liệu mới
    with open(input_file, 'w', encoding='utf-8') as f:
        json.dump(heroes, f, ensure_ascii=False, indent=4)

    # 5. Ghi log các tướng bị lỗi để người dùng sửa tay
    with open('failed_log.json', 'w', encoding='utf-8') as f:
        json.dump(failed_list, f, ensure_ascii=False, indent=4)

    # 6. Tổng kết
    print("\n" + "="*50)
    print("📊 TỔNG KẾT QUÁ TRÌNH CÀO DỮ LIỆU")
    print(f"- Tổng số tướng đã quét: {total_heroes}")
    print(f"- Thành công: {success_count}")
    print(f"- Thất bại: {len(failed_list)}")
    print(f"- Dữ liệu đã lưu vào: {input_file}")
    if failed_list:
        print(f"- Chi tiết lỗi xem tại: failed_log.json")
    print("="*50)

if __name__ == "__main__":
    main()