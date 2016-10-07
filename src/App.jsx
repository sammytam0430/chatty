// ES5
import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import CharBar from './charBar.jsx';
const socket = new WebSocket("ws://10.10.45.78:4000/socketserver");

const App = React.createClass({

  getInitialState: function() {
    return {
      data: {
        currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous`
        messages: []
      },
      onlineUser: 0
    };
  },

  postMessage: function(message) {
    if (message.username.match(/^\s+$/) || message.username === '') {
      message.username = 'Anonymous';
    }
    socket.send(JSON.stringify(message));
  },

  postNotification: function(message) {
    if (message.username === this.state.data.currentUser.name || message.username.match(/^\s+$/) || message.username === '') {
      return
    } else {
      socket.send(JSON.stringify(message));
    }
  },

  componentDidMount: function() {

    socket.onopen = function(event) {
      console.log("Connected to websocket server");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      let newData;
      switch (message.type) {
        case 'onlineUser':
          this.setState({onlineUser: message.length})
          console.log(this.state.onlineUser);
          break;
        case 'incomingMessage':
          newData = Object.assign( {}, this.state.data, {
            messages: this.state.data.messages.concat([message]),
            currentUser: {name: message.username}
          });
          this.setState({data: newData});
          break;
        case 'incomingNotification':
          newData = Object.assign( {}, this.state.data, {
            messages: this.state.data.messages.concat([message]),
            currentUser: {name: message.username}
          });
          this.setState({data: newData});
          break;
        default:
          throw new Error("Unknown event type " + data.type);
      }
    };

    setTimeout(() => {
      this.state.data.messages.push({
        id: 3,
        username: "Michelle",
        content: "Hello there!"
      });
      this.setState({data: this.state.data})
    }, 1000);

  },

  render: function() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
          <h3>{this.state.onlineUser} users online</h3>
        </nav>
        <MessageList data={this.state.data}/>
        <CharBar data={this.state.data} postMessage={this.postMessage} postNotification={this.postNotification}/>
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
