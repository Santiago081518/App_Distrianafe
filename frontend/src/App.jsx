import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
