import { createRouter, createWebHistory,type RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";

interface RouteMeta {
    title: string;
}

const routes: Array<RouteRecordRaw & { meta: RouteMeta }> = [
        {
            path: '',
            name: 'home',
            component: Home,
            meta: { title: 'HOMEME' }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: { title: 'ABOGUS' }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { title: 'LOGIN' }
        },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

router.beforeEach((to, from, next) => {
    document.title = String(to.meta.title) || 'No title for this page'; // Set title or a default fallback
    next(); // Proceed with navigation
  });
export default router;