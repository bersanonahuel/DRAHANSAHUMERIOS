import json

with open('c:/sahumerios/mapping.json', 'r', encoding='utf-8') as f:
    m = json.load(f)

with open('c:/sahumerios/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if 'const imageMap =' in line:
        start_idx = i
    if 'function prettify(name)' in line and start_idx != -1:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_map = 'const imageMap = ' + json.dumps(m, indent=4) + ';\nfunction getImage(name) { return imageMap[name] || "imagen.png"; }'
    new_lines = lines[:start_idx] + [new_map] + lines[end_idx:]
    with open('c:/sahumerios/index.html', 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print("Replaced map successfully!")
else:
    print("Could not find boundaries!")
