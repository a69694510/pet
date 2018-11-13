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
    <el-col :span='16' >
      <form name="petform">
          <table align='center' width='80%'>
              <tr>
                <td><el-input name='petnickname' v-model='input' placeholder='宠物昵称'></el-input></td>

                <td rowspan="5">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542048054598&di=abd3c535ad177d43ef06745a24c97ffd&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F4516522608648333f98851fb66fcc5432eee9faa.jpg" width="300" height="200"/>
                  <el-button type="success" @click='chooseImg'>选择宠物照片</el-button>
                  <input type="file" name="petimg" style="display:none" @change='choosed'/>
                  <div ref='chooseLable'>

                  </div>
                </td>
              </tr>
              <tr>
                <td align='left'>
                  <el-select name='pettype' v-model="value" placeholder="请选中宠物类别">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td>
                    <el-input name='sort' v-model='input' placeholder='宠物品种'>
                    </el-input>
                </td>
              </tr>
              <tr>
                <td align='left'>
                    <el-radio-group v-model='sex'>
                        <el-radio :label='0'>
                            雄
                        </el-radio>
                        <el-radio :label='1'>
                            雌
                        </el-radio>
                    </el-radio-group>
                </td>
              </tr>
              <tr>
                <td>
                  <el-input name='age' v-model='input' placeholder='宠物年龄'>

                  </el-input>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                    <el-input type='textarea' name='intradu' :rows='2' placeholder='宠物介绍' v-model='textarea'>

                    </el-input>
                </td>
              </tr>
              <tr>
                <td colspan="2" align='center'>
                    <el-button type='success' @click='subpetInfo'>
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
// import axios from 'axios'
import {httpGet} from '../../common/httpbean'
import {subpetInfo} from '../../vuex/actions/petaction'
export default {
  data () {
    return {
        options: [{
          value: '0',
          label: '狗'
        }, {
          value: '1',
          label: '猫'
        }, {
          value: '2',
          label: '鸟'
        }, {
          value: '3',
          label: '仓鼠'
        }, {
          value: '4',
          label: '鱼'
        }],
        value: '',
        sex:0
    }
  },
  methods:{
    chooseImg:function (){
      petform.petimg.click();
    },
    choosed:function(){
      this.$refs.chooseLable.innerHTML=petform.petimg.value
    },
    subpetInfo:function(){
        subpetInfo(petform);
    }
  },
  //当这个组件，被创建，并加载完成后，就执行请求，去拿宠物信息
  mounted(){
    function cf(res){
      alert(res.data)
    }
    httpGet('user/mypet',cf)
  }
}
</script>
