<template>
  <el-dialog title="info" :visible.sync='dialogVisible' size='smail'>
    <!-- dynamic component -->
    <component :is='currentView'></component>
    <!--  -->
    <span slot='footer' class="dialog-footer">
      <el-button @click="dialogVisible = false">cancel</el-button>
      <el-button type='primary' @click="dialogVisible = false">confirm</el-button>
    </span>
  </el-dialog>
</template>
<script type="text/javascript">

export default{
  data(){
    return{
      dialogVisible:false,
      currentView:null
    };
  },
  methods:{
    showDiaLo(vnode){
      // if show
      this.currentView = vnode
      this.dialogVisible=true
    }
  }
};

</script>
