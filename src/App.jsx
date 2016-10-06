// ES5
import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import CharBar from './charBar.jsx';
const socket = new WebSocket("ws://localhost:4000/socketserver");

const App = React.createClass({

  getInitialState: function() {
    return {
      data: {
        currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous`
        messages: []
      }
    };
  },

  submit: function (message) {
    socket.send(JSON.stringify(message));
  },



  componentDidMount: function() {

    socket.onopen = function(event) {
      console.log("Connected to websocket server");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const newMessages = this.state.data.messages.concat([message]);
      const newCurrentUser = Object.assign( {}, this.state.data.currentUser, {
        name: message.username
      });
      let newData = Object.assign( {}, this.state.data, {
        messages: newMessages, currentUser: newCurrentUser
      });
      newData = Object.assign( {}, this.state, {
        data: newData
      });
      this.setState(newData);
    };

    setTimeout(() => {
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
