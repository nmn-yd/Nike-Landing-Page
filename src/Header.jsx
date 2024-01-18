function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src="../public/brand_logo.png" alt="Brand Logo" />
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a>menu</a>
            </li>
            <li className="nav-item">
              <a>location</a>
            </li>
            <li className="nav-item">
              <a>about</a>
            </li>
            <li className="nav-item">
              <a>contact</a>
            </li>
          </ul>
        </nav>
        <button className="button">Login</button>
      </div>
    </header>
  );
}

export default Header;
