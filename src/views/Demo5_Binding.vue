<template>
    <div id="demo5">
        <img v-bind:src="imageUrl" v-bind:height="height">
        <br>
        <a :href="link">My website</a>
        <div :class="[error,important]">CodeMobiles</div>
        <div :style="isActive?styleObj:''">Binding Style</div>
        <button @click="isActive=!isActive">ToggleActive</button>
    </div>
</template>

<script>
export default {
    name:"Demo5",
    data() {
        return {
            imageUrl:"https://www.codemobiles.com/biz/images/codemobiles_logo.svg?ref=10",
            height:50,
            link:"http://codemobiles.com",
            error:"error_class",
            important:"important",
            styleObj:{
                backgroundColor:"yellow",
                color:"green"
            },
            isActive:false
        }
    },
}
</script>

<style>
.error_class{
    background-color: red;
    color:white
}
.important{
    font-weight: 900;
}
</style>