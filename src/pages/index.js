import React from "react"

import Layout from "../components/layout"
import NavBar from "../components/navBar"
import styles from "./index.module.scss"

export default () => (
  <Layout>
    <div
      className={styles.headerContainer}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginLeft: "5vw" }}>Index Page</h1>
      <NavBar />
    </div>
    <div style={{ marginTop: "5vh", padding: "0 5vw" }}>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor falan filan...
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor falan filan...
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor falan filan...
        </p>
      </article>
    </div>
  </Layout>
)
