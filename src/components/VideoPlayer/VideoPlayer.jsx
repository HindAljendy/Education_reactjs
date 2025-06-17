import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'
import { useRef } from 'react'

const VideoPlayer = ({playState ,setPlayState}) => {

    const player = useRef(null);

    /* The closePlayer function checks if the click target is exactly the player.current element. This will only trigger 
    when clicking directly on the overlay, not on the video itself, which is probably what you want. */
    const closePlayer =(e) =>{

        if(e.target === player.current){
            setPlayState(false);
        }
    }


    return (
        <div className={`VideoPlayer ${playState ? '': 'hide'}`} 
        ref={player} onClick={closePlayer}
        >
            <video src={video} autoPlay controls muted></video>
        </div>
    )
}

export default VideoPlayer
