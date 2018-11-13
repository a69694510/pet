<template>
  <el-row>
    <el-col :span='2'>
      &nbsp;
    </el-col>
    <el-col :span='4' style="background:#f9fafc; font-size:2em">
      <i class="el-icon-menu"></i>
      zone
    </el-col>
    <el-col :span='10'style="background:#f9fafc">
      <el-input :on-icon-click='handiconclick' v-model='input' suffix-icon='el-icon-search' placeholder='input'>

      </el-input>
    </el-col>
    <el-col :span='6' style="background:#f9fafc">
      <!-- 0未登陆 1登陆成功 -->
      <el-button v-if='flag==0' type="success" @click='showLogin'>join us</el-button>

      <div v-if='flag==1' style="font-size:1em">
        <span>主页</span>
        <span>空间</span>
        <span>寄养</span>
        <span>医院</span>
        <span>食物</span>
        <span>问答</span>
      </div>
    </el-col>
    <el-col :span='2'>
      &nbsp;
    </el-col>
  </el-row>
</template>
<script type="text/javascript">
import login from './login'
export default{
  data(){
    return{
      flag:0
    }
  },
  methods:{
    showLogin(){
      //$parent is APP.vue
      //diaLo is tap
      //don't forget the ref behind 's'
      //this headbar is public
      this.$parent.$refs.diaLol.showDiaLo(login)
    }
  }
}
</script>
