import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Classification from '../components/classification/Classification.vue'
import Home from '../components/home/Home.vue'
import Knowledge from '../components/knowledge/Knowledge.vue'
import  Person from '../components/person/Person.vue'
import Shop from  '../components/shop/Shop.vue'
import Main from '../components/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/main',
      component: Main,
      children:[
        {
          path:'/main/classification',
          component:Classification,
        },
        {
          path:'/main/home',
          component:Home,
        },
        {
          path:'/main/knowledge',
          component:Knowledge,
        },
        {
          path:'/main/person',
          component:Person,
        },
        {
          path:'/main/shop',
          component:Shop,
        },
        {
          path:'',
          component:Home,
        },
      ]
    }
  ]
})
