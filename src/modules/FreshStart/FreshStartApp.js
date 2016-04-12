import React from 'react';
import SolfegeButton from './SolfegeButton';
import SolfegeContainer from './SolfegeContainer'

function FreshStartApp(props) {
  return (
    <div>
      <h1 style= {{
        textAlign: 'center',
        background: 'yellow',
        color:'blue'}}>

        Fresh STaRt</h1>
        <div style={{
          background: '#44EEBB'
          }}>
        <SolfegeContainer style={{
          background: '#44EEBB',
        }}/> </div>

    </div>
  )
}

export default FreshStartApp;
