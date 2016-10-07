import React, {Component} from 'react';

const MessageSystem = React.createClass({

  render: function() {
    return (
      <div className="message system">
        {this.props.notification.content}
      </div>
    );
  }

});

export default MessageSystem;
