import { Provider } from "react-redux"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import store from "../redux/store"
import ProtectedRoute from "./Components/ProtectedRoute"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"
import Partner from "./pages/Partner"
function App() {
  

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/profile"
      element={
        <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>
      }/>
            <Route path="/admin"
      element={
        <ProtectedRoute>
          <Admin/>
        </ProtectedRoute>
      }/>
      <Route path="/partner"
      element={
        <ProtectedRoute>
          <Partner/>
        </ProtectedRoute>
      }/>
      <Route path="/" element={
        <ProtectedRoute>
            <Home/>
        </ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
