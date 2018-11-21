<template lang="html">
  <div class="">

  <el-table :data='rs' style="width:100%">
      <el-table-column label='宠物照片'>
          <!-- 要显示属性，必须写在template 然后跟一个scope属性，是作用域的意思-->
          <template slot-scope='scope'>
            <!--想要动态的熟悉，就需要在src前面添加一个:  -->
            <img :src='"api"+scope.row.petimg' width="90" height="90"/>
            <!--  @click='handleEdit(scope.$index,scope.row)' -->
              <!-- <el-button size='small' @click='handleEdit(scope.$index,scope.row)'>
                  编辑
              </el-button> -->

              <!-- <el-button size='small' type='danger' @click='hadnleDelete(scope.index,scope.row)'>
                删除
              </el-button> -->
          </template>
      </el-table-column>
      <el-table-column prop='nickname' label='宠物信息'>

      </el-table-column>
      <el-table-column label='操作'>
          <template slot-scope='scope'>
              <el-button type='primary' @click='updPetInfo(scope.row)'>
                    修改
              </el-button>
              <el-button type='primary'>
                    删除
              </el-button>
              <el-button type='primary'>
                    添加
              </el-button>
          </template>
      </el-table-column>
  </el-table>
  <el-button type='primary' @click='add'>增加</el-button>
  </div>
</template>
<script>
import petform from './petform'

let self = null;
export default {
 data(){
   let self = this;
   return{
     rs:[]
   }
 },
 methods:{
   updPetInfo:function(petinfo){
     alert(petinfo.nickname)
   },
   add:function(){
     // $root就是根路径 找到的是main.js里面的new Vue 可以用$children[0]找到app.js,然后在通过ref
     this.$root.$children[0].$refs.diaLol.showDiaLo(petform)
   }
 }
}
</script>

<style lang="css">

</style>
