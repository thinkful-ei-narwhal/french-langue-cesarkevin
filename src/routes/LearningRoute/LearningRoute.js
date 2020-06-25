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
      },
      submitted: false,
      currentGuess: '',
      currentWord: '',
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
    this.setState({ currentWord: this.context.head.nextWord})
    this.setState({ currentGuess: this.state.guess.value})
    this.setState({ submitted: true })
    LangService.postGuess(this.state.guess.value)
    .then(data => {this.context.setHead(data)})
    .catch(error => this.context.setError(error))
    this.setState({ guess: {
      value: '',
      touched: false,
    }})
  }
  handleSubmit2 = e => {
    this.setState({ submitted: false })
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

  checkAnswer() {
    if (this.state.submitted === false) {
      return "Translate the word:"
    }
    else if (this.state.submitted && this.context.head.isCorrect) {
      return "You were correct! :D"
    }
    else {
      return "Good try, but not quite right :("
    }
  }

  displayFeedback() {
    if (this.state.submitted) { 
      return (
      <div className="DisplayFeedback">
        <p>The correct translation for {this.state.currentWord} was {this.context.head.answer} and you chose {this.state.currentGuess}!</p>
      </div>
      )
    }
     return null;
  }
  renderButton() {
    if (this.state.submitted) {
      return 'Try another word!'
    }
    return 'Submit your answer'
  }

  render() {
    const guessError = this.validateGuess();
    return (
      <section>
        implement and style me
        <h2>{this.checkAnswer()}</h2>
        <span>{this.context.head.nextWord}</span>
        <div className="DisplayScore">
          <p>Your total score is: {this.context.head.totalScore}</p>
        </div>
          {this.displayFeedback()}
        <div>
          <p>You have answered this word correctly {this.context.head.wordCorrectCount} times.</p>
          <p>You have answered this word incorrectly {this.context.head.wordIncorrectCount} times.</p>
        </div>
        {(this.state.submitted===false)?(
        <form
        onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit();
        }}
        >
          {this.state.guess.touched && <ValidationError message={guessError} />}
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input type='text' className='learn-guess-input' id='learn-guess-input' name='learn-guess-input' value={this.state.guess.value} required
          onChange={(e) => this.updateGuess(e.target.value)}></input>
          
          <button type='submit' value='Submit'
          disabled={this.validateGuess()}
          >
            Submit your answer
          </button>
        </form>):
        <button type='submit' value='Submit'
        onClick={(e) => {
          e.preventDefault();
          this.handleSubmit2();
        }}>
            Try another word!
        </button>}
      </section>
    );
  }
}

export default LearningRoute