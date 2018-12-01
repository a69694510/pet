<template>
  <el-row>
    <el-col :span='2'>
      &nbsp;
    </el-col>
    <el-col :span='4' style="background:yellow">
        <navmenu/>
    </el-col>
    <el-col :span='16'>
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
// import {subpetInfo} from '../../vuex/actions/petaction'
import navmenu from './navmenu'
import petform from './petform'
import petinfo from './petInfo'
export default {
  //当这个组件，被创建，并加载完成后，就执行请求，去拿宠物信息,也就是在查完数据库以后在进行操作
  mounted(){
    httpGet('/pet/mypetinfo',cf)
    function cf(res){
      let arr = res.data;
      let count = arr[0];
      let rs = arr[1];
      // let len = rs.length;
      if(count>0){
        //给petinfo赋上从后端传来
        self.$refs.petinfo.count=count
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
    petinfo:petinfo,
    navmenu:navmenu
  },
  methods:{
    writeSay:function(){
      //跳
      self.$router.push('/private/writesay')
    }
  }
}
</script>
