import React, {Component} from 'react';
import Message from './message.jsx';

const MessageList = React.createClass({
  render: function() {
    console.log("Rendering <MessageList/>");
    return (
      <div id="message-list">
        <Message/>
      </div>
    );
  }
});

export default MessageList;
