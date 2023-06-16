import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/team">Team</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Contact Us</NavLink>
        </li>
      </ul>
    </div>

    <button type="button" className="btn-primary">Your application</button>
    <button type="button" className="btn-secondary">Book a call</button>
  </div>
</nav>
      </>
    )
  }
}
