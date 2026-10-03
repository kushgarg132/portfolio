"""Render public/kush.jpg as an intaglio-style line engraving (transparent PNG).

Line thickness follows image darkness; lines bend with the blurred luminance so they
contour the face like a banknote portrait. Edges fade out through an oval vignette.

    python3 scripts/engrave.py   ->  public/kush-engraved.png
"""
import numpy as np
from PIL import Image, ImageFilter, ImageOps

SRC, OUT = "public/kush.jpg", "public/kush-engraved.png"
CROP = (225, 120, 575, 558)          # head + shoulders, 4:5
SS = 3                               # supersample for anti-aliasing
W, H = 640, 800                      # output size
PERIOD = 4.2 * SS                    # line spacing in supersampled px
INK = (20, 38, 64)                   # matches --ink

img = Image.open(SRC).convert("L").crop(CROP).resize((W * SS, H * SS), Image.LANCZOS)
img = ImageOps.autocontrast(img, cutoff=1)
lum = np.asarray(img, dtype=np.float32) / 255.0
soft = np.asarray(img.filter(ImageFilter.GaussianBlur(14 * SS)), dtype=np.float32) / 255.0

yy, xx = np.mgrid[0:H * SS, 0:W * SS].astype(np.float32)

# oval vignette: fade everything to paper outside the portrait ellipse
cx, cy, rx, ry = W * SS / 2, H * SS * 0.5, W * SS * 0.47, H * SS * 0.46
d = np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)
fade = np.clip((1.0 - d) / 0.22, 0, 1)

dark = np.clip((1.0 - lum - 0.12) / 0.88, 0, 1) ** 1.5 * fade
# lines run at a slight angle and bend with local tone
phase = (yy * 0.96 + xx * 0.28 + soft * 9 * SS) / PERIOD
dist = np.abs(phase - np.floor(phase) - 0.5) * 2          # 0 at line centre, 1 between lines
width = np.clip(dark * 1.05, 0, 1)
alpha = np.clip((width - dist) * PERIOD / 2.2 + 0.5, 0, 1) * (width > 0.04)

a = Image.fromarray((alpha * 255).astype(np.uint8)).resize((W, H), Image.LANCZOS)
out = Image.new("RGBA", (W, H), INK + (0,))
out.putalpha(a)
out.save(OUT, optimize=True)
print(OUT, out.size)
