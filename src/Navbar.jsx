import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    setActive(section);
    setIsOpen(false);
  };

  return (
    <div>
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar ">
      <div className="container-fluid">

        {/* Logo / Name */}
        <a className="navbar-brand fw-bold" href="#home">
          Rahul Sardar
        </a>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">

            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${
                    active === item ? "active-link" : ""
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </div>
      
    </nav>
    </div>
  );
}
