import React from 'react';

const SolfegeButton = ({name}) => (
  <div style= {{
    background: 'red',
    width: 40,
    height: 40,
    borderRadius: "5%",
    margin: 3,
    display: 'inline-block',
  }}>
    <div style= {{
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '40px',}}>

      {name}</div>

  </div>
)

export default SolfegeButton;
