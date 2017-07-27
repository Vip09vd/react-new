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
                    <h1>What is CareWallet?</h1>
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
                </div>
            </section>
        );
    }
}

