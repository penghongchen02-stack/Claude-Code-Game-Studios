// PROTOTYPE - NOT FOR PRODUCTION
// Question: does chaining passes and a special move into one flowing play feel good for a full short match against an AI that can do the same?
// Date: 2026-11-13
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // --- the match ---
  half_seconds: { value: 120, min: 30, max: 600, step: 10 },   // seconds a half lasts
  shot_clock: { value: 14, min: 6, max: 30, step: 1 },         // seconds to shoot before a turnover
  three_radius: { value: 118, min: 60, max: 200, step: 2 },    // px from the rim: beyond it a shot is worth 3

  // --- movement ---
  player_speed: { value: 72, min: 30, max: 150, step: 2 },     // px per second (roles scale it)
  jump_height: { value: 20, min: 8, max: 40, step: 1 },        // px a jump rises
  jump_time: { value: 0.55, min: 0.3, max: 1, step: 0.05 },    // seconds in the air
  body_radius: { value: 9, min: 0, max: 20, step: 1 },         // px: players closer than this push apart

  // --- shooting ---
  shot_charge_time: { value: 0.75, min: 0.3, max: 2, step: 0.05 }, // seconds the shot bar takes to fill
  sweet_center: { value: 0.68, min: 0.3, max: 0.95, step: 0.01 },  // where on the bar the sweet spot sits
  sweet_width: { value: 0.1, min: 0.02, max: 0.4, step: 0.01 },    // half width of the sweet spot
  shot_base_chance: { value: 0.78, min: 0.1, max: 1, step: 0.02 }, // an open, perfectly timed shot
  timing_penalty: { value: 0.7, min: 0, max: 1, step: 0.05 },      // how much a bad release costs
  shot_range_falloff: { value: 220, min: 60, max: 600, step: 10 }, // px over which distance eats the chance
  contest_dist: { value: 20, min: 6, max: 50, step: 1 },           // px: a defender this close contests
  contest_penalty: { value: 0.3, min: 0, max: 0.8, step: 0.02 },   // chance lost to a hand in the face
  dunk_range: { value: 26, min: 10, max: 60, step: 1 },            // px from the rim: Space dunks instead
  layup_chance: { value: 0.85, min: 0.2, max: 1, step: 0.05 },

  // --- passing and defence ---
  pass_speed: { value: 230, min: 80, max: 500, step: 10 },       // px per second
  pass_buffer: { value: 0.35, min: 0, max: 1, step: 0.05 },      // seconds an early press waits for the ball
  catch_radius: { value: 7, min: 3, max: 20, step: 1 },          // px: the ball is caught this close
  steal_range: { value: 14, min: 5, max: 30, step: 1 },          // px: a lunge reaches this far
  steal_chance: { value: 0.5, min: 0, max: 1, step: 0.05 },      // your lunge on a dribbler
  steal_stun: { value: 0.6, min: 0, max: 2, step: 0.1 },         // seconds a missed lunge stumbles
  lunge_time: { value: 0.25, min: 0.1, max: 0.6, step: 0.05 },
  block_range: { value: 15, min: 5, max: 40, step: 1 },          // px: a jumping hand this close blocks
  block_window: { value: 0.3, min: 0.05, max: 0.8, step: 0.05 }, // seconds after release a shot can be blocked

  // --- the special meter ---
  meter_basket: { value: 0.5, min: 0, max: 1, step: 0.05 },
  meter_assist: { value: 0.35, min: 0, max: 1, step: 0.05 },
  meter_steal: { value: 0.45, min: 0, max: 1, step: 0.05 },
  meter_block: { value: 0.45, min: 0, max: 1, step: 0.05 },
  meter_pass: { value: 0.06, min: 0, max: 0.5, step: 0.01 },
  heat_duration: { value: 6, min: 1, max: 20, step: 0.5 },       // seconds the Sharpshooter's Heat Check lasts
  heat_sweet_mult: { value: 3, min: 1, max: 6, step: 0.5 },      // sweet spot width while hot
  heat_chance: { value: 0.95, min: 0.3, max: 1, step: 0.05 },
  jet_duration: { value: 0.9, min: 0.3, max: 3, step: 0.1 },     // seconds of the Slasher's Jet Drive
  jet_speed_mult: { value: 2.3, min: 1, max: 5, step: 0.1 },
  wall_duration: { value: 2.5, min: 0.5, max: 8, step: 0.25 },   // seconds the Big's Wall stands
  wall_range: { value: 40, min: 10, max: 100, step: 2 },         // px: a shot released this close is blocked

  // --- teammates ---
  cut_every: { value: 3, min: 1, max: 10, step: 0.5 },           // seconds between off-ball cuts

  // --- the AI, per difficulty ---
  ai_easy_reaction: { value: 0.6, min: 0.05, max: 2, step: 0.05 },   // seconds between decisions
  ai_normal_reaction: { value: 0.35, min: 0.05, max: 2, step: 0.05 },
  ai_hard_reaction: { value: 0.18, min: 0.05, max: 2, step: 0.05 },
  ai_easy_shot_err: { value: 0.9, min: 0, max: 2, step: 0.05 },      // how far off the sweet spot it releases
  ai_normal_shot_err: { value: 0.5, min: 0, max: 2, step: 0.05 },
  ai_hard_shot_err: { value: 0.2, min: 0, max: 2, step: 0.05 },
  ai_easy_contest: { value: 12, min: 4, max: 40, step: 1 },          // px it closes to on the ball handler
  ai_normal_contest: { value: 18, min: 4, max: 40, step: 1 },
  ai_hard_contest: { value: 24, min: 4, max: 40, step: 1 },
  ai_easy_steal: { value: 0.15, min: 0, max: 1, step: 0.05 },        // chance of a steal when it lunges or reads a pass
  ai_normal_steal: { value: 0.35, min: 0, max: 1, step: 0.05 },
  ai_hard_steal: { value: 0.6, min: 0, max: 1, step: 0.05 },
  ai_easy_block: { value: 0.2, min: 0, max: 1, step: 0.05 },         // chance it jumps at a shot in reach
  ai_normal_block: { value: 0.45, min: 0, max: 1, step: 0.05 },
  ai_hard_block: { value: 0.75, min: 0, max: 1, step: 0.05 },
  ai_easy_special: { value: 0.3, min: 0, max: 1, step: 0.05 },       // chance it fires a full special when it fits
  ai_normal_special: { value: 0.7, min: 0, max: 1, step: 0.05 },
  ai_hard_special: { value: 1, min: 0, max: 1, step: 0.05 },
  ai_easy_double: { value: 0, min: 0, max: 2, step: 1 },             // 0 never doubles, 1 second half, 2 always
  ai_normal_double: { value: 1, min: 0, max: 2, step: 1 },
  ai_hard_double: { value: 2, min: 0, max: 2, step: 1 },
  ai_easy_close_after: { value: 4, min: 0, max: 20, step: 1 },       // baskets in the match before it contests hard
  ai_normal_close_after: { value: 2, min: 0, max: 20, step: 1 },
  ai_hard_close_after: { value: 0, min: 0, max: 20, step: 1 },
};
