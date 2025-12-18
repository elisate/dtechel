import  {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
function LandingLayout() {
  return (
    <>
    <Navbar />
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-[3rem] xl:pr-[3rem]'><Outlet/></div>
    <Footer />
    </>
  )
}

export default LandingLayout