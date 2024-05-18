import { Outlet } from "react-router-dom"

import { Navbar , Header , Footer } from '../components'

function MainLayout() {
  return (
    <>
    <Header/>
      <main>
        <Outlet/>
      </main>
    <Footer/>

    </>
  )
}

export default MainLayout