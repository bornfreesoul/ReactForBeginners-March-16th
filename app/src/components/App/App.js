import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: 'Ray',
      location: 'Vancouver',
      weather: 'Always raining!'
    }

    this.sayHello = this.sayHello.bind(this)
  }

  sayHello(name) {
    this.setState({
      name
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Intro
          data={this.state}
          sayHello={this.sayHello}
        />
      </div>
    );
  }
}

export default App;
