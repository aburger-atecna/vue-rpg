import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../components/auth/dashboard';
import Home from '../components/home';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import createHero from '../components/hero/createHero';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/create',
    name: 'create',
    component: createHero
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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