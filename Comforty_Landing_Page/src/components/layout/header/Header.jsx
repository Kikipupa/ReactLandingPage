import "./Header.css";
import helpImg from "../../../assets/images/info.svg";

function Header() {
  return (
    <div className="header">
      <div className="top-line">
        <div className="shipping-info display-flex">
          <div class="check"></div>
          <p>Free Shipping On All Orders Over $50</p>
        </div>
        <div className="infos-on-top">
          <select
            className="language-dropdown infos-on-top-element"
            name="language"
            id="language"
          >
            <option value="Eng">Eng</option>
            <option value="Ger">Ger</option>
            <option value="Ukr">Ukr</option>
          </select>
          <p className="infos-on-top-element">Faqs</p>
          <div className="display-flex infos-on-top-element">
            <span className="info-icon">!</span>
            <p>Need Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
