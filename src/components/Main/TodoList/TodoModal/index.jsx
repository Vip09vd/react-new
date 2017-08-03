import React, {Component, PropTypes} from 'react';

export default class TodoModal extends Component {
    static propTypes = {
        isOpened: PropTypes.bool,
        onCloseModal: PropTypes.func,
        onSave: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    handleCancel = () => {
        this.props.onCloseModal();
    };

    handleSave = () => {
        const heading = this.heading.value;
        const text = this.text.value;
        this.props.onSave({heading, text});
        this.heading.value = '';
        this.text.value = '';
    };

    render() {
        const modalStyle = {
            display: this.props.isOpened ? 'block' : 'none'
        };
        return (
            <div style={modalStyle} className="modal-window">
                <div className="section-description">
                    <h2>Add Todo</h2>
                </div>
                <div className="modal-wrapper">
                    <div className="inputs">
                        <input ref={(input) => this.heading = input} type="text"/>
                        <textarea ref={(textarea) => this.text = textarea} cols="25" rows="7"/>
                    </div>
                    <button onClick={this.handleSave} className="btn btn-sm btn-blue-inverse">Save</button>
                    <button onClick={this.handleCancel} className="btn btn-sm btn-blue-inverse">Cancel</button>
                </div>
            </div>
        );
    }
}