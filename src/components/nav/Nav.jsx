import React from 'react';
import './nav.css'


function Nav() {
  return (
   <>
   <nav className="navbar mb-4 justify-content-evenly  navbar-expand-lg navbar navbar-dark bg-dark ">
  <div className="container-fluid">
  <a className="navbar-brand " href="#"> <i className="fa-sharp fa-solid fa-heart"></i> Couple Games</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <h2>Couple Games</h2> */}
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link "  href="#TwoDicegame"> <i className="fa-solid fa-dice"></i> Naughty Dice</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  href="#task"> <i className="fa-solid fa-dice-three"></i>  Erotic Dares</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#SingleDiceGame"><i className="fa-solid fa-dice-three"></i> Oral</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='#positions'>  <i className="fa-sharp fa-solid fa-heart"></i>  Sex Positions</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Nav