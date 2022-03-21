import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../components/auth/dashboard';
import Home from '../components/home';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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