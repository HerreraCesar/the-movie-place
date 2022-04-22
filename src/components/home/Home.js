import Footer from '../footer/Footer'
import React from 'react'

const Home = () => {
  return (
    <div className='landing'>
      <section id='cover'>
        <div className='shadow'>
          <div className='trailerContainer'>
            <video 
              className='trailer' 
              src="https://herreracesar.github.io/movies-website/media/trailers/2.mp4" 
              muted 
              autoPlay 
              loop
            >
            </video>
          </div>
          <p className='backgroundTitle'>THE MOVIE PLACE</p>
          <h1 className='slogan'>Welcome. We are a space dedicated to cinema. Enjoy it! <button className='button coverButton'><a href='#us'>Take me there</a></button></h1>
          
        </div>
      </section>
      <section id='us'>
        <div className='shadow'>

        </div>

      </section>
    </div>
  )
}

export default Home