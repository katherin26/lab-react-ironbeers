import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <ul className="nav justify-content-center">
        <li>
          <Link className="nav-link" to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
      </ul>
    );
  }
}
