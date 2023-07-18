import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Footer from "./components/footer";
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
