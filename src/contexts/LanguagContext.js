import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const UserContext = React.createContext({
  language: [],
  words: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLang: () => {},
  setWords: () => {},
})

export default UserContext

export class UserProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: [],
      words: [],
      error: null,
    }
  }
  setError = () => {

  }
  clearError = () => {

  }
  setLanguage = () => {
    
  }
  setWords = () => {

  }

  render() {
    const value = {
      getLanguage: this.getLanguage
    }

    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}