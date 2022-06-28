
import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken, trackUri }) {
    //state of play button, set to true everytime you choose a song
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri])

  //again, make sure you have a token before you try and crash
  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}