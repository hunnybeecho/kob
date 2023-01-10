import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView'
import PkIndexView from '@/views/pk/PkIndexView'
import RecordIndexView from '@/views/record/RecordIndexView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView'
import UserProfileIndexView from '@/views/user/profile/UserProfileIndexView'
import NotFound from '@/views/error/NotFound'
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '@/views/user/account/UserAccountRegisterView'

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pk',
    name: 'pk_index',
    component: PkIndexView
  },
  {
    path: '/record',
    name: 'record_index',
    component: RecordIndexView
  },
  {
    path: '/ranklist',
    name: 'ranklist_index',
    component: RanklistIndexView
  },
  {
    path: '/user/bot',
    name: 'user_bot_index',
    component: UserBotIndexView
  },
  {
    path: '/user/profile',
    name: 'user_profile_index',
    component: UserProfileIndexView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
  {
    path: '/user/account/login',
    name: 'user_account_login',
    component: UserAccountLoginView
  },
  {
    path: '/user/account/register',
    name: 'user_account_register',
    component: UserAccountRegisterView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
