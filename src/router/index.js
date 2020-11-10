import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '@/views/loginPage.vue';
import login from '@/components/login.vue';
import signUp from '@/components/signUp.vue';
import homePage from '@/views/homePage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login-page',
    name: 'default'
  },
  {
    path: "/home-page/:username",
    name: "home-page",
    component: homePage,
  },
  {
    path: '/login-page',
    redirect: '/login-page/login',
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
