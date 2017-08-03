import React, {Component, PropTypes} from 'react';
import {Link} from "react-router-dom";
import Utils from "../../lib/Utils";

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            headerPosition: false,
            // activeSectionIndex: 0,
            // lastScrollTop: 0,
            menuCollapse: false
        };
    }

    componentDidMount() {
        this.scrollHandler = window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        this.scrollHandler.removeEventListener('scroll', this.handleScroll);
    }

    handleNavLinkClick = ({target}) => {
        const sections = this.getSections();
        const section = sections[target.id];
        Utils.scrollToY(window, section.offsetTop - 70, 1200);
        this.setState({
            activeSectionIndex: +target.id,
            lastScrollTop: section.offsetTop - 70
        })
    };

    // getSections() {
    //     return Array.prototype.slice.call(document.getElementsByTagName('section'));
    // }

    handleScroll = () => {
        const scrollTop = document.body.scrollTop;
        // const {activeSectionIndex, lastScrollTop} = this.state;
        // const direction = lastScrollTop > scrollTop ? -1 : 1;
        // const sections = this.getSections();
        // const newActiveSectionIndex = activeSectionIndex + direction;
        // const nextSection = sections[newActiveSectionIndex];
        // if (nextSection) {
        //     const sectionOffsetTop = nextSection.getBoundingClientRect().top;
        //     const sectionOffsetBottom = nextSection.getBoundingClientRect().bottom;
        //     if (direction === 1 && sectionOffsetTop <= 70 || direction === -1 && sectionOffsetBottom >= 70) {
        //         this.setState({
        //             activeSectionIndex: newActiveSectionIndex
        //         });
        //     }
        //     this.setState({
        //         lastScrollTop: scrollTop
        //     });
        // }
        this.setState({
            headerPosition: scrollTop > 100
        });
    };

    toggleClass = () => {
        const currentState = this.state.menuCollapse;
        this.setState({menuCollapse: !currentState});
    };


    render() {
        return (
            <header className={this.state.headerPosition ? "scrolled" : ""}>
                <div className="header-buttons">
                    <Link to="/ico">SmartCare Wallet ICO Underway Buy Tokens</Link>
                </div>
                <div className="header-wrap">
                    <Link className="logo" to="/main">
                        <div className="logo__img"/>
                        <span>SmartCare Wallet</span>
                    </Link>
                    <div className={this.state.menuCollapse ? 'open' : 'close'} onClick={this.toggleClass}
                         id="burger-menu">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <ul className={this.state.menuCollapse ? 'nav open' : 'nav'}>
                        <li><Link to="/main">Product</Link></li>
                        <li><Link to="/company">Company</Link></li>
                        <li><a className={this.state.activeSectionIndex === 3 ? "active" : ""}
                               href="javascript:void(0)">Community</a></li>
                        <li><a className={this.state.activeSectionIndex === 4 ? "active" : ""}
                               href="javascript:void(0)">Media</a></li>
                        <li><a className={this.state.activeSectionIndex === 2 ? "active" : ""}
                               href="javascript:void(0)">ICO</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
