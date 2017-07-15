import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            headerPosition: false,
            activeSectionIndex: 0,
            lastScrollTop: 0
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
        window.scrollTo(0, section.offsetTop - 70);
        this.setState({
            activeSectionIndex: target.id,
            lastScrollTop: section.offsetTop - 70
        })
    };

    getSections() {
        return Array.prototype.slice.call(document.getElementsByTagName('section'));
    }


    handleScroll = () => {
        const scrollTop = document.body.scrollTop;
        const {activeSectionIndex, lastScrollTop} = this.state;
        const direction = lastScrollTop > scrollTop ? -1 : 1;
        const sections = this.getSections();
        const newActiveSectionIndex = activeSectionIndex + direction;
        const nextSection = sections[newActiveSectionIndex];
        if (nextSection) {
            const sectionOffsetTop = nextSection.getBoundingClientRect().top;
            const sectionOffsetBottom = nextSection.getBoundingClientRect().bottom;
            if (direction === 1 && sectionOffsetTop <= 70 || direction === -1 && sectionOffsetBottom >= 70) {
                this.setState({
                    activeSectionIndex: newActiveSectionIndex
                });
            }
            this.setState({
                lastScrollTop: scrollTop
            });
        }
        this.setState({
            headerPosition: scrollTop > 100
        })
    };

    render() {
        return (
            <header className={this.state.headerPosition ? "scrolled" : ""}>
                <div className="container">
                    <div className="logo">
                        <div className="logo__img"/>
                        <span>CareWallet</span>
                    </div>
                    <ul className="nav">
                        <li><a className={this.state.activeSectionIndex == 0 ? "active" : ""}
                               onClick={this.handleNavLinkClick} id="0" href="javascript:void(0)">Company</a></li>
                        <li><a className={this.state.activeSectionIndex == 7 ? "active" : ""}
                               onClick={this.handleNavLinkClick} id="7" href="javascript:void(0)">Project Plan</a></li>
                        <li><Link to="/ico">ICO</Link></li>
                        <li><a className={this.state.activeSectionIndex == 1 ? "active" : ""}
                               onClick={this.handleNavLinkClick} id="1" href="javascript:void(0)">Team</a></li>
                        <li><a className={this.state.activeSectionIndex == 2 ? "active" : ""}
                               onClick={this.handleNavLinkClick} id="2" href="javascript:void(0)">Documents</a></li>
                        <li><a className={this.state.activeSectionIndex == 3 ? "active" : ""}
                               onClick={this.handleNavLinkClick} id="3" href="javascript:void(0)">Contacts</a></li>
                        <li><a className={this.state.activeSectionIndex == 4 ? "active" : ""}
                               onClick={this.handleNavLinkClick} id="4" href="javascript:void(0)">FAQ </a></li>
                        <li>
                            <button className="btn">Buy Now</button>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
