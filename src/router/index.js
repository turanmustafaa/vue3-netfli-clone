import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/views/Home"
import MyList from "@/components/views/MyList"
import Login from "@/components/views/Login"
import Register from "@/components/views/Register"

const routes = [
    {
        path : "/",
        component : Home
    },
    {
        path : "/mylist",
        component : MyList
    },
    {
        path : "/login",
        component : Login
    },
    {
        path : "/register",
        component : Register
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;