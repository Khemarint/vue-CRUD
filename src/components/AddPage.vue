<template>
        <HeaderPage/>
        <h1>Hello {{name}}, Welcome on Add Restaurant Page</h1>
        <form class="add">
            <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name">
            <input type="text" name="address" placeholder="Enter Address" v-model="Restaurant.address">
            <input type="text" name="contact" placeholder="Enter Contact" v-model="Restaurant.contact">
            <button type="button" v-on:click="addRestaurant" >Add new Restaurant</button>
        </form>
</template>
    
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue'
    export default {
        name:'AddPage',
        data(){
            return {
                name:'',
                Restaurant: {
                    name:'',
                    address:'',
                    contact:''
                }
            }
        },  
        components:{
            HeaderPage
        },
        methods:{
            async addRestaurant()
            {
                console.warn(this.Restaurant)
                const result = axios.post("http://localhost:3000/restaurant",{
                    name:this.Restaurant.name,
                    address:this.Restaurant.address,
                    contact:this.Restaurant.contact,
                });
                if(result.status==201)
                {  
                    this.$router.push({name:'Home'})
                }
                console.warn("result",result)
            }
        },
        mounted()
        {
            let user = localStorage.getItem('user-info');
            this.name= JSON.parse(user).name;
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
        }
    }
</script>
    
<style>
    
</style>