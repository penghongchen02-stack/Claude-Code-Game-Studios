# sprites.png layout

The game draws its players from `sprites.png` when the file is there, and from its own code figures when it is not.

- **Cell:** 28 px wide, 30 px tall. Each player takes two rows of nine cells (18 poses). The figure faces right, feet on row 28 of the cell (the game flips it to face left).
- **Rows, top to bottom:** two a player, ten players: home 7, 3, 5, 1, 9 (point, shooter, centre, forward, forward), then away 4, 8, 2, 6, 0.
- **Cells, left to right then the second row:** stand, step A1, step A2, step B1, step B2, charge 1, charge 2, shoot 1, shoot 2, jump, dunk 1, dunk 2, steal 1, steal 2, wall 1, wall 2, stun, scored.
- **Walk:** the game plays stand, A1, A2, A1, stand, B1, B2, B1 at twelve frames a second.
- **Flashes:** the game draws a one-pixel halo around the cell for the special and ready flashes, so leave the surround transparent.
- **Format:** PNG with transparency, 252 x 600 px (ten players). Keep the jersey number in the art if you want one; the game draws none over a sheet.

**After replacing the PNG, run `python3 assets/pack-sprites.py`** from the game's folder: it packs the PNG into `assets/sprites.js`, which is what the page loads (a file loaded straight from disk would mark the canvas cross-origin).

To force the code figures while testing, add `?sheet=0` to the address. `?scene=export` shows the code figures in this layout.
