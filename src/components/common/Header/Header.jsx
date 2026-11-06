
import { useState } from "react";
import "./Header.css";

function Header() {

  const [activeItem, setActiveItem] = useState("Overview");

  const navItems = [
    "Overview",
    "Experience",
    "Units",
    "Pricing",
    "Amenities",
    "Location",
  ];

  return (
    <header className="project-header">

      <button
        className="back-btn"
        onClick={() => console.log("Back button clicked")}
        >
        ‹ Back
        </button>

      <nav className="header-nav">
        {navItems.map((item) => (
          <button
            key={item}
            className={activeItem === item ? "active" : ""}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <button className="call-btn"
       onClick={() => console.log("call button clicked")}
       >
        
        ☎ Call Now
      </button>

    </header>
  );
}

export default Header;
