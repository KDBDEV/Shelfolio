import React from 'react'
import Link from 'gatsby-link'
import './header.scss'
import logo from "../assets/img/logo.png";

const Header = ({ siteTitle }) => (
  <div
    className = "navbar"
    style={{
      background: '#cdeaf2',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
        <img src={logo} alt="Logo" />
        </Link>
        <Link
          to="/work"
            style={{
            color: 'black',
            textDecoration: 'none',
            float: 'right',
          }}
          >
          Work 
          </Link>
          <Link
          to="/about"
            style={{
            color: 'black',
            textDecoration: 'none',
            float: 'right'
          }}
          >
          About 
          </Link>
          <Link
          to="/contact"
            style={{
            color: 'black',
            textDecoration: 'none',
            float: 'right'
          }}
          >
          Contact 
          </Link>
    </div>
  </div>
)

export default Header
