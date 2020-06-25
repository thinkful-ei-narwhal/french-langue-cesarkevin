import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LangService from '../../services/lang-service';
import LanguageContext from '../../contexts/LanguagContext';
import WordList from '../../components/WordList/WordList';
import './DashboardRoute.css'

class DashboardRoute extends Component {

  static contextType = LanguageContext;

  componentDidMount () {
    const setData = (data) => {
      this.context.setLanguage(data)
      this.context.setWords(data)
    }
    this.context.clearError();
    LangService.getLanguage()
    .then(data => {setData(data)})
    .catch(error => this.context.setError(error))
  }

  render() {
    let { language, words } = this.context
    const wordsList = words.map((word) => {
      return <WordList 
                key={word.id}
                original={word.original}
                correct_count={word.correct_count}
                incorrect_count={word.incorrect_count}
              />
    })
    return (
      <section className='dashBoard'>
        <div className='head'>
        <h2>{language.name}</h2>
        <p>Total correct answers: {language.total_score}</p>
        <Link to = '/learn' className='button'>Start practicing</Link>
        </div>
        <h3 className='practiceHead'>Words to practice</h3>
          <ul>
            {wordsList}
          </ul>
      </section>
    );
  }
}

export default DashboardRoute
