import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import Steve from '../../img/profiles/steve.jpg';


const repo = {
    username: 'w0hlsen',
    clientId: '67c5c821807150fd4f6e',
    clientSecret: 'c60276a2a76c7d7565098c0cbec9eec854f2e013',
    count: 6,
    sort: 'created: asc',
}

class Wohl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: []
        };
    }

    componentDidMount() {
        const { username, count, sort, clientId, clientSecret } = repo;

        fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
            .then(res => res.json())
            .then(data => {
                if (this.refs.myRef) {
                    this.setState({ repos: data });
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        const { repos } = this.state;

        const repoItems = repos.map(repo => (
            <div key={repo.id} className="card card-body mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            <Link to={repo.html_url} className="text-info" target="_blank">
                                {repo.name}
                            </Link>
                        </h4>
                        <p>{repo.description}</p>
                    </div>
                    <div className="col-md-6">
                        <span className="badge badge-info mr-1">
                            Stars: {repo.stargazers_count}
                        </span>
                        <span className="badge badge-secondary mr-1">
                            Watchers: {repo.watchers_count}
                        </span>
                        <span className="badge badge-success">
                            Forks: {repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
        ));

        return (
            <div>
                <Layout>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/team" className="btn btn-light mb-3 float-left">
                                Back To Team
                            </Link>
                            <div className="col-md-6" />
                        </div>

                        <div className="col-md-12">
                            <div className="card card-body bg-info text-white mb-3">
                                <div className="row">
                                    <div className="col-4 col-md-3 m-auto">
                                        <img className="rounded-circle pt-3 pb-3" src={Steve} alt="Steve" style={{ width: '100%' }} />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h1 className="display-4 text-center" style={{ fontSize: '4vw' }}>Fabian Wohl</h1>
                                    <p className="lead text-center mb-0 small">Cinestar Siegen</p>
                                    <p className="lead text-center small">Struthütten</p>
                                    <p>
                                        <a className="text-white p-2" href="" target="_blank"><i className="fas fa-globe fa-2x sm-icon" /></a>
                                        <a className="text-white p-2" href="" target="_blank"><i className="fab fa-twitter fa-2x sm-icon" /></a>
                                        <a className="text-white p-2" href="" target="_blank"><i className="fab fa-facebook fa-2x sm-icon" /></a>
                                        <a className="text-white p-2" href="" target="_blank"><i className="fab fa-linkedin fa-2x sm-icon" /></a>
                                        <a className="text-white p-2" href="" target="_blank"><i className="fab fa-youtube fa-2x sm-icon" /></a>
                                        <a className="text-white p-2" href="" target="_blank"><i className="fab fa-instagram fa-2x sm-icon" /></a>
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card card-body bg-light mb-3">
                                        <h3 className="text-center text-info">Skill Set</h3>

                                        <div className="row justify-content-center mt-3">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>HTML</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "95%", backgroundColor: '#17a2b8' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>CSS</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "100%", backgroundColor: '#17a2b8' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>JavaScript</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "20%", backgroundColor: '#17a2b8' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>MongoDB</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "44%", backgroundColor: '#17a2b8' }} aria-valuenow="44" aria-valuemin="0" aria-valuemax="100">44%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>ExpressJS</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "33%", backgroundColor: '#17a2b8' }} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">33%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>PHP</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "2%", backgroundColor: '#17a2b8' }} aria-valuenow="2" aria-valuemin="0" aria-valuemax="100">2%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>SQL</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "88%", backgroundColor: '#17a2b8' }} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">88%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>NodeJS</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "34%", backgroundColor: '#17a2b8' }} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100">34%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>Java</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "56%", backgroundColor: '#17a2b8' }} aria-valuenow="56" aria-valuemin="0" aria-valuemax="100">56%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-1">
                                            <div className="col-12 col-md-3">
                                                <h6 style={{ letterSpacing: '0.25em' }}>Python</h6>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-bg" role="progressbar" style={{ width: "4%", backgroundColor: '#17a2b8' }} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100">4%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className="row mt-4">
                                            <div className="col-12">
                                                <h3 className="text-center text-info">Favorite Frameworks</h3>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <div className="p-3">
                                                        <i className="fa fa-check pr-1" /> AngularJS
                                                    </div>
                                                    <div className="p-3">
                                                        <i className="fa fa-check pr-1" /> NativeScript
                                                    </div>
                                                    <div className="p-3">
                                                        <i className="fa fa-check pr-1" /> Foundation
                                                    </div>
                                                    <div className="p-3">
                                                        <i className="fa fa-check pr-1" /> Semantic-UI
                                                    </div>
                                                    <div className="p-3">
                                                        <i className="fa fa-check pr-1" /> Bulma.io
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6 mb-3 mb-md-0">
                                            <h3 className="text-center text-info">Experience</h3>
                                            <li className="list-group-item">
                                                <h4>Cinestart Siegen</h4>
                                                <p>01.01.2014{' '} - 01.01.2018</p>
                                                <p><strong>Position:</strong> Student</p>
                                                <p><strong>Location:</strong> Siegen</p>
                                                <p><strong>Description:</strong> Service</p>
                                            </li>
                                        </div>

                                        <div className="col-md-6">
                                            <h3 className="text-center text-info">Education</h3>
                                            <li className="list-group-item">
                                                <h4>Dietrich-Bonhoeffer-Gymnasium</h4>
                                                <p>01.01.2009{' '} - 01.01.2010</p>
                                                <p><strong>Degree:</strong> Abitur</p>
                                                <p><strong>Field Of Study:</strong> Gymnasium</p>
                                                <p><strong>Description:</strong> Magna cum Laude</p>
                                            </li>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="row mt-3">
                                <div className="col-12">
                                    <div ref="myRef">
                                        <h3 className="mb-2 text-info text-center">Latest Github Repos</h3>
                                        {repoItems}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </Layout>
            </div>
        );
    }
}

export default Wohl;
