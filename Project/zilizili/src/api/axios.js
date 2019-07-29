import axios from 'axios';
let http = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    // 'Authorization': 'ZXL'
  },
  transformRequest: [function (data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res.data);
  }).catch(function (err) {
    //错误处理
    ErrorHandle(err);
    response(err);
  })
}

function ErrorHandle(err){
  var data = err.response.data;
  switch(err.response.status){
    case 401:{ 
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      });
    }break;
    case 404:{ alert(err.response.status); }break;
    case 500:{ alert(err.response.status); }break;
    default:{
      
    }
  }
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  },
  auto:function(option,params,response){
    return apiAxios(option.Type, option.Url, params, response)
  }
}