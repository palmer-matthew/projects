import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue';
import Chat from '../views/Chat.vue';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
