# Song Info

<div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <img src="/img/songInfo.png" alt="Song Info" width="300" style={{ marginRight: '20px', marginBottom: '20px' }} />
  
  <table style={{ width: '100%' }}>
    <thead>
      <tr>
        <th>#</th>
        <th style={{ textAlign: 'left'}}>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Back button, click to go back to the previous screen</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Close button, click to close the screen</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Song thumbnail image</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Song TTA</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Sing Now button, click to add song to queue and start playback immediately</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Sing Next, click to add song after current queue position</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Sing Last, click to append song at last queue position</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Related songs</td>
      </tr>
    </tbody>
  </table>
</div>

:::note

- The Sing Now button immediately brings the user to the Player screen and automatically starts playing the song
- The Sing Next and Sing Last buttons do not go to the Player screen; user feedback is given with a green toast component displaying the Successfully added to queue message
- The Sing Next and Sing Last buttons have the same behavior as the Sing Now button if the Song Queue is empty

:::