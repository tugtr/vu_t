const axios = require('axios');

const post = (url, data) => {
  const requestData = Object.assign({}, { ...data });
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: requestData,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 3000,
    }).then(res => {
        resolve(res)
      if (res.status === 200) {

      }
    }).catch(error => {
       reject(error);
    })
  })
};

export default {
  post,
}
