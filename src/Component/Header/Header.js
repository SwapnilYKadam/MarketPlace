// import classes from "./Header.module.css";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  // let clicked = false;
  // let burgerClasses = "";
  // const showNav = () => {
  //   clicked = !clicked;
  //   console.log(clicked);
  //   burgerClasses = clicked ? "navContainer Click" : "navContainer";
  //   console.log(burgerClasses);
  // };

  const clickHandler = () => {
    const navContainer = document.querySelectorAll(".navContainer");
    console.log(navContainer);
    navContainer[0].classList.toggle("click");
  };

  return (
    <header>
      <div className="logo">
        <Link className="logoName" to="/">
          MyShop
        </Link>
      </div>
      <div className="navContainer">
        <div className="searchbar">
          <input />
          <button>
            <FaSearch />
          </button>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link className="linktext" to="/cart" onClick={clickHandler}>
                <FaCartPlus className="icon" />
                Cart
              </Link>
            </li>
            <li>
              <Link className="linktext" to="/login" onClick={clickHandler}>
                <BiLogInCircle className="icon" />
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="burger" onClick={clickHandler}>
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
