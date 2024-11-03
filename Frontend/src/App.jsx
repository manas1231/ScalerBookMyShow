import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
