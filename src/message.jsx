import React, {Component} from 'react';

const Message = React.createClass({
  render: function() {
    return (
      <div className="message">
        <span className="username">Anonymous1</span>
        <span className="content">I won't be impressed with technology until I can download food.</span>
      </div>
    );
  }
});

export default Message;
