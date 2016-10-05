// ES5
import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import CharBar from './charBar.jsx';

const App = React.createClass({

  getInitialState: function() {
    return {
      data: {
        currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: [
          {
            id: 1,
            username: "Bob",
            content: "Has anyone seen my marbles?",
          },
          {
            id: 2,
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ]
      },
    };
  },

  submit: function (username, message) {
    this.state.data.messages.push({
      username: username,
      content: message
    });
  },

  componentDidMount: function() {
    setTimeout(() => {
      console.log("Simulating incoming message");
      this.state.data.messages.push({
        id: 3,
        username: "Michelle",
        content: "Hello there!"
      });
      this.setState({data: this.state.data})
    }, 3000);
  },

  render: function() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList data={this.state.data} />
        <CharBar data={this.state.data} submit={this.submit}/>
      </div>
    );
  }

});

export default App;

// ES6
// import React, {Component} from 'react';
//
// class App extends Component {
//   render() {
//     return (
//       <h1>Hello React :)</h1>
//     );
//   }
// }
// export default App;
