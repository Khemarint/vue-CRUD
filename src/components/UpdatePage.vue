<template>
    <div>
      <HeaderPage />
      <h1>Hello {{ name }}, Welcome to the Update Restaurant Page</h1>
      <form class="add">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          v-model="Restaurant.name"
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          v-model="Restaurant.address"
        />
        <input
          type="text"
          name="contact"
          placeholder="Enter Contact"
          v-model="Restaurant.contact"
        />
        <button type="button" @click="updateRestaurant">
          Update Restaurant
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import HeaderPage from "./HeaderPage.vue";
  
  export default {
    name: "UpdatePage",
    data() {
      return {
        Restaurant: {
          name: "",
          address: "",
          contact: "",
        },
        name: "",
      };
    },
    components: {
      HeaderPage,
    },
    methods: {
      async updateRestaurant() {
        try {
          console.warn(this.Restaurant);
          const response = await axios.put("http://localhost:3000/restaurant", {
            name: this.Restaurant.name,
            address: this.Restaurant.address,
            contact: this.Restaurant.contact,
          });
          if (response.status === 200) {
            this.$router.push({ name: "Home" }); // Make sure "Home" is a valid route name
          } else {
            console.error("Failed to update restaurant");
          }
        } catch (error) {
          console.error("Error updating restaurant:", error);
        }
      },
    },
    async mounted() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "SignUp" }); // Make sure "SignUp" is a valid route name
      } else {
        this.name = JSON.parse(user).name;
      }
      const result = await axios.get('http://localhost:3000/restaurant')
    console.warn(result.data)
    this.Restaurant = result.data
    },

    
  };
  </script>
  
  <style></style>
  