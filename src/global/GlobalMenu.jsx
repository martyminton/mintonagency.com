import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import Api from './../data/WordpressApi.jsx';
import { Link } from 'react-router-dom';

//Main Menu
class GlobalMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">test</ul>
                </div>
            </nav>
        );
    }
}

export default GlobalMenu;
