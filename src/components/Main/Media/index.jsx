import React, {Component, PropTypes} from 'react';

export default class Media extends Component {
    render() {
        return (
            <section className="media">
                <div className="container">
                    <div className="section-description">
                        <h2>Media About Us</h2>
                    </div>
                    <div className="media-wrapper">
                        <div className="media__item">
                            <div className="icn icn-emercoin"/>
                        </div>
                        <div className="media__item">
                            <div className="icn icn-hashcoins"/>
                        </div>
                        <div className="media__item">
                            <div className="icn icn-cryptopay"/>
                        </div>
                        <div className="media__item">
                            <div className="icn icn-ambisafe"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}