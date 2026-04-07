import json
import os

# Paths
BACKEND_DATA = '/home/son/AOV-hint/backend/src/data/heroes_data.json'
FRONTEND_DATA = '/home/son/AOV-hint/src/data/heroes_public.json'

def generate_public_data():
    if not os.path.exists(BACKEND_DATA):
        print(f"Error: {BACKEND_DATA} not found")
        return

    with open(BACKEND_DATA, 'r', encoding='utf-8') as f:
        full_data = json.load(f)

    public_data = []
    for hero in full_data:
        # Only keep UI-essential fields
        public_hero = {
            "id": hero.get("id"),
            "name": hero.get("name"),
            "role": hero.get("role"),
            "avatar_img": hero.get("avatar_img")
        }
        public_data.append(public_hero)

    # Ensure directory exists
    os.makedirs(os.path.dirname(FRONTEND_DATA), exist_ok=True)

    with open(FRONTEND_DATA, 'w', encoding='utf-8') as f:
        json.dump(public_data, f, ensure_ascii=False, indent=2)

    print(f"Successfully generated {FRONTEND_DATA} with {len(public_data)} heroes.")

if __name__ == "__main__":
    generate_public_data()
