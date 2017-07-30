import React, {Component, PropTypes} from 'react';

export default class Head extends Component {
    render() {
        return (
            <section className="head">
                <div className="container">
                    <h1>Join the revolution of care, cost and convenience</h1>
                    <div className="head-wrap">
                        <div className="head__info">
                            <h2>CareWallet</h2>
                            <p> CareWallet is creating a new smart healthcare system built
                                on innovative technologies of blockchain, smart contracts,
                                machine learning, cloud and big data</p>
                        </div>
                        <div className="head__img"/>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-inverse">Buy Token</button>
                        <button className="btn btn-inverse">Become an early adopter</button>
                        <button className="btn btn-inverse">Watch video</button>
                    </div>
                </div>
            </section>
        );
    }
}