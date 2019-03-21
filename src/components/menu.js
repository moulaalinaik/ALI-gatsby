import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Menu = () => (
  <div
    style={{
      background: `#f4f4f4`,
      display: `flex`,
      justifyContent: `space-around`,
      height: `50px`,
    }}
  >
    <div style={{ float: `left`, display: `flex`, alignItems: `center` }}>
      <Link to="/" style={{ textDecoration: `none` }}>
        ALI LOGO
      </Link>
    </div>
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        alignItems: `center`,
        justifycontent: `space-evenly`,
        float: `right`,
        marginBottom: `0`,
      }}
    >
      <li style={{ display: `inline`, padding: `0 10px` }}>
        <Link to="/" style={{ textDecoration: `none` }}>
          HOME
        </Link>
      </li>
      <li style={{ display: `inline`, padding: `0 10px` }}>
        <Link to="/about" style={{ textDecoration: `none` }}>
          ABOUT
        </Link>
      </li>
      <li style={{ display: `inline`, padding: `0 10px` }}>
        <Link to="/services" style={{ textDecoration: `none` }}>
          SERVICES
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
