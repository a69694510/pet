<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" style="height:800px;">
    <el-menu-item index="1" @click='petInfo'>
      <i class="el-icon-setting"></i>
      &nbsp;&nbsp;&nbsp;&nbsp;宠物信息
    </el-menu-item>
      <!--  disabled -->
    <el-menu-item index="2">
      <i class="el-icon-setting"></i>
      &nbsp;&nbsp;&nbsp;&nbsp;宠物相册
    </el-menu-item>
    <el-submenu index="3">
        <template slot='title'>
          <i class="el-icon-setting">  &nbsp;&nbsp;&nbsp;&nbsp;宠物日至</i>
        </template>
        <el-menu-item index='3-1' @click='writeSay'>
          写说说
        </el-menu-item>
        <el-menu-item index='3-2'>
          看说说
        </el-menu-item>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      宠物朋友圈
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问&nbsp;&nbsp;&nbsp;&nbsp;答&nbsp;&nbsp;&nbsp;&nbsp;
    </el-menu-item>
  </el-menu>


</template>

<script>

export default {

  methods:{
    writeSay:function(){
      //跳
      this.$router.push('/private/writesay')
    },
    petInfo:function(){
      this.$router.push('/private/home')
    }
  }
}
</script>
