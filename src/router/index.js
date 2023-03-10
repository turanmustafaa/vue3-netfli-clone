import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/views/Home"
import MyList from "@/components/views/MyList"
import Login from "@/components/views/Login"

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
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;