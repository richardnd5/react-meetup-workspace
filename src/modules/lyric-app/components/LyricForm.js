import React, { Component } from 'react';

class LyricForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      text: this.state.text,
      completed: false
    });
    this.setState({
      text: ''
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (

      <div style={{
        background: 'yellow',

      }}>

      <form onSubmit={this.handleSubmit} style= {{
        border: 'dashed',
        display: 'block',
        width: 200,
        textAlign: 'center'
      }}>
      <input
        type="text"
        name="text"
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="Song Title"
        style= {{
          display: 'block',
          margin: 5,
          textAlign: 'center'

        }}
      />
      <input
        type="text"
        name="text"
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="Artist"
        style= {{
          display: 'block',
          margin: 5,
          textAlign: 'center'

        }}
      />
        <input
          type="textArea"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Line Of Lyric"
          style= {{
            display: 'block',
            margin: 5,
            textAlign: 'center'
          }}
        />
        <input
          type="submit" style= {{
            cursor: 'pointer',
            margin: 5
          }}
        />
      </form></div>
    )
  }
}

export default LyricForm;
