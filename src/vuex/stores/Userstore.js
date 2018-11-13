import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);   //初始化
let user = new Vuex.Store({
    state:{      //存储空间
      loginbean:null
    },
    mutations:{   //事件相应,修改存储的方法集
      signup:function(state,data){
        // state.signRS =data;
      },
      signin:function(state,data){
        //data.nickname
          //给Store里面的state附上值
          state.loginbean=data;
      }
    }
})
export default user;
