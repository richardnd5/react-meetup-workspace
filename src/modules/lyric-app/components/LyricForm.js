import React, { Component } from 'react';

class LyricForm extends Component {

  constructor(props) {
    super(props);
    this.state = {

      title: '',
      artist: '',
      lyrics: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      title: this.state.title,
      artist: this.state.artist,
      lyrics: this.state.lyrics,
    });
    this.setState({
      title: '',
      artist: '',
      lyrics: ''
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} style= {{
        border: 'dashed',
        display: 'block',
        width: 200,
        textAlign: 'center',
        background: 'yellow',
      }}>
      <input
        type="text"
        name="title"
        value={this.state.title}
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
        name="artist"
        value={this.state.artist}
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
          name="lyrics"
          value={this.state.lyrics}
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
      </form>
    )
  }
}

export default LyricForm;
