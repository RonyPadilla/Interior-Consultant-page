import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Components/Nav";
import Footer from "./components/footer";
import Content from "./Components/Content";
import "./Style/index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <>
<Nav style={{ backgroundColor: 'white' }} />

    <Content />
    
    <div className="credits">
      <Footer />
    </div>
  </>
);
