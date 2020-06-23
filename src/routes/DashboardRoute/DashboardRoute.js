import React, { Component } from 'react';
import LangService from '../../services/lang-service';
import LanguageContext from '../../contexts/LanguagContext'

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
    return (
      <section>
        <h2>{this.context.language.name}</h2>
        <h4>Total correct answers: ${this.context.language.total_score}</h4>
          <ul>
            <li>
              
            </li>
          </ul>
      </section>
    );
  }
}

export default DashboardRoute
