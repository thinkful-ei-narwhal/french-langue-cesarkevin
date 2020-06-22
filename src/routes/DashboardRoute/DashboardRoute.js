import React, { Component } from 'react';
import LangService from '../services/lang-service';

class DashboardRoute extends Component {

  componentDidMount () {
    LangService.getLanguage;
  }

  render() {
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
