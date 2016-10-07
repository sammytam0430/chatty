import React, {Component} from 'react';
let oldUsername;

const CharBar = React.createClass({

  postMessage: function(e) {
    if (e.key === 'Enter') {
      if (this.refs.newMessage.value.match(/^\s+$/) || this.refs.newMessage.value === '') {
        this.refs.newMessage.value = '';
        this.refs.newMessage.placeholder = 'Type a message and hit ENTER';
        return;
      }
      this.props.postMessage({
        type: 'postMessage',
        color: this.props.color,
        username: this.refs.username.value,
        content: this.refs.newMessage.value
      });
      this.refs.newMessage.value = '';
    }
  },

  postNotification: function(e) {
    let newUsername = this.refs.username.value;
    if (e.key === 'Enter' || e.type === 'blur') {
      if (newUsername.match(/^\s+$/)) {
        newUsername = 'Anonymous';
      }
      if (!(oldUsername)) {
        oldUsername = 'Anonymous';
      }
      this.props.postNotification({
        type: 'postNotification',
        username: newUsername,
        content: oldUsername + ' has changed their name to ' + newUsername
      });
      console.log(oldUsername + ' has changed their name to ' + newUsername);
      oldUsername = newUsername;
    }
  },

  render: function() {
    return (
      <footer style={{background: this.props.color}}>
        <input id="username" type="text" placeholder="Insert your name" onBlur={this.postNotification} onKeyPress={this.postNotification} ref='username'/>
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" onKeyPress={this.postMessage} ref='newMessage'/>
      </footer>
    );
  }

});

export default CharBar;
