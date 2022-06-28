import { useState, useEffect } from "react"

import useAuth from "./useAuth"
import Player from "./Player"

import TrackSearchResult from "./TrackSearchResult"

import { Container, Form } from "react-bootstrap"

import SpotifyWebApi from "spotify-web-api-node"

import axios from "axios"

const spotifyApi = new SpotifyWebApi({
  clientId: "8b945ef10ea24755b83ac50cede405a0",
})

export default function Dashboard({ code }) {
  const Access_Token = useAuth(code)

  const [Search, setSearch] = useState("")

  const [Search_Result, setSearchResults] = useState([])

  const [Playing, setPlayingTrack] = useState()

  const [Lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
    //clear
    setSearch("")
    setLyrics("")
  }

  useEffect(() => {
    if (!Playing) return
    //Lyrics finder lib, gets you lyrics !
    axios
      .get("http://localhost:3001/Lyrics", {
        params: {
          track: Playing.title,
          artist: Playing.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.Lyrics)
      })
  }, [Playing])

  //to not specify every time we make a querry / search querry
  useEffect(() => {
    if (!Access_Token) return
    spotifyApi.setAccessToken(Access_Token)
  }, [Access_Token])

  //if no search, empty the results
  useEffect(() => {
    if (!Search) return setSearchResults([])
    if (!Access_Token) return

    //if you write a name, then immeditately search another, you cancel the first
    let cancel = false
    //spotify's search function returns
    spotifyApi.searchTracks(Search).then(res => {
      if (cancel) return
      setSearchResults(  //items are the track / songs
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    //cancelling
    return () => (cancel = true)
  }, [Search, Access_Token])

  //song / artist searcher
  //overflowY == scroll bar if it is needed
  //whitespace wrap to prewarp it
  return (
    <Container className="d-flex flex-column py-2" 
               style={{ height: "100vh" }}>
      <Form.Control
        type="Search"
        placeholder="Search Songs or Artists"
        value={Search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" 
           style={{ overflowY: "auto" }}> 
        {Search_Result.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {Search_Result.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {Lyrics}
          </div>
        )}
      </div>
      <div>
        <Player Access_Token={Access_Token} trackUri={Playing?.uri} />
      </div>
    </Container>
  )
}