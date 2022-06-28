import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {

  const [Access_Token, setAccessToken] = useState()
  const [Refresh_Token, setRefreshToken] = useState()
  const [Expire_In, setExpiresIn] = useState()

    //console.log(refreshToken)

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      }) //then, you get the response
      .then(res => {
        setAccessToken(res.data.Access_Token)
        setRefreshToken(res.data.Refresh_Token)
        setExpiresIn(res.data.Expire_In)
        //console.log(res.data)
      }) //if your token expires, redirect user to login page 
      .catch(() => {
        window.location = "/"
      })
  }, [code])

  //refresher of Tokens
  useEffect(() => {
    //if you haven't even started, then dont do anything
    if (!Refresh_Token || !Expire_In) return
    //wait until token expires!
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          Refresh_Token,
        })
        .then(res => {
          setAccessToken(res.data.Access_Token)
          setExpiresIn(res.data.Expire_In) // you can hard code this to 61 seconds
        })
        .catch(() => {
          window.location = "/"
        })
    }, (Expire_In - 60) * 1000) //millisceonds timeout
    //clear if you want to refresh early
    return () => clearInterval(interval)
  }, [Refresh_Token, Expire_In])

  //the thing you need to call the spotfiy API (lasts around an hour)
  return Access_Token
}