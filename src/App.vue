<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer @onClock="onClock" title="Copyright 2020 by Patchanop" color="black"/>
    <div class="clock">{{time}}</div>
  </div>
</template>

<script>
import Footer from './components/layouts/Footer.vue'
import Header from './components/layouts/Header.vue'
import moment from 'moment'
import Content from './components/layouts/Content.vue'
export default {
  components: { Header, Footer, Content },
  name:"app",
  methods: {
    onClock(value){
      this.time=moment(value).format('MMM/DD/YYYY hh:mm:ss')
    }
  },
  data(){
    return{
      time:""
    }
  }
}
</script>

<style>
.clock{
  font-size: 12px;
}
</style>