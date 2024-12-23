import React from 'react';

// Styles
import styles from './loader.module.scss'

function Loader(props) {
  return (
    <div className={styles.loaderContainer}>
         <div id="loader" className={styles.loader}></div>
    </div>
  )
}

export default Loader;
