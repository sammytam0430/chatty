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

// ES5
import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import CharBar from './charBar.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList />
        <CharBar />
      </div>
    );
  }
});

export default App;
