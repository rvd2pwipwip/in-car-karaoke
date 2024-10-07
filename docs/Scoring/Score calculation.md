# Score Calculation 

Basically, the score increases when there is a match between the pitch of the microphone input and the pitch of the score track at the intersection of the MIDI note display and the cue line. 

## Pitch Match 
A pitch match is graphically represented with different visual elements: 

- Notes fill with pitch match color 
- Star meter gradually fills 
- Score display increases 
- Score multiplier status 

Each frame (±33 ms at 30 fps) of a note with a pitch match increases the score by TBD10 points. 

## Hit 
A note is hit when at least TBD60% of its duration is filled by a pitch match. 

Conversely, a note is missed when less than TBD60% of its duration is filled by the pitch match. 

## Perfect Hit 
A perfect hit is a hit with a pitch match of 100% of a note duration. 

- Perfect hits are displayed with TBD 
- Perfect hits are considered the same as hits for streak purposes 

## Miss 
A miss both resets the streak and decreases the current multiplier (if greater than 1). 

## Streak 

A streak is a succession of note hits. 

- Incremented by 1 for every note hit (TBD60% or more pitch match) 
- Reset to 0 with any miss 

## Multiplier 
A multiplier is a type of bonus that depends on streaks. 

- Scorable songs start with a multiplier of 1 (no bonus) 
- Each TBD10-note streak increments the multiplier by 1 
- The multiplier value multiplies the pitch match value (points per frame) 
  - i.e. 10 pts/frame at x2 becomes 20 pts/frame 
- There are TBD3 possible multipliers for a maximum multiplier of x4 
- A miss instantly decreases the multiplier by 1 to a minimum of 1 
- Note colors (pitch match fill, empty outline perfect glow etc.) change for every multiplier level 