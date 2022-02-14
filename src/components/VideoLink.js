import React from 'react'

function VideoLink(props) {

  function loadVideo() {
    let link = props.link;
    let videoPlayer = document.getElementById("video-player");
    videoPlayer.src = link;
  }

    return (
      <a 
        href={props.href} 
        link={props.link} 
        className="text-link"
        onClick={loadVideo}
        >
        {props.linkText} 
      </a> 
    )
}

export default VideoLink