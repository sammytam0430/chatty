import React, {Component} from 'react';

const CharBar = React.createClass({

  render: function() {
    console.log("Rendering <CharBar/>");
    // var currentUser = (this.props.data.currentUser.name) ? this.props.data.currentUser.name : 'Anonymous';
    var currentUser = this.props.data.currentUser.name;
    return (
      <footer>
        <input id="username" type="text" value={currentUser} />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }

});

export default CharBar;
