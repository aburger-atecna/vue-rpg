import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../components/auth/dashboard';
import Home from '../components/home';
import Login from '../components/auth/login';
import Register from '../components/auth/register';

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
    path: '/register',
    name: 'Register',
    component: Register
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