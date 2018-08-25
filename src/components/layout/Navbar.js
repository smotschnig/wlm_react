import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <Link className="nav-link navbar-wlm display-4 pt-0 pb-0" to="/">wlm</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/team">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/references">References</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/competences">Comptences</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
