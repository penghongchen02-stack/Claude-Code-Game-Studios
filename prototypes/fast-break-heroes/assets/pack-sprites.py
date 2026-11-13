# PROTOTYPE - NOT FOR PRODUCTION
# Packs assets/sprites.png into assets/sprites.js as a data URL, so the game can draw it from a
# double-clicked index.html without marking the canvas cross-origin. Run it after replacing the PNG:
#   python3 assets/pack-sprites.py
import base64, pathlib
here = pathlib.Path(__file__).parent
png = (here / 'sprites.png').read_bytes()
(here / 'sprites.js').write_text("// PROTOTYPE - NOT FOR PRODUCTION\n// assets/sprites.png packed by pack-sprites.py; the game loads this, never the PNG directly.\nwindow.SPRITES = 'data:image/png;base64," + base64.b64encode(png).decode() + "';\n")
print('packed', len(png), 'bytes into assets/sprites.js')
