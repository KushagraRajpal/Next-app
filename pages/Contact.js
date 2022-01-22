import Navbar from "../Components/Navbar"
import styles from "../styles/contact.module.css"
const Contact = () => {
  return (
    <>
      <Navbar />
      <h1 className={styles.h1} style={{ margin: '30px' }}
      >This is Contact us page</h1>
      <p>Welcome to my channel</p>
      <style jsx>{`h1{color: blue;} p {color: pink}`}</style>

    </>
  )
}

export default Contact