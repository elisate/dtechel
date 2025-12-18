import { BrowserRouter,Route,Routes } from "react-router"
import LandingLayout from "./LandingPageComponents/LandingLayout"
import IndexPage from "./LandingPageComponents/IndexPage"

import About from "./LandingPageComponents/About"
import Services from "./LandingPageComponents/Services"
import Projects from "./LandingPageComponents/Projects"
import Blog from "./LandingPageComponents/Blog"
import Contact from "./LandingPageComponents/Contact"
function App() {


  return (
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<LandingLayout/>}>
   <Route index element={<IndexPage/>}/>
   <Route path="/home" element={<IndexPage/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/services" element={<Services/>}/>
   <Route path="/project" element={<Projects/>}/>
   <Route path="/blog" element={<Blog/>}/>
   <Route path="/contact" element={<Contact/>}/>

   </Route>
    </Routes>
     
      
    </BrowserRouter>
  )
}

export default App
