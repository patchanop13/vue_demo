<template>
  <div id="demo1">
    <h1>Demo1 : v-model</h1>
    <input type="text" v-model="message" placeholder="Enter your message"/>
    <div>{{message}}</div>
    <button @click="message=''">Reset</button>
  </div>
</template>

<script>
export default {
    name:'demo1',
    data() {
    return {
      message:""
    }
  },
}
</script>

<style>

</style>