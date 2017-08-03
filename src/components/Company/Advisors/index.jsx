import React, {Component, PropTypes} from 'react';
import Advisor from './Advisor';
import photo from '../../assets/img/pradeep.png';

export default class Advisors extends Component {
    constructor() {
        super();
        this.ADVISORS = [
            {
                advisorPhoto: photo,
                advisorName: 'Pradeep Goel',
                advisorPosition: 'CEO',
                advisorBiography: 'Lorem ipsum dolor sit amet, Consequuntur eaque earum harum in ipsa laudantium maiores molestiae quos,rationeunde!'
            },
            {
                advisorPhoto: photo,
                advisorName: 'Pradeep Goel',
                advisorPosition: 'CEO',
                advisorBiography: 'Lorem ipsum dolor sit amet, Consequuntur eaque earum harum in ipsa laudantium maiores molestiae quos,rationeunde!'
            },
            {
                advisorPhoto: photo,
                advisorName: 'Pradeep Goel',
                advisorPosition: 'CEO',
                advisorBiography: 'Lorem ipsum dolor sit amet, Consequuntur eaque earum harum in ipsa laudantium maiores molestiae quos,rationeunde!'
            },
            {
                advisorPhoto: photo,
                advisorName: 'Pradeep Goel',
                advisorPosition: 'CEO',
                advisorBiography: 'Lorem ipsum dolor sit amet, Consequuntur eaque earum harum in ipsa laudantium maiores molestiae quos,rationeunde!'
            }
        ]
    }

    render() {
        return (
            <div className="advisors">
                <div className="container">
                    <div className="section-description">
                        <h2>Advisors</h2>
                    </div>
                    {this.ADVISORS.map(function (advisor, index) {
                        return <Advisor advisor={advisor} key={index}/>;
                    })}
                </div>
            </div>
        );
    }
}