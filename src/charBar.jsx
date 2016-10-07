import React, {Component} from 'react';

const CharBar = React.createClass({

  postMessage: function(e) {
    if (e.key === 'Enter') {
      this.props.postMessage({
        type: 'postMessage',
        username: this.refs.username.value,
        content: this.refs.newMessage.value
      });
      this.refs.newMessage.value = '';
    }
  },

  postNotification: function(e) {
    if (e.key === 'Enter' || e.type === 'blur') {
      this.props.postNotification({
        type: 'postNotification',
        username: this.refs.username.value,
        content: this.props.data.currentUser.name + ' has changed their name to ' + this.refs.username.value
      });
    }
  },

  render: function() {
    // const currentUser = (this.props.data.currentUser.name) ? this.props.data.currentUser.name : 'Anonymous';
    const currentUser = this.props.data.currentUser.name;
    return (
      <footer>
        <input id="username" type="text" placeholder="Insert your name" onBlur={this.postNotification} onKeyPress={this.postNotification} ref='username'/>
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" onKeyPress={this.postMessage} ref='newMessage'/>
      </footer>
    );
  }

});

export default CharBar;
