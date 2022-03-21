import { createRouter, createWebHashHistory } from 'vue-router'
import CreateHero from '../components/hero/createHero.vue';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import Dashboard from '../components/auth/dashboard';
import Home from '../components/home';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/createHero',
    component: CreateHero
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router