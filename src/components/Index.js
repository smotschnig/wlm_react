import React, { Component } from 'react';
import Layout from './layout/Layout';
import Dritte from '../img/index/dritte_700.png';
import Spvgg from '../img/index/spvgg_700.png';
import AvHellertal from '../img/index/av_700.png';
import Atesi from '../img/index/atesi_700.png';

class Index extends Component {
    render() {
        return (
            <Layout>
                <h1 className="text-center content-heading display-4 text-dark">wlm.</h1>

                <div className="row mt-5">
                    <div className="col-md-7">
                        <a href="">
                            <img className="img-fluid rounded mb-3 mb-md-0" src={Dritte} alt="" />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>Project One</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                        <a className="btn btn-info" href="">View Project</a>
                    </div>
                </div>

                <hr className="mb-5 mt-5" />

                <div className="row">
                    <div className="col-md-5">
                        <h3>Project Two</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
                        <a className="btn btn-info" href="">View Project</a>
                    </div>
                    <div className="col-md-7">
                        <a href="">
                            <img className="img-fluid rounded mt-3 mb-md-0" src={Spvgg} alt="" />
                        </a>
                    </div>
                </div>

                <hr className="mb-5 mt-5" />

                <div className="row">
                    <div className="col-md-7">
                        <a href="">
                            <img className="img-fluid rounded mb-3 mb-md-0" src={Atesi} alt="" />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>Project Three</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!</p>
                        <a className="btn btn-info" href="">View Project</a>
                    </div>
                </div>

                <hr className="mb-5 mt-5" />

                <div className="row">
                    <div className="col-md-5">
                        <h3>Project Four</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem, consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod modi hic nemo qui soluta aut eius fugit quam in suscipit?</p>
                        <a className="btn btn-info" href="">View Project</a>
                    </div>
                    <div className="col-md-7">
                        <a href="">
                            <img className="img-fluid rounded mt-3 mb-md-0" src={AvHellertal} alt="" />
                        </a>
                    </div>
                </div>

            </Layout>
        )
    }
}

export default Index;
