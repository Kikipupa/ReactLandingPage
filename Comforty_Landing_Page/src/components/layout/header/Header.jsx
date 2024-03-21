import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="top-line">
        <div className="shipping-info">
          <p>Free Shipping On All Orders Over $50</p>
        </div>
        <div className="infos-on-top">
          <select name="language" id="language">
            <option value="Eng">Eng</option>
            <option value="Ger">Ger</option>
            <option value="Ukr">Ukr</option>
          </select>
          <p>Faqs</p>
          <p>Need Help</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
