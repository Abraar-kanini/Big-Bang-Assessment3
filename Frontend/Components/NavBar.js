import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  // State variables
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const username=localStorage.getItem('username');

  // Function to handle menu button click
  const handleMenuClick = () => {
    setIsMenuActive(true);
    setIsSearchActive(false);
  };

  // Function to handle cancel button click
  const handleCancelClick = () => {
    setIsMenuActive(false);
    setIsSearchActive(false);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    setIsMenuActive(false);
    setIsSearchActive(true);
  };

  // Function to handle Logout link click
  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    navigate('/userlogin'); // Navigate to Home component
  };

  // Hook to navigate to different routes
  const navigate = useNavigate();

  return (
    <div>
      <style>{`@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');
        *{
          margin: 0;
          padding: 0;
          outline: none;
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
        }
        body{
          background: #f2f2f2;
        }
        nav{
          background: #171c24;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          padding: 0 100px;
        }
        nav .logo{
          color: #fff;
          font-size: 30px;
          font-weight: 600;
          letter-spacing: -1px;
        }
        nav .nav-items{
          display: flex;
          flex: 1;
          padding: 0 0 0 40px;
        }
        nav .nav-items li{
          list-style: none;
          padding: 0 15px;
        }
        nav .nav-items li a{
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
        }
        nav .nav-items li a:hover{
          color: #ff3d00;
        }
        nav form{
          display: flex;
          height: 40px;
          padding: 2px;
          background: #1e232b;
          min-width: 18%!important;
          border-radius: 2px;
          border: 1px solid rgba(155,155,155,0.2);
        }
        nav form .search-data{
          width: 100%;
          height: 100%;
          padding: 0 10px;
          color: #fff;
          font-size: 17px;
          border: none;
          font-weight: 500;
          background: none;
        }
        nav form button{
          padding: 0 15px;
          color: #fff;
          font-size: 17px;
          background: #ff3d00;
          border: none;
          border-radius: 2px;
          cursor: pointer;
        }
        nav form button:hover{
          background: #e63600;
        }
        nav .menu-icon,
        nav .cancel-icon,
        nav .search-icon{
          width: 40px;
          text-align: center;
          margin: 0 50px;
          font-size: 18px;
          color: #fff;
          cursor: pointer;
          display: none;
        }
        nav .menu-icon span,
        nav .cancel-icon,
        nav .search-icon{
          display: none;
        }
        @media (max-width: 1245px) {
          nav{
            padding: 0 50px;
          }
        }
        @media (max-width: 1140px){
          nav{
            padding: 0px;
          }
          nav .logo{
            flex: 2;
            text-align: center;
          }
          nav .nav-items{
            position: fixed;
            z-index: 99;
            top: 70px;
            width: 100%;
            left: -100%;
            height: 100%;
            padding: 10px 50px 0 50px;
            text-align: center;
            background: #14181f;
            display: inline-block;
            transition: left 0.3s ease;
          }
          nav .nav-items.active{
            left: 0px;
          }
          nav .nav-items li{
            line-height: 40px;
            margin: 30px 0;
          }
          nav .nav-items li a{
            font-size: 20px;
          }
          nav form{
            position: absolute;
            top: 80px;
            right: 50px;
            opacity: 0;
            pointer-events: none;
            transition: top 0.3s ease, opacity 0.1s ease;
          }
          nav form.active{
            top: 95px;
            opacity: 1;
            pointer-events: auto;
          }
          nav form:before{
            position: absolute;
            content: "";
            top: -13px;
            right: 0px;
            width: 0;
            height: 0;
            z-index: -1;
            border: 10px solid transparent;
            border-bottom-color: #1e232b;
            margin: -20px 0 0;
          }
          nav form:after{
            position: absolute;
            content: '';
            height: 60px;
            padding: 2px;
            background: #1e232b;
            border-radius: 2px;
            min-width: calc(100% + 20px);
            z-index: -2;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          nav .menu-icon{
            display: block;
          }
          nav .search-icon,
          nav .menu-icon span{
            display: block;
          }
          nav .menu-icon span.hide,
          nav .search-icon.hide{
            display: none;
          }
          nav .cancel-icon.show{
            display: block;
          }
        }
        .content{
          position: absolute;
          top: 50%;
          left: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
        }
        .content header{
          font-size: 30px;
          font-weight: 700;
        }
        .content .text{
          font-size: 30px;
          font-weight: 700;
        }
        .space{
          margin: 10px 0;
        }
        nav .logo.space{
          color: red;
          padding: 0 5px 0 0;
        }
        @media (max-width: 980px){
          nav .menu-icon,
          nav .cancel-icon,
          nav .search-icon{
            margin: 0 20px;
          }
          nav form{
            right: 30px;
          }
        }
        @media (max-width: 350px){
          nav .menu-icon,
          nav .cancel-icon,
          nav .search-icon{
            margin: 0 10px;
            font-size: 16px;
          }
        }
        .content{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .content header{
          font-size: 30px;
          font-weight: 700;
        }
        .content .text{
          font-size: 30px;
          font-weight: 700;
        }
        .content .space{
          margin: 10px 0;
        }`}</style>
      <nav>
        <div className={`menu-icon ${isMenuActive ? 'hide' : ''}`} onClick={handleMenuClick}>
          <span className="fas fa-bars"></span>
        </div>
        <div className="logo">GOBIGO</div>
        <div className={`nav-items ${isMenuActive ? 'active' : ''}`}>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/imagegallery">
              ImageGallery
            </Link>
          </li>

          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">welcome back {username}</a>
          </li>
          <li>
            {/* Add onClick event for Logout */}
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </div>
        <div className={`search-icon ${isSearchActive ? 'hide' : ''}`} onClick={handleSearchClick}>
          <span className="fas fa-search"></span>
        </div>
        <div className={`cancel-icon ${isMenuActive || isSearchActive ? 'show' : ''}`} onClick={handleCancelClick}>
          <span className="fas fa-times"></span>
        </div>
        <form action="#" className={`search-form ${isSearchActive ? 'active' : ''}`}>
          <input type="search" className="search-data" placeholder="Search" required />
          <button type="submit" className="fas fa-search"></button>
        </form>
      </nav>
    </div>
  );
}
