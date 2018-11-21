<template>
  <el-row>
    <el-col :span='2'>
      &nbsp;
    </el-col>
    <el-col :span='4' style="background:yellow">
          <el-menu  default-active="1" class="el-menu-vertical-demo" style="height:800px;">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;宠物信息</span>
            </el-menu-item>
              <!--  disabled -->
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;宠物相册</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;宠物日至</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">宠物朋友圈</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问&nbsp;&nbsp;&nbsp;&nbsp;答&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </el-menu-item>
          </el-menu>
    </el-col>
    <el-col :span='16' style="background:green">
      <petform v-if='flag==0'/>
      <petinfo ref='petinfo' v-if='flag>0'/>
    </el-col>
    <el-col :span='2'>
      &nbsp;
    </el-col>
  </el-row>
</template>

<script>
let self;
// import axios from 'axios'
import {httpGet} from '../../common/httpbean'
import {subpetInfo} from '../../vuex/actions/petaction'
import petform from './petform'
import petinfo from './petInfo'
export default {
  //当这个组件，被创建，并加载完成后，就执行请求，去拿宠物信息,也就是在查完数据库以后在进行操作
  mounted(){
    httpGet('/pet/mypetinfo',cf)
    function cf(res){
      let rs = res.data;
      let len = rs.length
      if(len>0){
        //给petinfo赋上从后端传来
        self.$refs.petinfo.rs=rs
        self.flag=1;
      }
      else {
        self.flag=0;
      }
    }
  },
  data(){
      self=this
      return{
        flag:1
      };
  },
  components:{
    petform:petform,
    petinfo:petinfo
  }
}
</script>
