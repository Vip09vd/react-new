import React, {Component, PropTypes} from 'react';

export default class Head extends Component {
    render() {
        return (
            <section className="head">
                <div className="container">
                    <div className="head__info section-description">
                        <h1>CareWallet</h1>
                        <h2>Join a revolution of care convenience and cost reduction in the global healthcare</h2>
                        <p>CareWallet is an intelligent benefit protocol which contains smart cards that are
                            programmable, automatically synced and configured to meet individual needs, and will
                            deliver better outcomes at lower cost while ensuring proper use of funds and timely
                            payments to care providers.
                            Together we can change the way of healthcare & other benefits are managed.</p>
                        <div className="btn-container">
                            <button className="btn">Sign Up<span>* Earn 1 token for free</span></button>
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}