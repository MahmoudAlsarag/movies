import React from 'react'
import img from "../../image/IMG_20230223_102541_509.jpg"
export default function Home() {
 return <>
   <header className="mt-5 pt-5 py-5" htmlFor="#Home">
  <div className="home" id="home">
    <div className="overlay m-auto d-flex align-items-center justify-content-center text-light text-center">
      <div className="w-50 text-end pe-2 me-3">
        <img className="image text-end border border-1 rounded-circle border-light"
         src={img} alt="personal-pic" />
      </div>
      <div className="portfolio text-dark-emphasis me-auto text-start">
        <p>Hi, my name is</p>
        <h1 className="text-warning">Mahmoud Saeed</h1>
        <p>I'm a frontend web developer </p>
        <p> I like building useful projects</p>
        <span>You can find a sample of my work on Github</span>
      </div>
    </div>
  </div>
</header>
  </>
}
