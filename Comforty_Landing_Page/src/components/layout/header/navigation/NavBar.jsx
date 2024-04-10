import "./NavBar.css";
import logoImg from "../../../../assets/images/Logo.svg";
import searchIcon from "../../../../assets/images/search.svg";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="main-nav-bar">
        <img src={logoImg} alt="Logo" />
        <input
          className="search-input"
          type="text"
          placeholder="Search here..."
        />
        <button type="submit" className="search-button">
          <img className="search-icon" src={searchIcon} alt="searchIcon" />
        </button>
        <div className="user-buttons">
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
