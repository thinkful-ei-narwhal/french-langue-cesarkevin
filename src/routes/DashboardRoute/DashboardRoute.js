import React, { Component } from 'react';
import LangService from '../../services/lang-service';
import LanguageContext from '../../contexts/LanguagContext'

class DashboardRoute extends Component {

  static contextType = LanguageContext;

  componentDidMount () {
    this.context.clearError();
    LangService.getLanguage()
    .then(data => {this.context.setLanguage(data)})
    .catch(error => this.context.setError(error))
  }

  render() {
      console.log(this.context.language)
    return (
      <section>
        <h2>Test language 1</h2>
          <ul>
            <li>
              
            </li>
          </ul>
      </section>
    );
  }
}

export default DashboardRoute
