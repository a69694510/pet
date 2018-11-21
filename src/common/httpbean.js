//封装http请求
import axios from 'axios'
export function httpGet(url,cb,formObj={}){
  axios.get('/api'+url,formObj)
  .then(function(res){
    cb(res)
  })
  .catch(function(err){
    alert(err)
  })
}
export function httpPost(url,formObj,cb){
  axios.post('/api'+url,formObj)
  .then(function(res){
    cb(res)
  })
  .catch(function(err){
    alert(err)
  })
}

export function httpBinaryPost(url,formObj,cf){
  axios.post('/api'+url,formObj).then(function(res){
    cf(res);
  }).catch(function(err){
    alert(err)
  });
}
