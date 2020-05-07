import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'
import secondRouter from '@/views/login/secondRouter'
import index from '@/views/login/index'
/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: index, hidden: true },
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }


]

export default new Router({
  routes: constantRouterMap
});
export const asyncRouterMap = [
  {  path: '/',
     component:secondRouter
  }
   
 ];
