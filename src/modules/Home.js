import React from 'react';

function Home(props) {
  return (
    <div>
      <h1>Welcome, Buddy!</h1>
      <ListOfSongs></ListOfSongs>
    </div>
  )
}

function ListOfSongs(songList) {

  return (
    <div>
      <h3>List of Songs</h3>
      <ul>
        <li>One</li><br></br>
        <li>Two</li><br></br>
        <li>Three</li><br></br>
        <li>Four</li><br></br>
      </ul>
    </div>
  )
}

export default Home;
