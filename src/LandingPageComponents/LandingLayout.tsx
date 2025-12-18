import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function LandingLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-[3rem] xl:pr-[3rem] scroll-smooth'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default LandingLayout