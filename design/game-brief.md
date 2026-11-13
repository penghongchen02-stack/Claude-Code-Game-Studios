# Game Brief: Fast Break Heroes

## In your words
a simulation game where pixel baseball match where it got different of ability but the character design and motion and gameplay feel similar to hoopland
Not baseball but basketball
1. Abilities: One special move for each player
2. Team size: I think 3 on 3
3. Match length: a short clock
4. Feel: flowing
5. Look: a side view court and snappy few frame
6. How hard: the ai should be able to do all that with different level of difficulty.
7. Catch-up: strict contest and it depend how it play.
8. a lice of the game.
After play: I want the character design look like this (the four Basketball Club Story screenshots again)
After play: How can u improve the img because i can not draw but i need a character design for sure (all of it: faces, hair, bodies, motion, HUD portrait)
After play: References (a Kairosoft-style fan character, then a Kairosoft-style icon). It does not look it like this can u img trace the one I send you and frame by frame anazlye the detail. If you compare it side by side it does not even look like it
After play: Like see the char action. If there a way we can make it a flat diagram for the characters
After play: Use this one (the Kairosoft-style icon): every figure on the icon's own rows
After play: Almost there. Can u keep on fixing it until it look exactly like that
After play: (a ripped Kairosoft sprite sheet, study only) Make a basketball character out of this and animation as well
After play: Make the game load a real sprite sheet image and that is mine work
After play: The animation is still terrible. Fix it over and over until it look smooth
After play: (a Hoopland court screenshot) Give the ball animation as well and fix the background to match the game make it 5 vs 5 but be sure to use this example. And fix the camera angle like this

**Pitch:** Pixel 3-on-3 basketball where every player has one special move, and a well-timed chain of passes, drives and specials turns into one unstoppable fast break.

**Genre:** arcade sports (basketball)

**Controls:** `?scene=sheet` (and `&team=1`) in the address shows the flat character sheet; `?scene=figures` every figure and action · arrows or WASD move · Space shoot (hold, release at the sweet spot) or jump to block · X pass to the teammate you face or steal · Shift the controlled player's special move, when the meter is full · Tab switch defender. Keyboard only. *(guessed)*

**Question:** does chaining passes and a special move into one flowing play feel good for a full short match against an AI that can do the same?

**Hooks:** one special move per player, charged by good play: the Sharpshooter's deep three with a wide sweet spot, the Slasher's burst drive into a dunk nobody blocks, the Big's wall block that can't be faked. The AI uses them too, at three difficulty levels.

**Intent:** empty

## Look and references
- Mood: bright, cheerful sports-club pixel art; a sunny gym with a cheering crowd; every move reads at a glance.
- Camera and scale: the whole court seen from above the near sideline, fixed (`static`), as in the Hoopland court screenshot; native 320x180, scaled by whole numbers, pixel smoothing off.
- Shapes: chunky big-headed players in the proportions of the screenshots, the head about half the height, big hair shapes with a highlight, built on the rows of `references/kairosoft-style-icon.png`, traced pixel by pixel: an 11-wide, 20-tall figure, hair the icon's own rows on every player in four tones hanging past the eyes (only the colours differ a player), tones derived the icon's way with the hue kept, a four-neighbour outline, face 6 rows, eyes one pixel wide and two tall (black over brown) three apart with a 2-wide pale patch between them, a 2-wide red mouth, one blush pixel under each eye, a dark neck band and collar, a shirt with a light yoke and sleeve, shorts, 3-wide legs and shoes with a light toe, brows and mouth that change with the pose; a shaded shirt with a number, two-tone shorts, short legs, bright shoes with a light top row, arms clear of the shirt; an eight-frame walk at twelve frames a second (stand, half step, full step with a one-pixel drop, half step, and the same on the other foot, arms swung opposite); every action with an in-between drawing (two charge stages, half and full shot, rising and falling jump, reach and slam dunk, half and full steal reach, half and full wall spread, a stun wobble); a landing squash; the controlled player's portrait in the HUD; each of the three roles its own silhouette (lanky Sharpshooter, low compact Slasher, wide tall Big); round ball, boxy hoop and backboard.
- Values: players and ball brightest; court mid-tone; crowd and stands held darker and lower in contrast.
- Palette: warm orange court with cream lines, deep blue stands, your team in white and green, theirs in blue and red, the ball bright orange, meter glow yellow; shadows shift cooler.
- Detail: on faces, hair and jerseys; the crowd is simple repeated rows.
- Rules: one pixel density, thick dark outline on every figure, two-tone shading, every figure drawn, no emoji, no plain circles.
- Signature: a full special-move meter makes the player flash and the crowd's rows bob.
- References: Hoopland (snappy few-frame motion, the flow of a side-view match, the match feel); your four screenshots in `references/` (the court and crowd); `references/kairosoft-style-icon.png`, traced pixel by pixel for the head and body grammar; `references/kairosoft-style-fan-character.png` (the blush and the mouth).
- View: 2D · Camera: the whole court from above, fixed; stands and scoreboard across the top, the team-colour aprons at the ends, the backs of courtside heads along the bottom.

