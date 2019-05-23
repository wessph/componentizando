import Vue from 'vue'
import Router from 'vue-router'
import FormPage from '@/components/Pages/FormPage'
import Login from '@/components/Global/Login'
import Register from '@/components/Global/Register'
import Dashboard from '@/components/Pages/Dashboard'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!localStorage.getItem('userComponent')) {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FormPage',
      component: FormPage,
      beforeEnter: requireAuth
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
