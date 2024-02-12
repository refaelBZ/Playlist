import React, { useState } from 'react'
import './style.css';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios'; // Make sure axios is imported



export default function Song({ song, onClick }) {






  const [liked, setLiked] = useState(false);




  const handleFavorite = (e) => {
    e.stopPropagation(); // Prevent event from propagating to parent elements
    setLiked(!liked);

    axios.post("http://localhost:2500/liked", {
      video_id: song.video_id,
      title: song.title,
      author: song.author,
      // thumbnails: song.thumbnails[0].url
    })
    .then(response => {
        console.log('Data sent successfully:', response);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
  }


  {
    return (
      <div className='song' onClick={onClick}>
        <div className='leftSide'>
          <div className='image'><img src={song.thumbnails[0].url} /></div>
          <div className='artistAndName'>
            <div className='name'>{song.title.split(" ").slice(0, 3).join(" ")}</div>
            <div className='artist'>{song.author}</div>
          </div>
        </div>
        <div className='rightSide'>
          <div className='time'>{song.video_length}</div>

          <button
            className={`likeButton ${liked ? 'liked' : ''}`}
            onClick={handleFavorite}
        >
            <FaHeart />
        </button>
        </div>
      </div>
    );
  }

}
