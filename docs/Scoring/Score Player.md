# Score Player 

![Scoring Player](./img/scoringPlayer.png)

## Score Track 

The Score Player is exclusively available for scorable songs, with a score track where the main lead vocal melody is presented as a dynamic graphic display of MIDI notes scrolling from right to left.  

Each note appears as a distinct segment on the screen, visually representing the melody. Syllables are displayed alongside the notes to aid users in singing the lyrics with proper timing.  

As the notes and syllables move across the display, users can follow along in real-time, matching their singing to the melody. This scrolling visual aid helps users stay in tune and provides a clear, engaging way to track their performance against the song's pitch. 

## Cue Line 

The Cue Line is a vertical bar on the player screen of the karaoke app that represents the current time in the song.  

It serves as a fixed reference point for users to sync their vocal performance with the scrolling MIDI notes, ensuring accurate timing and pitch alignment.  

The Cue Line remains stationary while the pitch ball moves up and down along it, reflecting the mic input's pitch. 

## Pitch Ball 

The Pitch Ball is a dynamic element on the player screen of the karaoke app that represents the mic input's pitch.  

It moves vertically along the Cue Line, reflecting the singer's vocal pitch in real-time, going up or down as the mic input's pitch rises or lowers.  

The Pitch Ball helps users visually track their pitch accuracy and adjust their singing to match the target notes displayed on the screen. 

## Score-Sing switch 

The scorable song player features a Score-Sing switch that allows users to turn off the scoring feature to simply sing any scorable song without scoring. 

Effectively, when users select Sing on the Score-Sing switch, all upcoming songs will be played in sing mode. In this mode, the player screen for scorable songs displays their Score-Sing switch on the Sing position. 

:::note

The Score-Sing switch is not displayed on the player screen for non-scorable songs.

:::

The Score-Sing switch is user triggered and doesn't change mode when the queue goes from a scorable song to a non-scorable song. That being said, it will automatically switch form score to sing if car movement is detected and the app goes to driver mode for [safety](../Appendix%20A%20-%20Safety%20Features.md) reasons.

## Score Player Controls 

Scorable songs can’t be scrubbed but other controls work the same as with non-scorable songs. 

## Skip 

Clicking skip immediately goes to the next position in the song queue, cancelling any current score (no score display screen).  

If the next queue position is a non-scorable song, the player goes in Sing mode (no Score-Sing switch). 

The player goes back to Score mode the next time a scorable song is reached in the song queue (Score-Sing switch at the Score position). 

## Restart-Previous 

Clicking Restart-Previous has the usual effect on scorable songs but voids any score progress when a scorable song is interrupted: 

- After first 5 seconds: Reset current score if any, start countdown, restart current song
- Within first 5 seconds: Void current score if any, go to previous queue position, start previous song (with countdown if scorable) 