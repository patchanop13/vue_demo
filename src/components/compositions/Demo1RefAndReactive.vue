<template>
  <div>
        <h1>Demo1RefAndReactive</h1>
        <button @click="onClick">Ref: {{counter}}</button>
        <button @click="onClickRt">Reactive: {{counterRt.counter}}</button>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
    setup(){
        const counter = ref(0)
        function onClick(){
            counter.value++
        }

        const counterRt = reactive({counter:0})
        function onClickRt(){
            counterRt.counter++
        }
        return {counter,onClick,counterRt,onClickRt}
    }
}
</script>

<style>

</style>