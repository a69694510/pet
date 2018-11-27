import {httpGet,httpPost,httpBinaryPost} from '../../common/httpbean'

export function subpetInfo(petform,self){
  let formObj = new FormData(petform);
  httpBinaryPost('/pet/subpetInfo',formObj,cf)
  function cf(res){
    //跳转，但是如果
    // self.$router.push('/private/home')
    //刷新
    self.$router.go(0)
  }
}
export function updPetInfo(petform,self){
  let formObj = new FormData(petform);
  httpBinaryPost('/pet/updpetInfo',formObj,cf)
  function cf(res){
    //跳转，但是如果
    // self.$router.push('/private/home')
    //刷新
    self.$router.go(0)
  }
}
export function delPetInfo(id,self){
  function cf(res){
    //跳转，但是如果
    // self.$router.push('/private/home')
    //刷新
    if(res.data==1){
      self.$router.go(0);
    }else {
      alert('登陆过期')
    }
  }
  httpGet('/pet/delpetInfo?id='+id,cf)
}
