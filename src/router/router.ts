import { createRouter, createWebHistory,type RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import UserHome from "@/views/user-pages/UserHome.vue";
import UserProfile from "@/views/user-pages/UserProfile.vue";
import User from "@/views/user-pages/User.vue";

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
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { title: 'REGISTER' }
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            meta: { title: 'user' },
            children: [
                { path: '', name: 'user-home', component: UserHome, props: true},
                {
                path: 'profile',
                name: 'profile',
                component: UserProfile,
                meta: { title: 'User profile' }
                }
            ],
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('token');
                if(!token) {
                    next({name: 'home'});
                }
                else {
                    next();
                }
            }
        },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    document.title = String(to.meta.title) || 'No title for this page'; // Set title or a default fallback
    next(); // Proceed with navigation
  });
export default router;