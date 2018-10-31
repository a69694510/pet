<template>
  <el-dialog title="info" :visible.sync='dialogVisible' size='tiny'>
    <span>this is info</span>
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
        dialogVisible:false
      };
    },
    methods:{
      showDiaLo(){
        this.dialogVisible=true
      }
    }
  };

</script>
