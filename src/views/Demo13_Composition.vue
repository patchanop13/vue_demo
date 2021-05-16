<template>
  <div>
        <h1>Option Style</h1>
        <button @click="onClick">{{counter}}</button>
        <hr>

        <Demo1RefAndReactive/>
        <hr>

        <Demo2CounterHook/>
        <hr>

        <Demo3LifeCycleHook/>
  </div>
</template>

<script>
import Demo1RefAndReactive from '../components/compositions/Demo1RefAndReactive.vue'
import Demo2CounterHook from '../components/compositions/Demo2CounterHook.vue'
import Demo3LifeCycleHook from '../components/compositions/Demo3LifeCycleHook.vue'
export default {
  components: { Demo1RefAndReactive, Demo2CounterHook, Demo3LifeCycleHook },
    data() {
        return {
            counter:0
        }
    },
    methods: {
        onClick(){
            this.counter++
        }
    },
}
</script>

<style>

</style>