import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView'
import PkIndexView from '@/views/pk/PkIndexView'
import RecordIndexView from '@/views/record/RecordIndexView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView'
import ProfileIndexView from '@/views/user/ProfileIndexView'
import NotFound from '@/views/error/NotFound'

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
    path: '/userbot',
    name: 'userbot_index',
    component: UserBotIndexView
  },
  {
    path: '/profile',
    name: 'profile_index',
    component: ProfileIndexView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
