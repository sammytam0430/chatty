import React, {Component} from 'react';

const CharBar = React.createClass({
  render: function() {
    console.log("Rendering <CharBar />");
    return (
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)" />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
});

export default CharBar;
