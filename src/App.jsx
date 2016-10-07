// ES5
import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import CharBar from './charBar.jsx';
const socket = new WebSocket("ws://localhost:4000/socketserver");

const App = React.createClass({

  getInitialState: function() {
    return {
      data: {
        currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous`
        messages: []
      },
      notification: []
    };
  },

  postMessage: function(message) {
    socket.send(JSON.stringify(message));
  },

  postNotification: function(message) {
    if (message.username === this.state.data.currentUser.name || message.username.match(/^\s+$/) || message.usernam === '') {
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
      let newData;
      let newCurrentUser;
      switch (message.type) {
        case 'incomingMessage':
          console.log(message);
          newCurrentUser = Object.assign( {}, this.state.data.currentUser, {
            name: message.username
          });
          newData = Object.assign( {}, this.state.data, {
            messages: this.state.data.messages.concat([message]),
            currentUser: newCurrentUser
          });
          newData = Object.assign( {}, this.state, {
            data: newData
          });
          this.setState(newData);
          break;
        case 'incomingNotification':
          newCurrentUser = Object.assign( {}, this.state.data.currentUser, {
            name: message.username
          });
          newData = Object.assign( {}, this.state.data, {
            currentUser: newCurrentUser
          });
          newData = Object.assign( {}, this.state, {
            data: newData,
            notification: this.state.notification.concat([message])
          });
          this.setState(newData);
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
    }, 3000);

  },

  render: function() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList data={this.state.data} notification={this.state.notification}/>
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
