import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css"
import img from "./../../Assests/Images/profile.png";
import logo from "./../../Assests/Logo/whiteTextNobg.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(200); // Set your initial logo size here
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const openSignupModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  // Use useEffect to update logo size when the window is resized
  useEffect(() => {
    const handleResize = () => {
      // Adjust the logo size based on your desired conditions
      const newLogoSize = window.innerWidth < 500 ? 180 : 230;
      setLogoSize(newLogoSize);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-header">
        <div className="left-menu">

          <NavLink to="/" className="nav-item">
            <button>Home</button>
          </NavLink>
          <NavLink to="/Dashboard" className="nav-item">
            <button>Dashboard</button>
          </NavLink>

          <NavLink to="/timetable" className="nav-item">
            <button>Time table</button>
          </NavLink>

          <NavLink to="/Leaderboard" className="nav-item">
            <button>Leaderboard</button>
          </NavLink>
          <NavLink to="/About" className="nav-item">
            <button>About</button>
          </NavLink>


        </div>

        <div className="navbar-brand">
          {/* Your profile icon or image */}

          <NavLink to="/" className="nav-item">
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{ width: `300px` }}
            />
          </NavLink>
        </div>

        <div className="profile-icon">
          {/* Your profile icon or image */}
          <img
            className="profileImage"
            src={img}
            alt="profile"
            //opens login or Signup modal after clicking on icon
            onClick={() => openLoginModal()}
          />
        </div>

        {/* login modal content  */}
        {showLoginModal && (
          <div className="modal">
            <span className="close c1" onClick={() => setShowLoginModal(false)}>
              &times;
            </span>
          

            <div class="formbox modal-content">
      <h2>LOGIN</h2>
        <div class="inputbox">
          <span class="icon">

          </span>
          <input type="email" id="email" required />
          <label>Email</label>
        </div>

        <div class="inputbox">
          <span class="icon">

          </span>
          <input type="password" required />
          <label>Password</label>
        </div>

        <div class="remember">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <div class="buttum">
          <button type="submit" class="btn">LOGIN</button>

        </div>
        <div class="register">

          <p>Don't have a account ?
            <span class="register1" onClick={() => openSignupModal()}>REGISTER</span></p>
         
        </div>

      
    </div>
          </div>
        )}

        {/* Signup modal content */}
        {showSignupModal && (
          <div className="modal">
            <span
              className="close c2"
              onClick={() => setShowSignupModal(false)}
            >
              &times;
            </span>
          

            <div class="formbox modal-content">
      <h2>SIGNUP</h2>
        <div class="inputbox">
          <span class="icon">

          </span>
          <input type="email" id="email" required />
          <label>Email</label>
        </div>

        <div class="inputbox">
          <span class="icon">

          </span>
          <input type="password" required />
          <label>Password</label>
        </div>

        <div class="inputbox">
          <span class="icon">

          </span>
          <input type="password" required />
          <label>Phone Number</label>
        </div>

       

        <div class="buttum">
          <button type="submit" class="btn">SIGNUP</button>

        </div>
        <div class="register">

          <p>ALREADY HAVE AN ACCOUNT ?
            <span class="register1"onClick={() => openLoginModal()}>LOGIN</span></p>
         
        </div>

      
    </div>

            
            
          </div>
        )}

        {/* Hamburger menu for smaller screens */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Mobile menu for smaller screens */}
        {isMenuOpen && (
          <div className="mobile-menu">
            

            <NavLink to="/" className="mbil">
            <button>Home</button>
          </NavLink>
          <NavLink to="/Dashboard" className="mbil">
            <button>Dashboard</button>
          </NavLink>

          <NavLink to="/timetable" className="mbil">
            <button>Time table</button>
          </NavLink>

          <NavLink to="/Leaderboard" className="mbil">
            <button>Leaderboard</button>
          </NavLink>
          <NavLink to="/About" className="mbil">
            <button>About</button>
          </NavLink>


          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
