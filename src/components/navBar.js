import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: "0 5vw ",
      }}
    >
      <Link to="/blog" style={{ padding: "0 1vw" }}>
        Blog
      </Link>
      |
      <Link to="/about" style={{ padding: "0 1vw" }}>
        About
      </Link>
      |
      <Link to="/contact" style={{ padding: "0 1vw" }}>
        Contact
      </Link>
    </nav>
  </div>
)
