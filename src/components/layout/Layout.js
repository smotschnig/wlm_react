import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Navbar />
                <div className="container pt-5">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;