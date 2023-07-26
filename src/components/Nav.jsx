import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <a className="navbar-brand logo" href="index.html">Waso <span>Strategy</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-collapse" id="navbarNavDropdown">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><small>01</small> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><small>02</small> about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><small>03</small> services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><small>04</small> projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><small>05</small> contact</a>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    )
  }
}


