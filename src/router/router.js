import Vue from 'vue'
import VueRouter from 'vue-router'
import xinfeng from '../components/xinfeng/xinfeng.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo#', component: xinfeng },
]

const router =  new VueRouter({
  routes,
})

export default router
