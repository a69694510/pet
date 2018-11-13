import {httpPost} from '../../common/httpbean'
import userstore from '../stores/Userstore'

export function onsignup(signup,that){
  let formObj = {};
  formObj.email = signup.email.value;
  formObj.pwd = signup.pwd.value;
  formObj.repwd = signup.repwd.value;
  formObj.nickname= signup.nickname.value;
  function cf(res){
      if(res.data==1){
        signin.email.value=formObj.email;
        signin.pwd.value=formObj.pwd;
        that.signin()
      }
      else if (res.data==2){
        alert('emali重复')
      }
      else if (res.data==3){
        alert('昵称重复')
      }
      else if(res.data==0){
        alert('数据库错误,请稍后')
      }
   }
  httpPost('/user/signup',formObj,cf)
}

export function onsignin(signin,that){
  let formObj = {};
  formObj.email = signin.email.value;
  formObj.pwd = signin.pwd.value;
  // 从后端传来的标识位来判断.登陆
  // 用前端传来的标志位，进行跳转
  function cf(res){
    if(res.data!=0){
        //抛出消息
        userstore.commit('signin',res.data)
    }
    else {
      alert('账号/密码错误')
    }
  }
  httpPost('/user/signin',formObj,cf)
}


export function signinGet(){
    return userstore.state.loginbean;
}
