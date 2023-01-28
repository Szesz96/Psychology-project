import './blog.css'
import React, { useEffect, useState } from 'react'
import { auth, provider, dataBase } from '../../firebase-config'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore"


function Blog() {
  const [postList, setPostList] = useState([])
  const [isAuth, setIsAuth] = useState(false)
  const postCollectionRef = collection(dataBase, "posts")
  let navigate = useNavigate()

  const getPosts = async () => {
    const data = await getDocs(postCollectionRef)
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  useEffect(() => {
    
    getPosts()
  }, [])

  const deletePost = async (id) => {
    const postDoc = doc(dataBase, "posts", id)
    await deleteDoc(postDoc)
    await getPosts()
  }

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
    <div className='blog-container'>
      <h1 className='blog-heading'>Blog</h1>
      <div className='hr'></div>
      <p>Pamiętaj, że nie jestes sam. Poniżej znajdziesz artykuły/posty z doświadczeniami innych osób, jeżeli bedziesz miał/a chęć, możesz również podzielić się swoimi odczuciami.</p>
      <div className="blog-page">
        <div className="post-container">
          {postList.map((post) => {
            return (
              <div className="post">
                <div className="post-header">
                  <h2>{post.title}</h2>
                  <button className="delete-btn" onClick={() => {deletePost(post.id)}}><i className="fa-solid fa-trash"></i></button>
                </div>
                <div className='post-text'>
                  <p>{post.postText}</p>
                  <div>
                    <h3>@{post.author.name}</h3>
                  </div>
                </div>
                
              </div>
              
            )
          })}

        </div>
        <div className='bottom'>
          <p className='paragraph-login'>Zaloguj się za pomocą Google by móc dodawać posty!</p>
          <button className='login-btn' onClick={signIn}>Zaloguj się</button> 
        </div>
      </div>
    </div>
  )
}

export default Blog