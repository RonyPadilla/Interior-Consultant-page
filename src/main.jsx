import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Credits from "./Components/Credits";
import "./Style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Nav />
    <h1>Hola Mundo</h1>
    <Footer />
    <div className="credits">
      <Credits />
    </div>  
  
  </>
);
