import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Content from "./components/Body/Content";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
