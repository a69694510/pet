<template lang="html">
  <div>
    <el-table :data='rs' style="width:100%">
        <el-table-column label='宠物照片'>
            <!-- 要显示属性，必须写在template 然后跟一个scope属性，是作用域的意思-->
            <template slot-scope='scope'>
              <!--想要动态的熟悉，就需要在src前面添加一个:  -->
              <img :src='"api"+scope.row.petimg' width="90" height="90"/>

            </template>
        </el-table-column>
        <el-table-column prop='nickname' label='宠物信息'>

        </el-table-column>
        <el-table-column type='button' label='操作'>
            <template slot-scope='scope'>
                <el-button type='primary' @click='updPetInfo(scope.row)'>
                      修改
                </el-button>
                <el-button type='primary' @click='delPetInfo(scope.row.id)'>
                      删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <table align='center'>
      <tr>
        <td>
          <!--参数说明 total有多少条数据 current-change 当分页发生改变的时候.-->
            <el-pagination page-size='3' layout='sizes, prev, pager, next' :total='count' @current-change='handleCurrentChange'>

            </el-pagination>
        </td>
      </tr>
    </table>
    <el-button type='primary' @click='add'>增加</el-button>
  </div>
</template>
<script>
  import {httpGet} from '../../common/httpbean'
  import {delPetInfo} from '../../vuex/actions/petaction'
  import petform from './petform'
  import updpetform from './upPefForm'

  let self = null;
  export default {
   data(){
    self = this;
     return{
       count:0,
       rs:[]
     }
   },
   methods:{
     updPetInfo:function(petinfo){
       let dialog =  this.$root.$children[0].$refs.diaLol
       //这一步一定要加载完成.下一步调用才是有效的
       //showDiaLo就是显示方法
       dialog.showDiaLo(updpetform);
       //动态组件有特殊的写法
       //注意这里要写currentView
       //petinfo就是这条记录的值
       dialog.currentView.methods.setInfo(petinfo);
     },
     delPetInfo:function(id){
       if(confirm('确定删除吗')){
          delPetInfo(id,self);
       }
     },
     add:function(){
       // $root就是根路径 找到的是main.js里面的new Vue 可以用$children[0]找到app.js,然后在通过ref

       this.$root.$children[0].$refs.diaLol.showDiaLo(petform)
     },
     //利用这个page页号，向服务端请求，每次点，就会发请求
     handleCurrentChange:function(page){
       function cf(res){
         let arr = res.data;
         let count = arr[0];
         let rs = arr[1];
         if(count>0){
           self.count=count
           self.rs=rs
         }
         else {
            alert('还没填写信息')
         }
       }
       httpGet('/pet/mypetinfo?page='+page,cf)
     }
   }
  }
</script>

<style lang="css">

</style>
