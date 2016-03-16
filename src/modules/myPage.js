import React, { Component } from 'react';

class myPage extends Component {

  render() {
    return(
    <div>
      <p>This is my test render</p>

      <anotherForm />
    </div>
    )
  }
}

class anotherForm extends Component {
  render(){
    return (
      <p>Hello!</p>
    )
  }
}

export default myPage;
