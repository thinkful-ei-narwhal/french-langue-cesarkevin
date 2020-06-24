import React, { Component } from 'react';
import LangService from '../../services/lang-service';
import LanguageContext from '../../contexts/LanguagContext'

class LearningRoute extends Component {

  static contextType = LanguageContext;

  componentDidMount () {
    this.context.clearError();
    LangService.getHead()
    .then(data => {this.context.setHead(data)})
    .catch(error => this.context.setError(error))
  }

  render() {
    console.log(this.context.head)
    return (
      <section>
        implement and style me
        <h2>Translate the word:</h2>
        <span>{this.context.head.nextWord}</span>
        <p>Your total score is: {this.context.head.totalScore}</p>
        <div>
          <p>You have answered this word correctly {this.context.head.wordCorrectCount} times.</p>
          <p>You have answered this word incorrectly {this.context.head.wordIncorrectCount} times.</p>
        </div>
        <form>
          <label for='learn-guess-input'>What's the translation for this word?</label>
          <input type='text' className='learn-guess-input' id='learn-guess-input' name='learn-guess-input' required></input>
          <button type='submit'>Submit your answer</button>

        </form>
      </section>
    );
  }
}

export default LearningRoute
