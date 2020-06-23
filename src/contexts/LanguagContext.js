import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const LanguageContext = React.createContext({
  language: {},
  words: [],
  head: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setLanguage: () => {},
  setWords: () => {},
  setHead: () => {},
})

export default LanguageContext

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: [],
      words: [],
      head: {},
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
  setHead = data => {
    this.setState({
      head: data
    })
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      head: this.state.head,
      error: this.state.error,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      clearError: this.clearError,
      setError: this.setError,
      setHead: this.setHead,
    }

    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}