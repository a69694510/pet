import {httpPost,httpBinaryPost} from '../../common/httpbean'

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
