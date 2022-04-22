import Footer from '../footer/Footer'
import React from 'react'

const Home = () => {
  return (
    <div className='landing'>
      <section className='cover'>
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
          <span className='backgroundTitle'>THE MOVIE PLACE</span>
          <h1 className='slogan'>Welcome. We are a space dedicated to cinema. Enjoy it!</h1>
          <button className='button'>Take me there</button>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home