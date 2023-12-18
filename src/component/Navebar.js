import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navebar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light'?'black':'light'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'?'black':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'black':'light'}`} to="/about">{props.about}</Link>
        </li>
      </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'black':'light'}`}>
        <input  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark Mode":"Enable light Mode"}</label>
    </div>
  </div>
</nav>
  )
}
Navebar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    Blog: PropTypes.string.isRequired
}
Navebar.defaultProps={
    title: 'TextUtils1',
    about: 'About'
};