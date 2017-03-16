import React from 'react'

const Footer = (props) => (
  <div>
    <p>I am a {props.text} </p>
    <button onClick={() => props.sayHello(' James ')}>Click me in the footer</button>
  </div>
);

export default Footer
