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
                    <Slider dots={true} slidesToShow={2}>
                        <div>
                            <div className="video-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ufBLI6bB9sg" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div>
                            <div className="video-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ufBLI6bB9sg" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div>
                            <div className="video-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ufBLI6bB9sg" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div>
                            <div className="video-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ufBLI6bB9sg" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}

