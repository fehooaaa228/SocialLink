import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    component: LoginView
  },
  {
    path: '/reg',
    component: RegisterView
  },
  {
    path: '/users',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
