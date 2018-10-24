import VueRouter from "vue-router"
import Vue from 'vue'

import Home from '../pages/Home/Home.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Fenlei from '../pages/Fenlei/Fenlei.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Search from '../pages/Search/search.vue'
import PersonnelCenter from '../pages/PersonnelCenter/PersonnelCenter.vue'

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta: {
        ishowHeader:false,// 标识HeaderGuide组件是否显示
        ishowFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/shiwu',
      component:Shiwu,
      meta: {
        ishowHeader:true,// 标识HeaderGuide组件是否显示
        ishowFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/fenlei',
      component:Fenlei,
      meta: {
        ishowHeader:false,// 标识HeaderGuide组件是否显示
        ishowFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/shopcar',
      component:ShopCar,
      meta: {
        ishowHeader:false,// 标识HeaderGuide组件是否显示
        ishowFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/personnelcenter',
      component:PersonnelCenter,
      meta: {
        ishowHeader:true,// 标识HeaderGuide组件是否显示
        ishowFooter: false  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/a',
      component:A
    },
    {
      path:'/b',
      component:B,
      children:[
        {
          path:'/b/b1',
          component:B1
        }
      ]
    }
  ]
})
