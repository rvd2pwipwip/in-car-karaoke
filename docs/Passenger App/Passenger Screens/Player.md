# Player

## Active State (Controls Display)

<div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <img src="/img/playerActive.png" alt="splash" width="300" style={{ marginRight: '20px', marginBottom: '20px' }} />
  
  <table style={{ width: '100%' }}>
  <thead>
    <tr>
      <th>#</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Song Queue button, click to display current session song queue</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Song lyrics</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Add Song to Queue button, click to search and browse for songs</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Song Progress Bar</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Back, click within first 3 secs to play previous song (if any); after 3 secs, click to restart current song
Back is disabled at the start of the first song (there is no previous song)</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Back 10 button, click to scrub back 10 seconds from current song position</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Play / Pause toggle button, click to play or pause current song playback</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Forward 10 button, click to scrub forward 10 seconds from current song position</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Skip, click to skip current song and start playing next song (if any)
Skip is disabled on the last song (there is no next song)</td>
    </tr>
  </tbody>
  </table>
</div>

:::tip
- The Passenger Player screen lets passengers read lyrics while the car is moving, ensuring driver focus for safety reasons.
:::
:::note
- Player controls and other UI elements fade out after 3 seconds of idle time; they fade back in with a click anywhere on the player screen
:::

## Idle State (Controls Auto-Hide)

<div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <img src="/img/playerIdle.png" alt="splash" width="300" style={{ marginRight: '20px', marginBottom: '20px' }} />
  
  <table style={{ width: '100%' }}>
  <thead>
    <tr>
      <th>#</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Song Queue button, click to display current session song queue</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Song lyrics</td>
    </tr>
  </tbody>
  </table>
</div>

:::note

- Unobstructed viewing experience, allowing users to see the media without any distractions from the player controls
- Click anywhere to go back to the active state, enabling player controls

:::

## Empty Song Queue 

<div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <img src="/img/playerEmptyQueue.png" alt="splash" width="300" style={{ marginRight: '20px', marginBottom: '20px' }} />
  
  <table style={{ width: '100%' }}>
  <thead>
    <tr>
      <th>#</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Song Queue button, click to display current session song queue</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Pick songs prompt and illustration</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Add Song to Queue button, click to search and browse for songs</td>
    </tr>
  </tbody>
  </table>
</div>

:::note
- Player controls are not displayed when the song queue is empty
:::