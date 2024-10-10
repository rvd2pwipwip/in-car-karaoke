# Appendix B - The Song Queue

# The Song Queue

The Stingray Karaoke player features a Song Queue component that is accessed and displayed differently depending on varying factors such as platform, form factor, and screen resolution. When possible, the Song Queue is displayed alongside the player screen so it doesn't obfuscate the lyrics display and lets users manage their song list without interrupting the current performance. 

- The Song Queue is a snapshot of the player’s recently played, current, and upcoming songs
- The Song Queue can list both played and queued songs 
  - The current song is selected by default (visual highlight and animated EQ icon) 
  - Played songs are above the current song 
  - Queued songs are below the current song 
- Played songs are only discarded when the queue limit of 100 is exceeded or when the queue is cleared by users
  - Song Queue limit reached = first in first out (no dialog when adding single song, see [Adding Songs to Queue](#adding-songs-to-queue) for details) 
- The Song Queue is persistent but can be cleared

## Queued Songs

The karaoke player will play the songs that are stacked in the song queue sequentially, starting with the song on top of the list, unless users choose otherwise. 

The current song is visually distinct from other song items currently in the queue. 

The song queue has a limit of 100 items. 

Once played (or skipped), songs are not cleared from the song queue unless the queue limit has been exceeded or users select Sing All Songs on a song collection that would exceed the limit. Then a warning dialog will give users the choice to clear the current queue to add the selected new songs or cancel. 

## Use Cases 
The song queue is mandatory for a good karaoke party experience since this is where users can see which songs will be playing in which order. This is also the place to go to when users want to retry a recent song. 

And most importantly, the song queue also allows users to add songs without interrupting the current performance when the device's form factor allows for it. 

### Last Song
When there is no next song, the player stops and displays a prompt to select another song unless the Loop queue has been turned on previously. In that particular case, the player will start playing the first song.

In any case, if 100 songs have played without any input from the user, the player stops and asks for confirmation to continue playing. 

### Add a Song
The selected song is added to the queue at the selected position (now, next, last). The app immediately goes to the player screen when Sing Now is selected. See [Adding Songs to Queue](#adding-songs-to-queue) for details. 

### Remove a Song
Users can remove a song from the queue. If users remove the current song while it is playing, the song playback will stop, it will be removed from the queue, and the next song item will start playing. 

If the last song of the queue is playing and the user removes it, the song will stop playing and a prompt to select another song will appear on the player.

## Adding Songs to Queue

### Adding a Single Song

- Any song can be added to the song queue in any of 3 queue positions(Now, Next, Last). 
- If there are too many songs in the queue, the oldest song is removed to append the currently selected song (first in first out). 
  - **[Sing Now]** = Insert song at Next position, skip current song and start playing added song 
  - **[Sing Next]** = Place song at Next position of song queue, below current song 
  - **[Sing Last]** = Append song at last position of song queue 

### Adding a List of Songs 

Some lists, mainly party mixes and artist collections, can be added to the song queue in one go with **[Sing All]**. 

- If not too many songs in list:
  - **[Sing list now]** = Add all songs from list to queue, go to player and start playing first added song 
  - **[Add list to queue]** = Add all songs from list to queue 
- If too many songs in list & not empty queue: 
  - **[Sing first XX of list now]**, where XX is the number of slots left in the song queue (100 – current songs in queue) = Append first XX songs from list to queue, go to player and start playing first added song 
  - **[Add first XX to queue]**, where XX is the number of slots left in the song queue (100 – current songs in queue) = Append first XX songs from list to queue 
  - **[Reset queue with list]** = Clear queue and add up to first 100 songs from list
- If too many songs in list & empty queue: 
  - **[Sing first 100 now]** = Add first 100 songs from list to queue, go to player and start playing first song 
  - **[Add First 100 to Queue]** = Add first 100 songs from list to queue 

:::note 

View [Appendix C - Queue Flowcharts](./Appendix%20C%20-%20Queue%20Flowcharts.md) for more details

:::

## Selecting Song Items 

Clicking on the tile of a song item brings its [Song Info](./Screen%20Descriptions/Song%20Info) screen with the options to Sing Now, Sing Next, or Sing Last along with related songs and lyrics. 

Users can select Sing Now to immediately start the song playback on the player screen. 

## Empty Song Queue 

The song queue is accessible from the [Player](./Screen%20Descriptions/Player) screen. There, users can click the Song Queue button to display its panel alongside the player and lyrics. At the top of the [Song Queue](./Screen%20Descriptions/Song%20Queue) panel, users can click Clear Queue to remove all songs. 

In that situation, the player should display a [prompt](./Screen%20Descriptions/Player#empty-song-queue) to pick another song. 
 