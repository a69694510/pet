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
      <button type="success" @click='showLogin'>join us</button>
    </el-col>
    <el-col :span='2'>
      &nbsp;
    </el-col>
  </el-row>
</template>
<script type="text/javascript">
import login from './login'
export default {
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
