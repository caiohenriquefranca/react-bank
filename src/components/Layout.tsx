/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: any) => {
  return (
    <>
    <Header/>
      { children }
    <Footer/>
    </>
  )
}

export default Layout