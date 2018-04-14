import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
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
      </h1>
    </div>
  </div>
)

export default Header
