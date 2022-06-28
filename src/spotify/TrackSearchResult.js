import React from "react"

export default function TrackSearchResult({ track, chooseTrack }) {
  function Play_Song() {
    chooseTrack(track)
  }

  //the cursor "pointer" is to be able to click and launch handle play
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={Play_Song}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  )
}