import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Vision", id: "our-vision" },
    { label: "What We Offer", id: "offers" },
    { label: "Request More Info", id: "register" }
  ];

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__top">
        <a href="#home" className="navbar__logo">
          <img
            // src="/logo.png"
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Girls in Forensics"
            className="navbar__logoImage"
          />
      </a>
        <button
          className="navbar__menuButton"
          onClick={handleToggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>


    <div className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="navbar__link"
          onClick={handleLinkClick}
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>
</nav>
  );
}