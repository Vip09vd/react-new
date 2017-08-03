import React, {Component, PropTypes} from 'react';

export default class Advisor extends Component {
    render() {
        const {advisorPhoto, advisorName, advisorPosition, advisorBiography} = this.props.advisor;
        return (
            <div className="advisors__item">
                <div className="advisors__item--photo">
                    <img src={advisorPhoto} alt="photo"/>
                </div>
                <div className="advisors__item--description">
                    <p className="name">{advisorName}</p>
                    <p className="position">{advisorPosition}</p>
                    <p className="bio">{advisorBiography}</p>
                </div>
            </div>
        );
    }
}