## First minute
Title screen: pick a difficulty (Easy, Normal, Hard), press Start. Tip-off; your Slasher has the ball at the left, the clock reads 2:00. A prompt shows "arrows move, X pass". You dribble right, a defender steps up, you pass to the open Sharpshooter; a prompt shows "hold Space, release at the flash". The shot goes in, the crowd bobs, the score reads 2-0, and the special meter under your player fills a notch. The AI brings it up; you press Tab to the nearest defender and jump at their shot. Around the 40-second mark your meter fills, the player flashes, and Shift fires the Slasher's burst drive straight past two defenders into a dunk. That is the hook landing.

## Challenge
On Normal, after the first two baskets the AI closes out on shooters, jumps lazy passes and runs its own specials when its meter fills; by the second half it doubles your ball handler. On Hard it does all of that from the tip, and its shooter rarely misses an open look. On Easy it contests late and never doubles. There is no catch-up boost: a strict, even contest. A loss ends the match with the final score and a Play Again button. *(difficulty tiers guessed)*

## Core loop
- Move the ball: dribble, pass to the open teammate, time the shot release.
- Score or defend; good plays fill the special meter.
- Fire a special at the right moment to break the defence.
- The clock runs out; higher score wins, tie goes to the next basket. Play again at any difficulty.

## Goal & fail state
- Win the match on the clock against the AI at the chosen difficulty. The match ends when time runs out; trailing at the buzzer is the loss. *(tie-break guessed)*

## Features
- [x] 5-on-5 full-court match, the whole court on screen from above (changed after play from 3-on-3 side view)
- [x] Three player roles with their own silhouette and one special move each, on a meter filled by good play; five a side as point, shooter, centre, forward, forward
- [x] The ball spins as it travels, keeps a shadow on the floor in the air, and trails on passes and shots
- [x] Shot timing with a visible sweet spot; a press snaps straight into the pose; a pass pressed early fires when the ball arrives
- [x] Teammates take five spots (point, two wings, a corner, the centre low), cut and shoot when open; defenders mark by slot; switch defender with a key
- [x] AI opponents at Easy, Normal and Hard, using the same moves and specials as you
- [x] Short clock, two halves of two minutes, score and clock big on screen, then a results screen *(half length provisional)*
- [x] Title screen with difficulty select, and Play Again
- [x] The players drawn from `assets/sprites.png` when it is there (two rows of nine cells a player, 18 poses, layout in `assets/sprites-layout.md`, packed into `assets/sprites.js` by `assets/pack-sprites.py`), from the code figures when it is not; the shipped file is the code figures exported

## Your systems
- one special move for each player · in the slice
- a sprite sheet image for the players · in the slice
- 5 on 5 (changed after play from 3 on 3) · in the slice
- a short clock · in the slice
- AI with different levels of difficulty · in the slice
- simulation side (a club, a league, a season) · later *(guessed)*

## Keep
-

## Avoid
- Hoopland's name, art, characters, logos and UI
- Basketball Club Story's and Kairosoft's name, art, characters, logos and UI
- no catch-up boost for the trailing team
- baseball

## Out of scope
- real teams, leagues and seasons: grow it
- a club to run, recruiting and training players: grow it
- a commentator: grow it
- players who improve with practice: add it as a feature
- a replay of a great play: change it after play

## Build order
1. One full match: tip-off, move, pass, timed shot, block, steal, the three specials on both teams, the clock, the score, the results screen. Normal difficulty first.
2. Easy and Hard tiers and the title screen's difficulty select.
3. Crowd, meter flash, sweet-spot flash, whoosh and swish sounds.

---
**Kill condition:** if a chained play still feels like button-mashing after two tuning rounds. *(guessed)*

**Who it's for / what they feel:** fans of pixel sports sims who want a quick, flowing match where one timed special turns the game. *(guessed)*

**Games you love / don't:** Hoopland (the motion and the feel); Basketball Club Story (the look).
