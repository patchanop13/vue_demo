<template>
    <div app="demo2">
        <h1>Event and Method</h1>
        <button v-on:click="clickMe">ClickMe</button>
        <button v-on:click="clickMe2('Welcome to VueJs')">ClickMe2</button>
        <button @click="clickMe2('Welcome to CodeMobiles')">ClickMe2</button>
        <h3>{{getTimestamp()}}</h3>
    </div>
</template>

<script>
export default {
    name:"Demo2",
    mounted() {
        this.initial()
    },
    methods: {
        initial(){
            console.log("Initialization")
        },
        clickMe(){
            alert("Hi")
        },
        clickMe2(message){
            alert(message)
        },
        getTimestamp(){
            return Date()
        }
    },
}
</script>

<style>

</style>