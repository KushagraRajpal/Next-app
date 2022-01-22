import Navbar from "../Components/Navbar"
import Image from "next/image"
const about = () => {
  return (
    <>
      <Navbar />
      <div style={{textAlign: 'center'}}>
      <h1 >This is about page</h1>
      <Image src= "https://source.unsplash.com/user/erondu/400x400" width="200" height= '200' alt="image not found">
      </Image>
      </div>
    </>
  )
}

export default about