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
        title: '首页',
        requestAuth: false,
    }
  },
  {
    path: '/pk',
    name: 'pk_index',
    component: PkIndexView,
    meta: {
        title: 'PK对战',
        requestAuth: true,
    }
  },
  {
    path: '/record',
    name: 'record_index',
    component: RecordIndexView,
    meta: {
        title: '对局记录',
        requestAuth: true,
    }
  },
  {
    path: '/ranklist',
    name: 'ranklist_index',
    component: RanklistIndexView,
    meta: {
        title: '排行榜',
        requestAuth: true,
    }
  },
  {
    path: '/user/bot',
    name: 'user_bot_index',
    component: UserBotIndexView,
    meta: {
        title: '我的Bot',
        requestAuth: true,
    }
  },
  {
    path: '/user/account/profile',
    name: 'user_account_profile',
    component: UserAccountProfileView,
    meta: {
        title: '个人中心',
        requestAuth: true,
    }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    meta: {
        title: '404',
        requestAuth: false,
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
  {
    path: '/user/account/login',
    name: 'user_account_login',
    component: UserAccountLoginView,
    meta: {
        title: '登录',
        requestAuth: false,
    }
  },
  {
    path: '/user/account/register',
    name: 'user_account_register',
    component: UserAccountRegisterView,
    meta: {
        title: '注册',
        requestAuth: false,
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    // 路由发生变化修改页面title
    if (to.meta.title) {
        document.title = to.meta.title
    }

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
