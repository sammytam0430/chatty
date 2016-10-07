import React, {Component} from 'react';
import Message from './message.jsx';
import MessageSystem from './messageSystem.jsx';

const MessageList = React.createClass({
  render: function() {
    return (
      <div id="message-list">
        {this.props.data.messages.map((data) => {
          switch (data.type) {
            case 'incomingNotification':
              return <MessageSystem key={data.id} content={data.content}/>
            break;
            default:
              return <Message key={data.id} username={data.username} content={data.content} color={data.color}/>
            }
          }
        )}
      </div>
    );
  }

});

export default MessageList;
