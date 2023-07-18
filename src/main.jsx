import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Components/Nav.jsx";
import Content from "./Components/Content.jsx";
import Footer from "./components/Footer.jsx";
import "./Style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Nav />
    <Content />
    <div className="credits">
      <Footer />
    </div>
  </>
);
