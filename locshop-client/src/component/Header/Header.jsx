import "./Header.css";
import logo from "../src/assets/logo";

function Header({}) {
  return (
    <header className="header">
      {/* Makes the logo a clickable link */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="LocShop logo" />
      </Link>
    </header>
  );
}
