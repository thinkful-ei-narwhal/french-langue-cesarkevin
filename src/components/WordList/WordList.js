import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguagContext'
import './WordList.css'

class WordList extends Component {

  static contextType = LanguageContext;

  render() {
    return (
      <li className= 'word'>
        <div className= 'originalWord'>
        <h4>{this.props.original}</h4>
        </div>
        <div className= 'score'>
        <p>correct answer count: {this.props.correct_count}</p>
        <p>incorrect answer count: {this.props.incorrect_count}</p>
        </div>
      </li>
    );
  }
}

export default WordList