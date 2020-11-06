import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '@/views/loginPage.vue';
import login from '@/components/login.vue';
import signUp from '@/components/signUp.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login-page',
    name: 'login-page',
    component: loginPage,
    children: [
      {
        path: 'login',
        name: 'login',
        component: login,
      },
      {
        path: 'signup',
        name: 'signup',
        component: signUp,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
