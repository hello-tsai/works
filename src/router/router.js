import Vue from 'vue'
import VueRouter from 'vue-router'
import xinfeng from '../components/xinfeng/xinfeng.vue'
import shuiping from '../components/shuiping/two.vue'
import pingtu from '../components/HelloWorld.vue'
import game from '../components/2048/2048.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: game },
  { path: '/shuiping', component: shuiping },
  { path: '/pingtu', component: pingtu },
  { path: '/xinfeng', component: xinfeng },
]

const router =  new VueRouter({
  routes,
  mode: 'history',
})

export default router
