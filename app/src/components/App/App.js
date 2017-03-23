import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import { connect } from 'react-redux';
import { updateData } from '../../actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>You are based in: {this.props.location} </h2>
          <button onClick={() => this.props.updateData('Ray', 'Californa')}>Click me</button>
        </div>
        <Intro />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateData: (newName, newLocation) => dispatch(updateData(newName, newLocation))
})

const mapStateToProps = (state) => ({
  location: state.users.location
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
