import React, {Component, PropTypes} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="information">
                    <ul className="about">
                        <h4>Pages</h4>
                        <li><a href="">Project</a></li>
                        <li><a href="">Plan</a></li>
                        <li><a href="">Documents</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                    <ul className="product">
                        <h4>Product</h4>
                        <li><a href="">Project</a></li>
                        <li><a href="">Plan</a></li>
                        <li><a href="">Documents</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                    <ul className="contacts">
                        <h4>Contacts</h4>
                        <li><a href="">Project</a></li>
                        <li><a href="">Plan</a></li>
                        <li><a href="">Documents</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="social">
                    <div className="social__icons">
                        <a className="social__icons--fb" href="">
                            <div className="icn icn-facebook"></div>
                        </a>
                        <a className="social__icons--li" href="">
                            <div className="icn icn-linkedin"></div>
                        </a>
                        <a className="social__icons--fb" href="">
                            <div className="icn icn-facebook"></div>
                        </a>
                        <a className="social__icons--li" href="">
                            <div className="icn icn-linkedin"></div>
                        </a>
                    </div>
                    <p>The website is owned by CareWallet</p>
                    <p><strong>2017 CareWallet Inc. All rights reserved</strong></p>
                </div>
            </footer>
        );
    }
}