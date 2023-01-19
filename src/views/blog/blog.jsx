import React, { useState } from 'react'
import { auth, provider } from '../../firebase-config'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Blog({ setIsAuth }) {
  let navigate = useNavigate()

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true)
        navigate("/post")
    })
  }

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate("/blog")
    })
  }

  return (
    <>
      <h1>Blog</h1>
      <p className='paragraph-login'>Zaloguj się za pomocą Google by móc dodawać posty!</p>
      <button onClick={signIn}>Zaloguj się</button> 
    </>
  )
}

export default Blog