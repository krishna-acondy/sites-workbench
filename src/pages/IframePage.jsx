import React, { useCallback, useState } from "react"
import styles from "./Iframe.module.css"

const IframePage = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isWrongPassword, setIsWrongPassword] = useState(false)

  const handleSubmit = useCallback((e) => {
      e.preventDefault()
    if (password === 'password') {
        setIsLoggedIn(true)
    } else {
        setIsWrongPassword(true)
    }
  }, [password])

  return (
    <div className={styles.iframeForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          placeholder="Username"
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <div className={styles.radio}>
          <input type="radio" id="Tabs" name="preference" value="Tabs" />
          <label>Tabs</label>
          <input type="radio" id="Spaces" name="preference" value="Spaces" />
          <label>Spaces</label>
        </div>
        <input type="submit" />
      </form>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer" >Open Google in new tab</a>
      <button className={styles.hoverButton} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>Hover for a treat ✨</button>
      {isHovering && (
        <div className={styles.hoveringGif}/>
      )}
      {isLoggedIn && <div className={styles.loggedInGif} />}
      {isWrongPassword && <div className={styles.wrongPasswordGif} />}
    </div>
  )
}

export default IframePage
