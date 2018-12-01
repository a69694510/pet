import {httpGet,httpPost,httpBinaryPost} from '../../common/httpbean'

export function subSay(sayform,self){
  let formObj = new FormData(sayform);
  function cf(res){
    //跳转，但是如果
    // self.$router.push('/private/home')
    //刷新
    console.log('1');
  }
  httpBinaryPost('/say/subSay',formObj,cf)
}
