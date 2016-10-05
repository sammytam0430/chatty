import React, {Component} from 'react';

const CharBar = React.createClass({

  addNewMessage: function(e) {
    if (e.key === 'Enter') {
      this.props.submit(this.refs.username.value, this.refs.newMessage.value);
      this.refs.newMessage.value = "";
    }
  },

  render: function() {
    // const currentUser = (this.props.data.currentUser.name) ? this.props.data.currentUser.name : 'Anonymous';
    const currentUser = this.props.data.currentUser.name;
    return (
      <footer>
        <input id="username" type="text" placeholder="Insert your name" ref='username'/>
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" onKeyPress= {this.addNewMessage} ref='newMessage'/>
      </footer>
    );
  }

});

export default CharBar;
