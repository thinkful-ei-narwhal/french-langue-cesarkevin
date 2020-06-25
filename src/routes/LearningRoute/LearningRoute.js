import React, { Component } from 'react';
import LangService from '../../services/lang-service';
import LanguageContext from '../../contexts/LanguagContext';
import ValidationError from '../../components/ValidationError/ValidationError';

class LearningRoute extends Component {

  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = {
      guess: {
        value: '',
        touched: false,
      }
    };
  }

  componentDidMount () {
    this.context.clearError();
    LangService.getHead()
    .then(data => {this.context.setHead(data)})
    .catch(error => this.context.setError(error))
  }

  handleSubmit = e => {
    this.context.clearError();
    LangService.postGuess(this.state.guess.value)
    .then(data => {this.context.setHead(data)})
    .catch(error => this.context.setError(error))
  }

  validateGuess() {
    const guess = this.state.guess.value;
    if (!guess) {
      return 'guess is required';
    } 
  }
  updateGuess(guess) {
    this.setState({ guess: { value: guess, touched: true } });
  }


  render() {
    const guessError = this.validateGuess();
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
        <form
        onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit();
        }}
        >
          {this.state.guess.touched && <ValidationError message={guessError} />}
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input type='text' className='learn-guess-input' id='learn-guess-input' name='learn-guess-input' required
          onChange={(e) => this.updateGuess(e.target.value)}></input>
          
          <button type='submit' value='Submit'
          disabled={this.validateGuess()}
          >
            Submit your answer
          </button>
        </form>
      </section>
    );
  }
}

export default LearningRoute
