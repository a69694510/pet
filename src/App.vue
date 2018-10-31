<template>
  <div id="app" >
    <headBar></headBar>
    <router-view/>
    <diaLo ref='diaLol'>1</diaLo>
  </div>
</template>

<script>
import HeadBar from './components/HeadBar'
import DiaLo from './components/DiaLo'
//this default ==$parent
export default {
  name:'app',
  components:{
    headBar:HeadBar,
    diaLo:DiaLo
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
