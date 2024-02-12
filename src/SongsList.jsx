


// import React, { useState } from 'react';
// import songs from './songs.json';
// import Song from './Song';
// import Player from './Player';
// import './style.css';

// export default function SongsList() {
//   const [currentSongUrl, setCurrentSongUrl] = useState(null);

//   const handleSongClick = (url) => {
//     setCurrentSongUrl(url);
//   }

//   return (
//     <div>
//       <div className='list'>
//         {songs.map(song => (
//           <div onClick={() => handleSongClick(song.youtube_link)} key={song.name}>
//             <Song song={song}/>
//           </div>
//         ))}
//       </div >
//       <div className='player'>
//       {currentSongUrl && <Player url={currentSongUrl} />}

//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import Song from './Song';
// import songs from './songs.json';
// import './style.css';

// export default function SongsList({ onSongClick }) {
//   return (
//     <div className='list'>
//       {songs.map(song => (
//         <div key={song.name} onClick={() => onSongClick(song.youtube_link)}>
//           <Song song={song} />
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useEffect } from 'react';
import { useState } from 'react';
import Song from './Song';
// import songs from './songs.json';
import './style.css';
export default function SongsList({ onSongClick ,searchTerm}) {
  
  
const [songs, setSongs]=useState([])
  
useEffect(() => {


  const url = `https://youtube-v2.p.rapidapi.com/search/?query=${searchTerm}&lang=en&order_by=this_year`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7a32247d76mshfa91fb4aa3d721bp1ddc96jsnb38defe67a5a',
      'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
  };


    fetch(url, options).then((res) => {
      res.json().then((object) => {
        setSongs(object.videos);
      });
    });


  }, [searchTerm]);

  
 
  return (
    <div className='list'>
      {songs.map(song => (
        <div key={song.video_id} onClick={() => onSongClick(song.video_id)}>
          <Song song={song} />
        </div>
      ))}
    </div>
  )


}
    