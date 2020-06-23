import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLanguage: () => {},
  setWords: () => {},
})

export default LanguageContext

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: [],
      words: [],
      error: null,
    }
  }
  setError = error => {
    this.setState({
      error: error
    })
  }
  clearError = () => {
    this.setState({
      error: null
    })
  }
  setLanguage = data => {
    this.setState({
      language: data.language
    })
  }
  setWords = data => {
    this.setState({
      words: data.words
    })
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      error: this.state.error,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      clearError: this.clearError,
      setError: this.setError,
    }

    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}