//封装http请求
import axios from 'axios'
export function httpPost(url,formObj,cb){
  axios.post('/api'+url,formObj)
  .then(function(res){
    cb(res)
  })
  .catch(function(err){
    alert(err)
  })
}
export function httpGet(url,cb,formObj={}){
  axios.get('/api'+url,formObj)
  .then(function(res){
    cb(res)
  })
  .catch(function(err){
    alert(err)
  })
}
export function httpBinaryPost(url,formObj,cf){
  axios.post(url,formData,{
    headers:{
      'Content-Type':'multiple/form-data'
    }
  }.then(function(res){
    cf(res);
  }))
}
