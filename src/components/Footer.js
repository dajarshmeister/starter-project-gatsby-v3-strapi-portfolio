import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-link social-links">
        {socialLinks.map(link => (
          <a href={link.url} key={link.id} className="social-link">
            {link.icon}
          </a>
        ))}
      </div>
      <h4>
        copyright &copy; {new Date().getFullYear()} <span>Web Dev</span> rights
        reserved
      </h4>
    </footer>
  )
}

export default Footer
