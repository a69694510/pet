<template>
  <form name="petform">
      <table align='center' width='80%'>
          <tr>
            <td><el-input name='nickname' v-model='input' placeholder='宠物昵称'></el-input></td>
            <td rowspan="5">
              <img ref='petphoto' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542048054598&di=abd3c535ad177d43ef06745a24c97ffd&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F4516522608648333f98851fb66fcc5432eee9faa.jpg"  width="120" height="120"/>
              <el-button type="success" @click='chooseImg'>选择宠物照片</el-button>
              <input type="file" name="petimgFile" style="display:none" @change='choosed'/>
              <div ref='chooseLable'>

              </div>
            </td>
          </tr>
          <tr>
            <td align='left'>
              <el-select v-model="pettype" placeholder="请选中宠物类别">
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
                <el-input name='petsort' v-model='petsort' placeholder='宠物品种'>
                </el-input>
            </td>
          </tr>
          <tr>
            <td align='left'>
                <el-radio-group v-model='sex'>
                    <el-radio name='sex' :label='0'>
                        雄
                    </el-radio>
                    <el-radio name='sex' :label='1'>
                        雌
                    </el-radio>
                </el-radio-group>
            </td>
          </tr>
          <tr>
            <td>
              <el-input name='age' v-model='petage' placeholder='宠物年龄'>

              </el-input>
            </td>
          </tr>
          <tr>
            <td colspan="2">
                <el-input type='textarea' name='introduce' :rows='2' placeholder='宠物介绍' v-model='textarea'>

                </el-input>
            </td>
          </tr>
          <tr>
            <td colspan="2" align='center'>
                <!-- 这里放一个隐藏 -->
                <input type="hidden" name="petimg" />
                <!-- 再放一个隐藏 -->
                <input type="hidden" name="pid"/>
                <!--  在加个隐藏，是切换种类的-->
                <input type="hidden" name="pettype" />
                <el-button type='success' @click='subpetInfo'>
                  修改
                </el-button>
            </td>
          </tr>
      </table>
  </form>
</template>

<script>
import {subpetInfo} from '../../vuex/actions/petaction'
let pet;
let self;
export default {
  data () {
    self=this
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
        sex:0,
        petsort:'',
        petage:0,
        pettype:''
    }
  },
  methods:{
    chooseImg:function (){
      petform.petimgFile.click();
    },
    choosed:function(){
      this.$refs.chooseLable.innerHTML=petform.petimgFile.value;
      petform.petimg.value=petform.petimgFile.value;
    },
    subpetInfo:function(){
        if(!isNaN(parseInt(this.pettype))){
          petform.pettype.value=this.pettype;
        }
        updpetInfo(petform,this);
    },
    setInfo:function(peta){
      //先把petinfo存一个内存里面，然后加载完后在调用,mounted
      pet = peta;
      self.setFormInfo(pet)
    },
    setFormInfo:function(pet){
      //因为已经加载一次，所以petform是有值的
      if(petform){
        petform.pid.value=pet.id
        petform.nickname.value = pet.nickname;
        self.$refs.petphoto.src='api'+pet.petimg;
        petform.petimg.value = pet.petimg;
        // petform.petimg.value = pet.petimg;
        self.pettype=self.options[pet.pettype].label
        petform.pettype.value=pet.pettype
        petform.petsort.value=pet.petsort

        self.sex=pet.sex
        petform.age.value=pet.age
        petform.introduce.value=pet.introduce
      }
    }
  },
  //上面的petform是组件代码执行完了才会生效，所以要mounted加载完后以后传值,mounted只加载一次
  mounted(){
    self.setFormInfo(pet)
  }
}
</script>
