import React, { useEffect, useState } from 'react'
import './post.css'
import { addDoc, collection } from 'firebase/firestore'
import { dataBase, auth } from "../../firebase-config"
import { useNavigate } from 'react-router-dom'

const Post = () => {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")

  const postCollectionRef = collection(dataBase, "posts")
  let navigate = useNavigate()

  const createPost = async () => {
    await addDoc(postCollectionRef, { 
      title, 
      postText, 
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
    navigate("/blog")
  }

  return (
    <div className='form-container'>
      <div className="form-content">
        <h2>Napisz własny post!</h2>
        <div className="post-form">
          <form>
            <div className="post-element">
              <label htmlFor="title">Tytuł:</label>
              <input type="text" placeholder='Tytuł..' required onChange={(event) => {
                setTitle(event.target.value)
              }}/>
            </div>
            <div className="post-element">
              <label htmlFor="content">Treść postu:</label>
              <textarea placeholder='Treść..' cols="20" rows="10" required onChange={(event) => {
                setPostText(event.target.value)}}/>
            </div>
          </form>
          <button className='share-btn' onClick={createPost}>Udostępnij</button>
        </div>
      </div>
    </div>
  )
}

export default Post