import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

import { FaPlay, FaPause } from 'react-icons/fa';


export default function Player({ url }) {

  const [playing, setPlaying] = useState(true);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);



  const handleSeekChange = e => {
    // עדכון ההתקדמות לפי הלחיצה על הסרגל
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);
    playerRef.current.seekTo(newPlayed);
  };


  const togglePlayPause = () => {
    setPlaying(!playing);
  };



  const handleProgress = progress => {
    // progress.played יכיל את האחוז של ההתקדמות
    setPlayed(progress.played);
  };
  

  return (
    <div className='player'>
      <div className='video'>
        <ReactPlayer
          ref={playerRef}
          url={url}
          controls={true}
          playing={playing}
          onProgress={handleProgress} // Add the onProgress event handler

        />
      </div>
      <div className='progress'>
        <div className='progress2'>
        <input
          type="range"
          min={0}
          max={1}
          step='any'
          value={played}
          onChange={handleSeekChange}

        />
        </div>
 


    <button className='playButton' onClick={togglePlayPause}>
      {playing ? <FaPause /> : <FaPlay />}
    </button>
      </div>

    </div>
  );
}





























// import React, { useState, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import ProgressBar from './ProgressBar';

// import { FaPlay, FaPause } from 'react-icons/fa';


// export default function Player({ url }) {

//   const [playing, setPlaying] = useState(true);
//   const [played, setPlayed] = useState(0);
//   const playerRef = useRef(null);
//   const [progress, setProgress] = useState(0); // Add a state for progress



//   const handleSeekChange = e => {
//     // עדכון ההתקדמות לפי הלחיצה על הסרגל
//     const newPlayed = parseFloat(e.target.value);
//     setPlayed(newPlayed);
//     playerRef.current.seekTo(newPlayed);
//   };


//   const togglePlayPause = () => {
//     setPlaying(!playing);
//   };



//   const handleProgress = progress => {
//     // progress.played יכיל את האחוז של ההתקדמות
//     setPlayed(progress.played);
//   };
  

//   return (
//     <div className='player'>
//       <div className='video'>
//         <ReactPlayer
//           ref={playerRef}
//           url={url}
//           controls={true}
//           playing={playing}
//           onProgress={handleProgress}
//         />
//       </div>
//       <div className='progress-container'>
//         <div className='visual-progress-bar' style={{ width: `${played * 100}%` }}></div>
//         <input
//           type='range'
//           min={0}
//           max={1}
//           step='any'
//           value={played}
//           onChange={handleSeekChange}
//           className='seek-input'
//         />
//       </div>
//       <button className='playButton' onClick={togglePlayPause}>
//         {playing ? <FaPause /> : <FaPlay />}
//       </button>
//     </div>
//   );
  
// }



































// import React from 'react';
// import './style.css';
// import ReactPlayer from 'react-player';

// export default function Player({ url }) {
//   return (
//     <div className=''>
//       <ReactPlayer url={url} controls={true} />
//     </div>
//   );
// }


// //////////////////////////////קוד נוסף נפרד://///////////////////

// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';

// export default function Player({ url }) {
//   const [playing, setPlaying] = useState(true);

//   const togglePlayPause = () => {
//     setPlaying(!playing);
//   };

//   return (
//     <div>
//       <div className='video'>
//         <ReactPlayer url={url} controls={true} playing={playing} />
//       </div>
//       <button onClick={togglePlayPause}>
//         {playing ? 'Pause' : 'Play'}
//       </button>
//     </div>
//   );
// }



