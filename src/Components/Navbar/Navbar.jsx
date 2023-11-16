import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <nav className="navbar">
      <div className="pgs-left">
        <p className="n-name">Quotivation</p>

        <ul style={{ listStyleType: "none" }}>
          <li>
            <NavLink exact to="/"  >
              Home
            </NavLink>
          </li>
          <li
            className="n-quotes"
            onMouseEnter={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
          >
            <NavLink to="/quotes"  >
              Quotes
            </NavLink>
            {isDropdown && (
              <ul className="dropdown">
                <li>
                  <NavLink to="friendship-quotes" >
                    Friendship Quotes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="insanity-quotes" >
                    Insanity Quotes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="humorous-quotes" >
                    Humorous Quotes
                  </NavLink>
                </li>
                {/* <li><NavLink to='/quotes/mood-based-quotes'  onClick={()=>setquoteCategory("mood-based-quotes")}>Mood Based Quotes</NavLink></li> */}
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/collection"  >
              Collection
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="pgs-right">
        <li>
          <NavLink to="/my-quotes" >
            My Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
