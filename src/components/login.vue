<template >
  <table align='center'>
      <tr align='center'>
        <td>sign in</td>
        <td>sign up</td>
      </tr>
      <tr>
        <td>
          <form name="signin">
              <table height='249px'>
                  <tr>
                      <td align='right'>email:</td>
                      <td align='right'>
                         <el-input v-model='input' placeholder='please input email' type="text" name="email" /></el-input>
                      </td>
                  </tr>
                  <tr>
                      <td align='right'>password:</td>
                      <td align='right'>
                         <el-input v-model='input' type="password" name="pwd"></el-input>
                      </td>
                  </tr>
                  <tr>
                      <td align='center' colspan="2">
                         <el-button type="primary" @click='signin' value="login">sign in</el-button>
                      </td>
                  </tr>
              </table>
          </form>
        </td>
        <td>
          <form name="signup">
            <table align='center'>
                <tr>
                    <td align='right'>email:</td>
                    <td align='right'>
                       <el-input v-model='input' type="text" name="email" placeholder='please input'/></el-input>
                    </td>
                </tr>
                <tr>
                    <td align='right'>password:</td>
                    <td align='right'>
                       <el-input v-model='input' type="password" name="pwd"></el-input>
                    </td>
                </tr>
                <tr>
                    <td align='right'>Confirm the password</td>
                    <td align='right'>
                       <el-input v-model='input' type="password" name="repwd"></el-input>
                    </td>
                </tr>
                <tr>
                    <td align='right'>nickname</td>
                    <td align='right'>
                       <el-input v-model='input' name="nickname"></el-input>
                    </td>
                </tr>
                <tr>
                    <td align='center' colspan="2">
                       <el-button type="primary" @click='signup'>join us</el-button>
                    </td>
                </tr>
            </table>
          </form>
        </td>
      </tr>
  </table>
</template>
<script>
//npm install axios --save-dev
// import axios from 'axios';
// import {httpPost} from '../common/httpbean'
import {onsignup,onsignin,signinGet} from '../vuex/actions/Useraction'
let that = null;
export default {
  data(){
    that=this;
    return{

    }
  },
  //计算，其实就是监听
  computed:{
    loginbean:signinGet
  },
  //watch,听完了在看
  watch:{
    // rs就是loginbean 一登陆就会弹出来
    loginbean:function(rs){
      alert('loginV受到'+rs.nickname);
      that.$parent.$parent.hidDiaLo();
      that.$parent.$parent.$parent.$refs.headBar.flag=1;
      //router jusp
      that.$router.push('/private/home')
    }
  },
  methods:{
    signup:function(){
        onsignup(signup,that)
    },
    signin:function(){
        onsignin(signin,that)
    }
  }
}
</script>
