import React from 'react';
import SignupForm from './SignupForm';

function Home(props) {
  return (
    <div>
      <h1>Welcome To The Solfege Spot</h1>
      <div>
        <p>Sign Up</p>
        <SignupForm />
      </div>
    </div>
  )
}

export default Home;
