# Asset Specs — Game: Fast Break Heroes

> **Source**: design/game-brief.md, Look and references; the user's four reference screenshots in `references/`
> **Art direction**: design/game-brief.md (Look and references), no art bible. Colour, shape and size rules below are proposals, not constraints.
> **Generated**: 2026-11-13
> **Review**: solo mode. art-director and technical-artist skipped; technical constraints not validated.
> **Status**: 5 assets specced / 0 approved / 0 in production / 0 done

Avoid, from the brief: no name, art, characters, logos or UI of Hoopland, Basketball Club Story or Kairosoft. The prompts describe the style in general terms only.

## ASSET-001 to ASSET-003: Player roles (Slasher, Sharpshooter, Big)

| Field | Value |
|-------|-------|
| Category | Sprite / 2D Art |
| Dimensions | 32x32 px per frame, feet on the bottom row, facing right |
| Frames | idle, run x4, shoot, jump, dunk, lunge, arms-out wall, stunned (about 12 per role) |
| Teams | Home white with green trim, Away blue with red trim, as palette swaps |
| Format | PNG with transparency, one sheet per role |
| Naming | `player_slasher_home.png`, `player_slasher_away.png`, `player_sharpshooter_home.png`, `player_big_home.png`, and so on |

**Brief anchor:** Look and references: "chunky big-headed players ... head about half the height, big hair shapes with a highlight, two dot eyes and a mouth, stubby arms, big shoes; each of the three roles its own silhouette"; thick dark outline, two-tone shading, every figure drawn.

**Visual Description:**
A cheerful chibi basketball player seen from the side. The head is about 10 of 24 pixels tall, with a big outlined hairstyle and a lighter highlight. Two dot eyes, a small mouth and a pink cheek sit on a plain skin shape. The jersey has side stripes and a number block, the shorts are in the trim colour, and the shoes are large and bright. Slasher has short legs and a headband. Sharpshooter has spiky or swept hair and a slim body. Big has a wide jersey, thick legs and a flat or curly head of hair.

**Generation Prompt:**
```
pixel art sprite sheet, chibi basketball player, side view facing right, oversized head
about half the body height, no neck, tiny dot eyes and small mouth, pink cheek dot, big
outlined hair with a lighter highlight, stubby arms and legs, large shoes, thick dark
outline, two-tone cel shading, flat colours, clean limited palette, white jersey with green
trim and number block, green shorts, transparent background, game sprite 32x32 per frame,
poses: idle, run cycle 4 frames, jump shot, dunk, steal lunge, defensive arms out
negative: anti-aliasing, gradients, blur, realistic proportions, 3D render, photo, text,
watermark, smooth edges, emoji, existing game characters or logos
```

**Status:** Needed

## ASSET-004: Gym background (stands and wall)

| Field | Value |
|-------|-------|
| Category | Environment |
| Dimensions | 640x110 px, scrolls with the court; two parallax layers if the tool allows |
| Format | PNG |
| Naming | `bg_gym_stands.png` |

**Brief anchor:** Look and references: bright cheerful sports-club pixel art; deep blue stands; the crowd is simple repeated rows; background held in a narrower value range than the players.

**Visual Description:**
A bright indoor arena seen from the court. A deep blue wall with big pale windows sits on top. Under it are four tiers of tiny pixel fans in mixed shirt colours, each with a round head and visible hair. A cream advertising board with coloured blocks runs along the bottom. Detail stays low so the players read clearly in front of it.

**Generation Prompt:**
```
pixel art background, indoor basketball arena stands, side view, four rows of tiny chibi
spectators with round heads and different hair and shirt colours, deep blue wall with large
pale windows, cream advertising boards with coloured blocks along the bottom, bright
cheerful, low contrast so foreground characters stand out, limited palette, hard pixel
edges, seamless horizontal tiling, 640x110 pixels
negative: anti-aliasing, gradients, blur, realistic, photo, 3D, readable brand logos, text,
watermark, existing game screenshots
```

**Status:** Needed

## ASSET-005: Court floor

| Field | Value |
|-------|-------|
| Category | Environment |
| Dimensions | 640x62 px, the full court length, with a baseline band under it |
| Format | PNG |
| Naming | `bg_court_floor.png` |

**Brief anchor:** Look and references: warm orange court with cream lines; side view that scrolls with the ball. Hoops are separate sprites layered over the players.

**Visual Description:**
A warm orange wooden court in side perspective with fine alternating plank bands. Cream lines mark the baselines, centre line, centre circle, three-point arcs and keys. A darker brown strip runs along the front edge.

**Generation Prompt:**
```
pixel art basketball court floor, side view, warm orange wood with subtle plank stripes,
cream court lines, centre circle, three-point arcs and key boxes at both ends, darker brown
front edge, flat colours, hard pixel edges, 640x62 pixels
negative: anti-aliasing, gradients, blur, realistic wood grain, photo, 3D, logos, text
```

**Status:** Needed

## Notes for generating

- Image tools rarely land on a true pixel grid. Generate at four times the size, shrink with nearest-neighbour, then clean up in a pixel editor.
- For matching poses, make one good character first, then use that image as the reference for every other frame.
- Every AI-made file goes in `prototypes/fast-break-heroes/assets/` with an entry in `assets/provenance.yaml` (origin: ai, the tool, the date).
