import React, {Component} from 'react';
import Message from './message.jsx';

const MessageList = React.createClass({
  render: function() {
    return (
      <div id="message-list">
        <Message />
      </div>
    );
  }
});

export default MessageList;
