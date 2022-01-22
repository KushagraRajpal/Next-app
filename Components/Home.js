import styles from "../styles/Home.module.css"
import Navbar from "./Navbar" 
const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand_box}>
        <Navbar/>
        </div>

        <div className={styles.text_box}>
          <h1 className={styles.heading_primary}>
            <span className={styles.heading_primary_main}>
              Welcome to the world of ReactJS
            </span>
            <span className = {styles.thapatext}>Love with JavaScript</span>
          </h1>
          <a href="#"className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}>Kushagra</a>
        </div>
      </header>
    </>
  )
}

export default Home