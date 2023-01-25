import React, { useState } from 'react'

interface Props {
  url: string;
}

const VideoPlayer= () => {
  const [playerUrl, setPlayerUrl] = useState<string | undefined>("https://www.youtube.com/watch?v=X0_R1e-HSvA&t=14s")

  let videoPlayer = null;
  if (playerUrl) {
    if (playerUrl.includes("youtube.com")) {
      videoPlayer = <iframe title="youtube-video" width="100%" height="100%" src={`https://www.youtube.com/embed/${new URL(playerUrl).searchParams.get("v")}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    } else if (playerUrl.includes("twitch.tv")) {
      videoPlayer = <iframe title="youtube-video" width="100%" height="100%" src={`https://player.twitch.tv/?channel=${new URL(playerUrl).pathname.split("/")[1]}`} frameBorder="0" allowFullScreen></iframe>
    } else {
      videoPlayer = <video width="100%" height="100%" controls> <source src={playerUrl} type="video/mp4" /> </video>
    }
  }

  return (
    <div className='w-[95%] h-[520px]  mt-4'>
      {videoPlayer}
    </div>
  )
}

export default VideoPlayer