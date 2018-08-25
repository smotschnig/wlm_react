import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './layout/Layout';
import Elliot from '../img/profiles/elliot.jpg'
import Steve from '../img/profiles/steve.jpg'
import Daniel from '../img/profiles/daniel.jpg'


class Team extends Component {
    render() {
        return (
            <Layout>
                <div className="team">
                    <h1 className="text-center content-heading display-4 text-dark">our team.</h1>

                    <div className="row justify-content-center row-card mt-5">
                        <div className="col-12 col-md-4 mb-4 mb-md-0">
                            <div className="card mx-auto">
                                <img className="card-img-top" src={Steve} alt="Steve" />
                                <div className="card-body pb-0">
                                    <h4 className="card-title mb-0">Fabian Wohl</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item card-business">Age: 31</li>
                                    <li className="list-group-item card-business">Webdesigner</li>
                                </ul>
                                <div className="card-body card-body-view">
                                    <Link className="nav-link p-0" to="/wohl">View Profile</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4 mb-md-0">
                            <div className="card mx-auto">
                                <img className="card-img-top" src={Daniel} alt="Daniel" />
                                <div className="card-body pb-0">
                                    <h4 className="card-title mb-0">Marius Lueck</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item card-business">Age: 30</li>
                                    <li className="list-group-item card-business">Webdeveloper</li>
                                </ul>
                                <div className="card-body card-body-view">
                                    <Link className="nav-link p-0" to="/lueck">View Profile</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4 mb-md-0">
                            <div className="card mx-auto">
                                <img className="card-img-top" src={Elliot} alt="Elliot" />
                                <div className="card-body pb-0">
                                    <h4 className="card-title mb-0">Sven Motschnig</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item card-business">Age: 29</li>
                                    <li className="list-group-item card-business">Full-Snack Developer</li>
                                </ul>
                                <div className="card-body card-body-view">
                                    <Link className="nav-link p-0" to="/motschnig">View Profile</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
}

export default Team;
