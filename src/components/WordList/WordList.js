import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguagContext'

class WordList extends Component {

  static contextType = LanguageContext;

  render() {
    return (
      <li>
        <h4>{this.props.original}</h4>
        <p>correct answer count: {this.props.correct_count}</p>
        <p>incorrect answer count: {this.props.incorrect_count}</p>
      </li>
    );
  }
}

export default WordList