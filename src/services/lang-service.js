const LangService = {
  getLanguage(){
    let error;
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {}
      })
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data})
  }
}

export default LangService