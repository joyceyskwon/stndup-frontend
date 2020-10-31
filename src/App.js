import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import './App.css';

class App extends React.Component {
  state = {
    currentUser: null,
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(r => r.json())
      .then(bots => {
        this.setState({
          currentUser: bots[3].avatar_url
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Homepage 
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
