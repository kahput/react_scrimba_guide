import globe from "../assets/globe.png"

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img className="globe" src={globe} alt="Globe icon" />
          <span>Blog</span>
        </div>
        <div className="links">
          <a>Some</a>
          <a>Thing</a>
          <a>About me</a>
        </div>
      </nav>
    </header>
  )
}

export default Header;
