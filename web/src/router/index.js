import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView'
import PkIndexView from '@/views/pk/PkIndexView'
import RecordIndexView from '@/views/record/RecordIndexView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView'
import UserAccountProfileView from '@/views/user/account/UserAccountProfileView'
import NotFound from '@/views/error/NotFound'
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '@/views/user/account/UserAccountRegisterView'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: "/home",
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
        requestAuth: false,
    }
  },
  {
    path: '/pk',
    name: 'pk_index',
    component: PkIndexView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/record',
    name: 'record_index',
    component: RecordIndexView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/ranklist',
    name: 'ranklist_index',
    component: RanklistIndexView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/user/bot',
    name: 'user_bot_index',
    component: UserBotIndexView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/user/account/profile',
    name: 'user_account_profile',
    component: UserAccountProfileView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    meta: {
        requestAuth: false,
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
  {
    path: '/user/account/login',
    name: 'user_account_login',
    component: UserAccountLoginView,
    meta: {
        requestAuth: false,
    }
  },
  {
    path: '/user/account/register',
    name: 'user_account_register',
    component: UserAccountRegisterView,
    meta: {
        requestAuth: false,
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    let flag = 1;
    const jwt_token = localStorage.getItem('jwt_token');

    if (jwt_token) {
        store.commit("updateToken", jwt_token);
        store.dispatch("getInfo", {
            success() {
            },
            error() {
                // alert("请重新登录！");
                router.push({ name: "user_account_login" });
                store.dispatch("logout");
            }
        })
    } else {
        flag = 2;
    }

    if (to.meta.requestAuth && !store.state.user.is_login) {
        if (flag === 1) {
            next();
        } else {
            // alert("请先登录！");
            next({ name: "user_account_login" });
        }
    } else {
        next();
    }
})

export default router
