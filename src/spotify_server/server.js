require("dotenv").config()
//to get the client id and secret
//gets you REDIRECT_URI CLIENT_ID AND CLIENT_SECRET

const express = require("express")

const cors = require("cors")
const bodyParser = require("body-parser")

//lib to find lyrics!
const lyricsFinder = require("lyrics-finder")

//look for it on github, makes authentication easier
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
//npm i cores
app.use(cors())
//npm i body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//constant refresher of tokens
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  //console.log(refreshToken)
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post("/login", (req, res) => {
    //naturally, once you get the body, you cane get the actual auth code
  const code = req.body.code

  const spotifyApi = new SpotifyWebApi({
    //redirectUri: 'htpp://localhost:3000'
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
})

app.get("/lyrics", async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found ;-; \nJust hum the tune"
  res.json({ lyrics })
})

app.listen(3001)