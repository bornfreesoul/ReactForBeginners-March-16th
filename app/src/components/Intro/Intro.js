import React from 'react';
import { connect } from 'react-redux'

const Intro = ({ username }) => {
  return (
    <div>
      <h1>Hello { username } </h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.users.name
  }
}

export default connect(mapStateToProps)(Intro);
