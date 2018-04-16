import React from 'react'
import Link from 'gatsby-link'
import './header.scss'
import logo from "../assets/img/logo.png";

const Header = ({ siteTitle }) => (
  <header className = "header-container">
    <div className = "logo">
      <Link to = './'>
        <img src = {logo}/>
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to = './about'>
            About
          </Link>
        </li>
        <li>
          <Link to = './work'>
            Work
          </Link>
        </li>
        <li>
          <Link to = './contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
