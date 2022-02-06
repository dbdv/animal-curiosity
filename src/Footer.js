import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div>
          <a
            href="https://cafecito.app/utilities-by-dani"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            <i className="fas fa-coffee icon"></i>Cafecito
          </a>
        </div>
        <div>
          <a href="https://linksly.me/Daniel-Bustillos" className="link">
            <i className="fas fa-users icon"></i>Social
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
