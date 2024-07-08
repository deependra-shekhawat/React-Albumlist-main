import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand" onClick={() => props.handleClick(false)}>
          <span className="first-half">ALBUMS</span>
          <span className="next-half">LIST</span>
        </h2>
        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={props.path} className="nav-link">
                <button className="btn btn-primary">{props.page}</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
