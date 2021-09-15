import React from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="webdev" />
          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            const { id, url, text } = link
            return (
              <Link key={id} to={url}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
