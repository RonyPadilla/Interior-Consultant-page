import "../Style/nav.css";

const Nav = () => {
  return (
    <>
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
    </>
  );
};

export default Nav;
