import axios from 'axios'

export default function (url,data={},method='GET') {

  return new Promise((resolve,reject) =>{
    let promise;
    if(method === 'GET'){
      let queryStr = '';
      Object.keys(data).forEach(key=>{
        queryStr += key + '='+ data[key]+"&"
      });
      if(queryStr){
        queryStr = '?' + queryStr.substring(0, queryStr.length-1)
      }
      promise = axios.get(url +  queryStr)
    }else {
      promise = axios.post(url ,data)
    }
    promise
      .then(response=>{
        resolve(response.data)
      })
      .catch(err=>{
        reject(err.data)
      })
  })
}
