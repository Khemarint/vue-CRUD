<template>
    <div>
      <HeaderPage/>
      <h1>Hello {{name}}, Welcome on Home Page</h1>
      <table border="1" class="table">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Contact</td>
          <td>Address</td>
          <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.address }}</td>
          <td>
            <router-link :to="'/update-page/' + item.id">Update</router-link>
            <button @click="deleteRestaurant(item.id)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import HeaderPage from './HeaderPage.vue';
  import axios from 'axios';
  
  export default {
    name: 'HomePage',  
    data() {
      return {
        name: '',
        restaurants: [],
      }
    },
    components: {
      HeaderPage
    },
    methods: {
      async deleteRestaurant(id) {
        try {
          let result = await axios.delete("http://localhost:3000/restaurant/" + id);
          if (result.status === 200) {
            this.loadData();
          }
        } catch (error) {
          console.error("Error deleting restaurant:", error);
        }
      },
      async loadData() {
        try {
          let user = localStorage.getItem('user-info');
          if (!user) {
            this.$router.push({ name: 'SignUp' });
          } else {
            this.name = JSON.parse(user).name;
          }
          let result = await axios.get("http://localhost:3000/restaurant");
          this.restaurants = result.data;
        } catch (error) {
          console.error("Error loading data:", error);
        }
      }
    },
    async mounted() {
      await this.loadData();
    }
  }
  </script>
  
  <style>
  td {
    width: 160px;
    height: 40px;
  }
  .table {
    margin: auto;
  }
  </style>
  