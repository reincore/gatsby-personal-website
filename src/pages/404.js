import React from "react"
import styles from "./404.module.scss"

export default () => (
  <div className={styles.content}>
    <h1 className={styles.notFoundHeader}>Page not found</h1>
    <p className={styles.notFoundText}>
      The page you are looking for does not exist.
    </p>
  </div>
)
