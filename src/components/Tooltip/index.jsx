import React, {Component, PropTypes} from 'react';

export default class Tooltip extends Component {
    static propTypes = {
        target: PropTypes.object,
        children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string]),
        position: PropTypes.string,
        event: PropTypes.string
    };

    constructor() {
        super();

        this.state = {
            isShown: false,
            top: 0,
            left: 0
        }
    };



    componentWillReceiveProps(nextProps) {
        const target = nextProps.target;
        if (this.props.target !== target) {
            const event = nextProps.event;
            if (target) {
                target.removeEventListener(event, this.handleShow);
                target.addEventListener(event, this.handleShow);
                if (event === 'mouseenter') {
                    target.removeEventListener('mouseleave', this.handleHide);
                    target.addEventListener('mouseleave', this.handleHide)
                }
            }
        }
    }

    getPosition(target) {
        if (target) {
            const targetTop = target.offsetTop;
            const targetBottom = target.offsetTop + target.offsetHeight;
            const targetX = target.offsetLeft + target.offsetWidth/2;
            if (this.props.position === 'top') {
                this.setState({
                    top: targetTop,
                    left: targetX
                });
            } else if(this.props.position === 'bottom') {
                this.setState({
                    left: targetX,
                    top: targetBottom
                })
            }
        }
    }

    handleShow = () => {
        this.getPosition(this.props.target);
        this.setState({
            isShown: this.props.event === 'click' ? !this.state.isShown : true
        });
    };

    handleHide = () => {
        this.setState({
            isShown: false
        });
    };

    render() {
        const tooltipStyle = {
            display: this.state.isShown ? 'block' : 'none',
            top: this.state.top,
            left: this.state.left,
        };
        return (
            <div style={tooltipStyle} className={`tooltip ${this.props.position}`}>
                {this.props.children}
            </div>
        );
    };
}