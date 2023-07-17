import "../Style/nav.css";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const ancho = window.innerWidth;
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  function changeNav() {
    console.log(ancho);
    if (ancho <= 700) {
      return (
        <header>
          <nav className="nav">
            <button className="button-nav">This Interior</button>
            
            <BiMenu className="BiMenu" onClick={handleExpand}/>
            {expanded==true?<section className="section-nav-response">
              <BiX className="Bix" onClick={handleExpand}/>
              <ul className="ul-link">
                <li>
                  <a href="#" className="a-nav">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="a-nav">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="a-nav">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="a-nav">
                    Contact
                  </a>
                </li>
              </ul>
            </section>:null
            }
          </nav>
        </header>
      );
    } else {
      return (
        <header>
          <nav className="nav">
            <button className="button-nav">This Interior</button>
            <div className="div-link">
              <ul>
                <li>
                  <a href="#" className="a-nav">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="a-nav">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="a-nav">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="a-nav">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      );
    }
  }

  return <>{changeNav()}</>;
};

export default Nav;
