<template>
    <div id="demo6">
        <form v-on:submit="submit">
            <div>
                <label for="first_name">Firstname</label>
                <input type="text" name="first_name" v-model.trim="applicant.first_name"/>
            </div>
            <div>
                <label for="last_name">Firstname</label>
                <input type="text" name="last_name" v-model.lazy="applicant.last_name"/>
            </div>
            <div>
                <label for="sex">Male</label>
                <input type="radio" name="sex" value="male" v-model="applicant.sex"/>
                <label for="sex">Female</label>
                <input type="radio" name="sex" value="female" v-model="applicant.sex"/>
            </div>
            <div>
                <label for="age">Age: </label>
                <input type="number" v-model.number="applicant.age"/>
            </div>
            <div>
                <select name="courses" v-model="applicant.course">
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vuejs">Vue</option>
                </select>
            </div>
            <button type="button" @click.exact="clear" @click.alt="useDefault">Clear</button>
            <button type="submit">Submit</button>
        </form>
        <div style="margin-top:16px;color:red">#Spy {{JSON.stringify(applicant)}}</div>
    </div>
</template>

<script>
export default {
    name:"Demo6",
    data() {
        return {
            applicant:{
                first_name:"",
                last_name:"",
                sex:"male",
                course:"react",
                age:0
            }
        }
    },
    methods: {
        clear(){
            this.applicant={
                first_name:"",
                last_name:"",
                sex:"male",
                course:"react",
                age:0
            }
        },
        submit(event){
            event.preventDefault();
            alert(JSON.stringify(this.applicant))
        },
        useDefault(){
            this.applicant={
                first_name:"UNKNOWN",
                last_name:"UNKNOWN",
                sex:"male",
                course:"react",
                age:0
            }
        }
    },
}
</script>

<style>

</style>