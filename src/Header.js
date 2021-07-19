import React from "react";
import "./styles/Header.css";
import { useEffect } from "react";
import Support from "./Support";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  function handleClick() {
    console.log("basıyoooz");
  }

  return (
    <Router>
      <div className="header-main">
        <div className="header-start">
          <h1>LOGO</h1>
        </div>

        <div className="header-middles">
          <a className="btnfos btnfos-1" onClick={handleClick}>
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Create
          </a>
          <a className="btnfos btnfos-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Learn
          </a>
          <a href="Support" className="btnfos btnfos-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Support
          </a>
        </div>

        <div className="header-end">
          <button onClick={handleClick}>Sign in</button>{" "}
          <button>GetStarted</button>
        </div>
      </div>
    </Router>
  );
}
