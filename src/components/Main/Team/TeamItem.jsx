import React, { PropTypes } from "react";

export default class TeamItem extends React.Component {
    static propTypes = {
        user: PropTypes.shape({
            img: PropTypes.string,
            name: PropTypes.string,
            position: PropTypes.string
        })
    };

    render() {
        const { userImg, userName, userPosition } = this.props.user;
        return (
            <div className="team__item">
                <div className="team__item--img">
                    <img src={ userImg } alt=""/>
                </div>
                <div className="team__item--description">
                    <h4>{ userName }</h4>
                    <p>{ userPosition }</p>
                </div>
            </div>
        )
    }
}

