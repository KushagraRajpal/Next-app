import Home from "../Components/Home";
import Head from "next/head";
const index = () => {
  return(
    <>
   <Head>
        <title>Next TUTORIAL</title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="Kushagra Rajpal" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
    <Home/>
    </>
  );
};

export default index;