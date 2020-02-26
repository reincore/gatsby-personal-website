import React from "react"
import Layout from "../components/layout"
import NavBar from "../components/navBar"

export default () => (
  <Layout>
    <div
      className="header-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginLeft: "5vw" }}>Contact Page</h1>
      <NavBar />
    </div>
  </Layout>
)
