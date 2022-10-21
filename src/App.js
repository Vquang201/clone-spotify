import Navbar from './Components/Navbar';
import './App.css';
import DetailSong from './Components/DetailSong';
import ListSong from './Components/ListSong';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
import Playing from './Components/Playing';
import { useState } from 'react';
import AppProvider from './Context/AppProvider';

function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const currentSong = DataSongs.find(song => song.id === idSong)
    if (!currentSong) {
      setSong(DataSongs[0])
    } else {
      setSong(currentSong)
    }
  }
  return (
    <div>

      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='md:grid grid-cols-3 grid-flow-row-dense bg-slate-600 h-screen-navber-player overflow-hidden sm:flex-col '>
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>

    </div>
  );
}

export default App;
