import React from 'react'

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg  ">
      <div className="container  ">
        <a className="navbar-brand text-light" href="#Home">MAHNOUD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto m-2 mb-lg-0 fs-4">
            <li className="nav-item fs-3 mx-2">
              <a href="https://github.com/MahmoudAlsarag" className="mr hover:text-heading">
                <i className="fa-brands fa-github bg-light fs-2 border border-4 border-light p-2 rounded-circle" /></a>
            </li>
            <li className="nav-item  fs-3  mx-2">
              <a href="http://linkedin.com/in/mahmoud-saeed12" className="mr hover:text-heading">
                <i className="fa-brands fa-linkedin-in bg-light fs-2 border border-4 border-light p-2 rounded-circle" /></a>
            </li>
            <li className=" nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/Stack">My Stack</a>
            </li>
            <li className=" nav-item">
              <a className="nav-link active text-light" href="/About">About</a>
            </li>
            <li className=" nav-item">
              <a className="nav-link active text-light" href="/Footer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  </>
}
