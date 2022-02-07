import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div /*  className="navContainer" */>
      <div className="nav">
        <div className="pageName">
          <Link to="/animal-curiosity/" className="pageLogo">
            <i className="fas fa-paw logo"></i>
            <h1 className="logoName">Animal Curiosity</h1>
          </Link>
        </div>

        <div className="buttons">
          <Buttons />
        </div>

        <div className="menuIconDiv">
          <i className="fas fa-ellipsis-v iconMb" onClick={()=>{
            document.getElementById("ulMobile").classList.toggle("ulActive");
            const buttons = Array.from(document.getElementsByClassName("buttonMb"));
            buttons.map(btn => btn.classList.toggle("buttonOn"))
          }}></i>
        </div>
      </div>
      <div className="buttonsMobile">
        <ButtonsMobile />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <ul className="buttonsUl">
      <li>
        <Link to="/animal-curiosity/" className="button">
          daily fact
        </Link>
      </li>
      <li>
        <Link to="/animal-curiosity/about-us" className="button">
          about us
        </Link>
      </li>
      <li>
        <Link to="/animal-curiosity/gallery" className="button">
          gallery
        </Link>
      </li>
    </ul>
  );
}

function ButtonsMobile() {
  return (
    <ul className="ulMobile" id="ulMobile">
      <li>
        <Link to="/animal-curiosity/" className="buttonMb">
          daily fact
        </Link>
      </li>
      <li>
        <Link to="/animal-curiosity/about-us" className="buttonMb">
          about us
        </Link>
      </li>
      <li>
        <Link to="/animal-curiosity/gallery" className="buttonMb">
          gallery
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
