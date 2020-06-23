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
      </section>
    );
  }
}

export default LearningRoute
