import React, {Component} from 'react';
import Message from './message.jsx';

const MessageList = React.createClass({

  render: function() {
    console.log("Rendering <MessageList/>");
    const rows = [];
    this.props.data.messages.forEach((data) => {
      rows.push(<Message key={data.id} username={data.username} content={data.content}/>)
    });
    return (
      <div id="message-list">
        {rows}
      </div>
    );
  }

});

export default MessageList;
