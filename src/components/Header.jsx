import React from 'react';
import "./css/Header.css";
// import Logo from '../logo.png';

function Header( { page } ) {
    const isPageHome = page === 'home';
    const isPageCourse = page === 'course';

  return (
    <header className={`${isPageHome ? 'Home' : ''} ${isPageCourse ? 'Course' : ''}`}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {/* <img className='logo-header' src={Logo} alt={Logo} /> */}
                    Logo
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about%20">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#%20course">Course</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header