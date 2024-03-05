import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscoverView from '../views/DiscoverView.vue'
import twoColumnTemplate from '@/components/twoColumnTemplate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/discover',
    name: 'discover',
    component: DiscoverView
  }, 
  {
    path: '/template',
    name: 'template',
    component: twoColumnTemplate
  },
  {
    path: '/project/:name',
    name: 'project-name',
    component: twoColumnTemplate,
    //props: ['projectName']
  },

  // {
  //   path: '/project/jacobhogrefe-minnecraft-mod',
  //   name: 'jacob-HOGrefe',
  //   component: some-component,
  // },
  // {
  //   path: '/project/elliedelli-stardew-mod',
  //   name: 'EL-DEL',
  //   component: some-component,
  // },
  // {
  //   path: '/project/elliedelli-this-webside',
  //   name: 'EL-DEL',
  //   component: some-component,
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
