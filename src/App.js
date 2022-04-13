import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/DashBoard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Home/Products/Products";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Shipping from "./Pages/Shipping/Shipping";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="/products" element={<Products />} />

            <Route path="/cake/:cakeId" element={<Shipping />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="dashboard/*" element={<Dashboard />} />


          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
