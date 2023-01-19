import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='post-container'>
      <div className="post-content">
        <h2>Napisz własny post!</h2>
        <div className="post-form">
          <form>
            <div className="post-element">
              <label htmlFor="title">Tytuł:</label>
              <input type="text" placeholder='Tytuł..' required/>
            </div>
            <div className="post-element">
              <label htmlFor="content">Treść postu:</label>
              <textarea placeholder='Treść..' cols="20" rows="10" required></textarea>
            </div>
            <button className='share-btn'>Udostępnij</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Post