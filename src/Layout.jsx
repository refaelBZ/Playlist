// import React from 'react'
// import SongsList from './SongsList'
// import Player from './Player'
// import { useState } from 'react';
// import DataContext from './context/DataContext';
// import './style.css';


// export default function Layout() {
//   const [play, setPlay] = useState()
//   return (
//     <DataContext.Provider value={{play, setPlay}}>
//     <div className='layout'>
//       <SongsList />
//       <Player/>
//     </div>
//     </DataContext.Provider>
//   )
// }

import React, { useState } from 'react';
import SongsList from './SongsList';
import Player from './Player';
import Header from './Header';
import './style.css';
import Search from './Search';
import Liked from './Liked';
import Home from './Home';
import Profile from './Profile';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function Layout() {

  
  
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log(searchTerm)
  };
  
  
  
  const [currentSongUrl, setCurrentSongUrl] = useState(null);

  const handleSongClick = (songID) => {
    let url="https://www.youtube.com/watch?v="+songID;
    setCurrentSongUrl(url);
  
    }


  return (

    <div>
    <Header handleSearch={handleSearch}/>
  
    <div className='layout'>
      
      <Routes>
      
        <Route path="home" element={<Home />}/>
        <Route path="liked" element={<Liked/>}/>
        <Route path="Profile" element={<Profile/>}/>
        {/* <Route path="result" element={}/> */}

      </Routes>
      <SongsList onSongClick={handleSongClick} searchTerm={searchTerm} />
      <div>
        
        </div><Player url={currentSongUrl}  />
    </div>

    
    
    </div>


   
  );
}