import React, {Component} from 'react';

const Message = React.createClass({

  render: function() {
    return (
      <div className="message">
        <span className="username" style={{color: this.props.color}}>{this.props.username}</span>
        <span className="content">{this.props.content}</span>
      </div>
    );
  }

});

export default Message;
