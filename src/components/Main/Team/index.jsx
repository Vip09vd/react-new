import React from 'react';
import photo from '../../assets/img/photo-1.png';
import TeamItem from "./TeamItem";

export default class Team extends React.Component {
    constructor() {
        super();
        this.USERS = [
            {
                userImg: photo,
                userName: 'Vadim',
                userPosition: 'CEO'
            },
            {
                userImg: photo,
                userName: 'John',
                userPosition: 'DOE'
            },
            {
                userImg: photo,
                userName: 'Vadim',
                userPosition: 'CEO'
            },
            {
                userImg: photo,
                userName: 'John',
                userPosition: 'DOE'
            },
            {
                userImg: photo,
                userName: 'Vadim',
                userPosition: 'CEO'
            },
            {
                userImg: photo,
                userName: 'John',
                userPosition: 'DOE'
            }
        ];
    }

    render() {
        return <div className="team">
            {this.USERS.map(function (user, index) {
                return <TeamItem user={user} key={index}/>;
            })}
        </div>;
    }
}