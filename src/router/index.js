import { createRouter, createWebHashHistory } from 'vue-router'
import TWrapper from '../components/t-wrapper.vue'
import TRoulette from '../components/t-roulette.vue'
const routes = [
  {
    path: '/',
    name: 'Wrapper',
    component: TWrapper,
    props: true
  },
  {
  path: '/Roulette',
  name: 'Roulette',
  component: TRoulette,
  props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
