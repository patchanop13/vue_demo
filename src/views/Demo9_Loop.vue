<template>
    <div id="demo9">
        <ul>
            <li v-for="({title,price},index) in mCourses" :key="index">{{title}} Price {{price}}</li>
        </ul>
        <hr/>
        <input type="text" placeholder="Title" v-model="course.title"/><br>
        <input type="text" placeholder="Price" v-model="course.price"/><br>
        <button @click="addCourse">Submit</button>
        <ul>
            <li v-for="(course,index) in dynamicCourses" :key="index">{{course.title}}, Price {{course.price}}<button @click="removeCourse(index)">X</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Demo9",
    methods: {
        addCourse(){
            this.dynamicCourses.push(this.course)
            this.course={title:"",price:0}
        },
        removeCourse(index){
            this.dynamicCourses.splice(index,1)
        }
    },
    data() {
        return {
            course:{title:"",price:0},
            dynamicCourses:[],
            mCourses:[
                {title:'iOS',price:11},
                {title:'Android',price:12},
                {title:'Flutter',price:13},
            ]
        }
    },
}
</script>

<style>

</style>