import Vue from 'vue'
import Router from 'vue-router'

//components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pagination from '@/components/Pagination'
import Login from '@/components/Login'

//pages
import Index from '@/pages/Index'

Vue.use(Router);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Pagination', Pagination);

export default new Router({
   mode: 'history',//去掉链接#
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      components: {
        default: Index,
        header: Header,
      },
    },
  ]
})
