import React, { Component } from 'react';
import TodoApp from './Todo';

const styles = {
  root: {
    borderRadius: '5%',
    margin: 5,
    padding: 5,
    display: 'inline-block',
    cursor: 'pointer',
} }

export default class WordContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solfege: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('yo you clicked on a word')

    this.state = {
      selected: true
    }

    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        style= {Object.assign({}, styles.root, {
          background: this.props.selected ? '#ccc' : '#eee',
        })}>
        <div>
          {
            this.props.solfege.map( (syl, i) => {
            return (
              <span
                style={{
                  color: syl.color,
                  padding: 3
                }}
                key={i}
              >
                {syl.text}
              </span>
            )
          })}
        </div>
        <div>{this.props.text}</div>
        {console.log(this.props.solfege)}
      </div>
      )
    }
  }
