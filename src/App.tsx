import { BrowserRouter,Route,Routes } from "react-router"
import LandingLayout from "./LandingPageComponents/LandingLayout"
import IndexPage from "./LandingPageComponents/IndexPage"
function App() {


  return (
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<LandingLayout/>}>
   <Route index element={<IndexPage/>}/>

   </Route>
    </Routes>
     
      
    </BrowserRouter>
  )
}

export default App
