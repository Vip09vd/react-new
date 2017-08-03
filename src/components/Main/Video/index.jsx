import React, {Component, PropTypes} from 'react';
import Slider from 'react-slick'

export default class Video extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <section className="video">
                <div className="container">
                    <div className="section-description">
                        <h2>SmartCare Wallet delivers lower costs and better outcomes</h2>
                    </div>
                    <Slider dots={true} slidesToShow={1}>
                        <div>
                            <div className="video-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ufBLI6bB9sg"
                                        frameBorder="0"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div>
                            <div className="video-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ufBLI6bB9sg"
                                        frameBorder="0"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div>
                            <div className="video-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ufBLI6bB9sg"
                                        frameBorder="0"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div>
                            <div className="video-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ufBLI6bB9sg"
                                        frameBorder="0"
                                        allowFullScreen/>
                            </div>
                        </div>
                    </Slider>
                    {/*<div className="video-items">*/}
                    {/*<div className="video-item">*/}
                    {/*<p className="item-heading">consumers and families</p>*/}
                    {/*<p>Cost savings and convenience</p>*/}
                    {/*</div>*/}
                    {/*<div className="video-item">*/}
                    {/*<p className="item-heading">employers</p>*/}
                    {/*<p>Cost savings and healthier employees</p>*/}
                    {/*</div>*/}
                    {/*<div className="video-item">*/}
                    {/*<p className="item-heading">insurers and adminstrators</p>*/}
                    {/*<p>Cost savings and happier customers</p>*/}
                    {/*</div>*/}
                    {/*<div className="video-item">*/}
                    {/*<p className="item-heading">doctors, labs, pharmacies, hospitals</p>*/}
                    {/*<p>Cost savings and less administrative burden</p>*/}
                    {/*</div>*/}
                    {/*<div className="video-item">*/}
                    {/*<p className="item-heading">for government programs</p>*/}
                    {/*<p>Cost savings and better outcome for citizens</p>*/}
                    {/*</div>*/}
                    {/*<div className="video-item">*/}
                    {/*<p className="item-heading">everyone benefits</p>*/}
                    {/*<p>Reduction in fraud, waste, abuse and inefficiency</p>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    <a href="#"><p>Read the peer reviewed publication on Use Case and Applications of Blockchain
                        technology by Dr.

                        Randall and our CEO</p></a>
                </div>
            </section>
        );
    }
}

