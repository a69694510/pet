<template>
  <el-row>
    <el-col :span='2'>
      &nbsp;
    </el-col>
    <el-col :span='4' style="background:yellow">
      <navmenu />
    </el-col>
    <el-col :span='16'>
      <form name="sayform">
          <table align='center' width='80%'>
              <tr>
                <td>
                    <el-input type='textarea' name='content' :rows='2' placeholder='写说说' v-model='textarea'>

                    </el-input>
                </td>
              </tr>
              <tr>
                <td>
                  <el-button type="success" @click='chooseImg'>选择宠物照片</el-button>
                  <input v-for='petimg in petimgs' type="file" name="petimg"  @change='choosed' style="display:none" />
                  <br/>
                  <img v-for='petphoto in petphotos' :src="petphoto.src" width="90" height="90" style="margin-left:5px">
                  <!-- <div ref='chooseLable'>

                  </div> -->
                </td>
              </tr>
              <tr>
                <td align='center'>
                    <el-button type='success' @click='pubSay'>
                      提交
                    </el-button>
                </td>
              </tr>
          </table>
      </form>
    </el-col>
    <el-col :span='2'>
      &nbsp;
    </el-col>
  </el-row>
</template>

<script>
import navmenu from '../navmenu'
import {subSay} from '../../../vuex/actions/Sayaction'
let petimgi=0
export default {
  data(){
    return {
      petimgs:[{},{}],
      petphotos:[]
    }
  },
  components:{
    navmenu:navmenu
  },
  methods:{
    chooseImg:function (){
      // sayform.petimg.click();
      this.petimgs.push({});
      sayform.petimg[petimgi].click();
      petimgi++;
    },
    choosed:function(evt){
      let file = evt.currentTarget;
      // this.$refs.chooseLable.innerHTML+=file.value+'<br/>';
      // 非ie
      let fileSrc= window.URL.createObjectURL(file.files[0])
      this.petphotos.push({src:fileSrc})

    },
    pubSay:function(){
      subSay(sayform,this)
    }
  }
}
</script>

<style lang="css">
</style>
