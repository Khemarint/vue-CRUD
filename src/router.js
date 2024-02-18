import Home from "./components/Homepage.vue";
import SignUp from "./components/Signup.vue";
import Login from "./components/Loginpage.vue";
import Add from "./components/AddPage.vue";
import Update from "./components/UpdatePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/",
    },

    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },  
    {
        name: "Login",
        component: Login,
        path: "/log-in",
    },  
    {
        name: "Add",
        component: Add,
        path: "/add-page",
    },  
    {
        name: "Update",
        component: Update,
        path: "/update-page/:id",
    },  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;