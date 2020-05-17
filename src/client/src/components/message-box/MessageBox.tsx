import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import './MessageBox.css';
import { message } from '../../utils/utils';

class SearchStatusBox extends Component<{
  message: message | null;
  setMessage: (m: message | null) => void;
}> {
  icon = 'fa-check';
  text = '';
  handleClickOutside() {
    if (!this.props.message?.search) this.props.setMessage(null);
  }

  render() {
    const show = this.props.message !== null;
    if (show) {
      const icon = this.props.message!.icon;
      this.icon = icon !== '' ? icon : 'fa-check';
      this.text = this.props.message!.text;
    }
    return (
      <section className={`message-box-wrapper ${this.props.message?.error && 'error'} ${show && 'show'}`}>
        <div className="message-box-contents">
          {this.icon !== 'none' && <i className={`fa ${this.icon} message-icon`}></i>}
          <p className={`message`}>{this.text}</p>
        </div>
      </section>
    );
  }
}

export default onClickOutside(SearchStatusBox);
