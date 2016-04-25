import React, { Component } from 'react';


class LyricsContainer extends Component {
  render() {
    return (
      <div>
        <div style={{
          textAlign: 'center',
          border: 'solid black 1px',
          marginTop: '10'
          }}>
          <p>These are my beautiful word containers</p>

            {this.props.wordContainers.map( (wordContainer, i) => {
              return (
                <WordContainer
                  text='poo'
                  onClick={this.props.onWordClick}
                  key={i}
                  id={i}
                />
              )
            })}

        </div>
    </div>

    )
  }
}
