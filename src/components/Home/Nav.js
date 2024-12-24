import Btn from "../Btn";
import { useState, useEffect } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const navBar = document.querySelector(".navBar-container");

    const handleScroll = () => {
      window.scrollY > 100
        ? navBar.classList.add("sticky")
        : navBar.classList.remove("sticky");
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navBar-container">
      <div className="container nav-content">
        <div className="logo">
          <a href="#">Snipp.</a>
        </div>
        <li className="bar-icon">
          <a href="#" onClick={() => setMenu(!menu)}>
            <i className="fa-solid fa-bars"></i>
          </a>
          <span>MENU</span>
        </li>
        <NavBar menu={menu} />
      </div>
    </nav>
  );
}

function NavBar({ menu }) {
  return (
    <>
      <ul className={`menuList ${menu ? "show" : ""}`}>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li className="dropdown">
          <a href="#">
            Portfolio
            <ul className="submenu">
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Portfolio Single</a>
              </li>
            </ul>
          </a>
        </li>
        <li>
          <a href="#">Case Studies</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a>
            <Btn btn="Get in touch" />
          </a>
        </li>
      </ul>
    </>
  );
}
