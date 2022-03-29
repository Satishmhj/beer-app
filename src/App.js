import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/Body/Content/Content";
import Home from "./components/Body/Home/Home";
import LogIn from "./components/Body/LoginForm/LogIn";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LogIn />} />
          <Route path={"/content"} element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
