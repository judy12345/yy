import Vue from 'vue'
import VueRouter from 'vue-router'
import one from '../components/one'
import allSelect from '../components/allSelect'
import upload from '../components/upload'
import myReimbursement from '../components/myReimbursement'
import pay from '../components/pay'
import administrators from '../components/administrators'
import buy from '../components/buy'

Vue.use(VueRouter)

  const routes = [

    {
      path: '/',
      name: 'one',
      component: one
    },
    {
    path: '/allSelect',
    name: 'allSelect',
    component: allSelect
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/myReimbursement',
      name: 'myReimbursement',
      component: myReimbursement
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/administrators',
      name: 'administrators',
      component: administrators
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    }
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
