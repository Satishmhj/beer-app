import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/Body/Content/Content";
import Home from "./components/Body/Home/Home";
import LogIn from "./components/Body/LoginForm/LogIn";
import Checkout from "./components/Navbar/Checkout";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartData={cartData} setCartData={setCartData} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/login"} element={<LogIn />} />
          <Route
            path={"/content"}
            element={<Content cartData={cartData} setCartData={setCartData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
