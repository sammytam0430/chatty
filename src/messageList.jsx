import React, {Component} from 'react';
import Message from './message.jsx';
import MessageSystem from './messageSystem.jsx';

const MessageList = React.createClass({
  render: function() {
    return (
      <div id="message-list">
        {this.props.data.messages.map((data) => (
          <Message key={data.id} username={data.username} content={data.content}/>
        ))}
        {this.props.notification.map((notification) => (
          <MessageSystem key={notification.id} notification={notification}/>
        ))}
      </div>
    );
  }

});

export default MessageList;
