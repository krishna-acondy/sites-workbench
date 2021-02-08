import React from 'react'
import styles from './Iframe.module.css'

const Iframe = () => {
    return <div className={styles.iframeContainer}>
        <iframe title="Test iframe" className={styles.iframe} src='/iframe-page' />
    </div>
}

export default Iframe