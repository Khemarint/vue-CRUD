<template>
  <img src="../assets/logo.png" alt="logo" class="logo"/>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="   Username" />
    <input type="text" placeholder="   Email" />
    <input type="password" placeholder="   Password" />
    <button>Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid  #ffdb70;
  ;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid #ffdb70;
  background-color:  #ffdb70;
}
</style>
