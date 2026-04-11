import os
import json
import base64
from PIL import Image
from io import BytesIO

mapping_path = 'c:/sahumerios/mapping.json'
with open(mapping_path, 'r', encoding='utf-8') as f:
    mapping = json.load(f)

img_dir = 'c:/sahumerios/'
thumbnails = {}

for p, rel_img in mapping.items():
    if rel_img in thumbnails:
        continue
    img_path = os.path.join(img_dir, rel_img)
    if os.path.exists(img_path):
        try:
            with Image.open(img_path) as img:
                # Convert to RGB if it's PNG with transparency
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                
                # Resize to thumbnail (e.g., width 50, keep ratio)
                # Max 60x60
                img.thumbnail((60, 60))
                
                # Save as JPEG in memory
                buffered = BytesIO()
                img.save(buffered, format="JPEG", quality=75)
                img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')
                
                thumbnails[rel_img] = f"data:image/jpeg;base64,{img_str}"
        except Exception as e:
            print(f"Error with {rel_img}: {e}")

# Generate JS file
js_content = "const thumbnails = " + json.dumps(thumbnails) + ";"
with open('c:/sahumerios/base64_thumbnails.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
print("Thumbnails generated successfully!")
