import React, { Component } from 'react';
import Layout from './layout/Layout';
import AVHellertal from '../img/references/avhellertal.png';
import Atesi from '../img/references/atesi.png';
import AtesiOld from '../img/references/atesi_old.png';
import Spvgg from '../img/references/spvgg.png';
import DritteWelle from '../img/references/dritte_welle.png';
import Saenstastic from '../img/references/saentastic.png';
import Startup from '../img/references/startup.png';

import './References.css';

class References extends Component {
    render() {
        return (
            <Layout>
                <div className="references">
                    <h1 className="text-center content-heading display-4 text-dark">our references.</h1>

                    <div className="row text-center text-lg-left mt-5">

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src={Atesi} alt="" />
                                <div className="overlay">
                                    <h2>Atesi</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-sm-0">
                            <div className="hovereffect">
                                <img className="img-responsive" src={AtesiOld} alt="" />
                                <div className="overlay">
                                    <h2>Atesi</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-md-0">
                            <div className="hovereffect">
                                <img className="img-responsive" src={Spvgg} alt="" />
                                <div className="overlay">
                                    <h2>SpVgg</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-lg-0">
                            <div className="hovereffect">
                                <img className="img-responsive" src={DritteWelle} alt="" />
                                <div className="overlay">
                                    <h2>Dritte Welle</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-sm-4">
                            <div className="hovereffect">
                                <img className="img-responsive" src={Saenstastic} alt="" />
                                <div className="overlay">
                                    <h2>Saentastic</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-sm-4">
                            <div className="hovereffect">
                                <img className="img-responsive" src={Startup} alt="" />
                                <div className="overlay">
                                    <h2>StartupsOnTheBlockchain</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-md-4">
                            <div className="hovereffect">
                                <img className="img-responsive" src={AVHellertal} alt="" />
                                <div className="overlay">
                                    <h2>AV Hellertal</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-lg-4">
                            <div className="hovereffect">
                                <img className="img-responsive" src={Spvgg} alt="" />
                                <div className="overlay">
                                    <h2>SpVgg</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-sm-4">
                            <div className="hovereffect">
                                <img className="img-responsive" src={AtesiOld} alt="" />
                                <div className="overlay">
                                    <h2>Atesi</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 mt-sm-4">
                            <div className="hovereffect">
                                <img className="img-responsive" src={Atesi} alt="" />
                                <div className="overlay">
                                    <h2>Atesi</h2>
                                    <a className="info" href="">visit</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Layout>
        );
    }
}

export default References;
