import React from 'react'

function VideoPlayer(props) {

    return (
      <div className="videoWrapper">
        <iframe 
            id={props.id}
            width="560" 
            height="315" 
            src={props.src} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
      </div> 
    )
}

export default VideoPlayer