<template>
    <div>
        <h2>{{firstname}}</h2>
        <h2>{{lastname}}</h2>
        <h2>{{fullname}}</h2>
        <h1 styles="background-color:gray">
            Random No from computed property: {{getrandomno}}
        </h1>
        <h1 styles="background-color:gray">
            Random No from computed property: {{getrandomno}}
        </h1>
        <h1 styles="background-color:gray">
            Random No from computed property: {{getrandomno}}
        </h1>
        <h1>Random No from computed method: {{getrandomno1()}}</h1>
        <h1>Random No from computed method: {{getrandomno1()}}</h1>
    </div>
</template>

<script>
export default {
    name:"Demo4",
    methods:{
        getrandomno1:function(){
            return Math.random()
        }
    },
    data() {
        return {
            firstname:"Patchanop",
            lastname:"Lertprakaisang"
        }
    },
    computed:{
        fullname(){
            return this.firstname+" "+this.lastname
        },
        getrandomno:function(){
            return Math.random()
        }
    }
}
</script>