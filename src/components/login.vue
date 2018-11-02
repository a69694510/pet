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
                         <el-button type="primary" value="login">sign in</el-button>
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
import axios from 'axios';
export default {
  methods:{
    signup:function(){
       let formObj = {};
       formObj.email = signup.email.value;
       formObj.pwd = signup.pwd.value;
       formObj.repwd = signup.repwd.value;
       formObj.nickname= signup.nickname.value;
       alert(formObj.nickname)
       //if success then res else catch  error
       //i not't Cross domain 
       axios.post('http://localhost:3000/users/signup',formObj)
       .then(function(res){
         alert(res.data)
       })
       .catch(function(err){
         alert(err)
       })
    }
  }
}
</script>
