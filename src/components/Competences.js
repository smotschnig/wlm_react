import React, { Component } from 'react';
import Layout from './layout/Layout';
import ReactComp from '../img/competences/react.png';
import ReduxComp from '../img/competences/redux.png';
import BootstrapComp from '../img/competences/bootstrap.png';
import BulmaComp from '../img/competences/bulma.png';
import HtmlComp from '../img/competences/html.png';
import CssComp from '../img/competences/css.png';
import JavaScriptComp from '../img/competences/javascript.png';

class Competences extends Component {
    render() {
        return (
            <Layout>
                <div className="competences">
                    <h1 className="text-center content-heading display-4 text-dark">our competences.</h1>

                    <div className="row mt-5">
                        <div className="col-12 col-md-3 mx-auto mb-4 mb-md-0">
                            <div className="card">
                                <img className="card-img-top" src={ReactComp} alt="test" style={{ backgroundColor: "#eee", borderBottom: "1px solid rgba(0,0,0,.125)" }} />
                                <div className="card-body">
                                    <h6 className="text-center" style={{ letterSpacing: '0.25em' }}>React</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="card">
                                <img className="card-img-top" src={ReduxComp} alt="test" style={{ backgroundColor: "#eee", borderBottom: "1px solid rgba(0,0,0,.125)" }} />
                                <div className="card-body">
                                    <h6 className="text-center" style={{ letterSpacing: '0.25em' }}>Redux</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="card">
                                <img className="card-img-top" src={BulmaComp} alt="test" style={{ backgroundColor: "#eee", borderBottom: "1px solid rgba(0,0,0,.125)" }} />
                                <div className="card-body">
                                    <h6 className="text-center" style={{ letterSpacing: '0.25em' }}>Bulma</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="card">
                                <img className="card-img-top" src={BootstrapComp} alt="test" style={{ backgroundColor: "#eee", borderBottom: "1px solid rgba(0,0,0,.125)" }} />
                                <div className="card-body">
                                    <h6 className="text-center" style={{ letterSpacing: '0.25em' }}>Bootstrap</h6>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="card">
                                <img className="card-img-top" src={HtmlComp} alt="test" style={{ backgroundColor: "#eee", borderBottom: "1px solid rgba(0,0,0,.125)" }} />
                                <div className="card-body">
                                    <h6 className="text-center" style={{ letterSpacing: '0.25em' }}>HTML</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="card">
                                <img className="card-img-top" src={CssComp} alt="test" style={{ backgroundColor: "#eee", borderBottom: "1px solid rgba(0,0,0,.125)" }} />
                                <div className="card-body">
                                    <h6 className="text-center" style={{ letterSpacing: '0.25em' }}>CSS</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="card">
                                <img className="card-img-top" src={JavaScriptComp} alt="test" style={{ backgroundColor: "#eee", borderBottom: "1px solid rgba(0,0,0,.125)" }} />
                                <div className="card-body">
                                    <h6 className="text-center" style={{ letterSpacing: '0.25em' }}>JavaScript</h6>
                                </div>
                            </div>
                        </div>

                    </div>

                </div >
            </Layout >
        )
    }
}

export default Competences;
