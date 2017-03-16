import React from 'react';
import Footer from '../Footer/Footer'

const Intro = (props) => {
  return (
    <div>
      <h1>Hello {props.data.name}</h1>
      <p>You are in {props.data.location}</p>
      <p>The weather is {props.data.weather}</p>
      <button onClick={() => props.sayHello('David')}>Say Hello</button>
      <Footer
        text="footer"
        sayHello={props.sayHello}
      />
    </div>
  )
}

export default Intro;

// const Intro = () => {
//   return (
//
//   )
// }
