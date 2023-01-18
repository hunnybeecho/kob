<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand"
                   style="margin-right: 50px; font-size: 24px"
                   :to="{name: 'default'}">蛇蛇大作战</router-link>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse"
           id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"
              style="margin-right: 50px">
            <router-link class="nav-link"
                         active-class="active"
                         :to="{name: 'home'}">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-house"
                   viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Z" />
              </svg> 首页
            </router-link>
          </li>
          <li class="nav-item"
              style=" margin-right: 50px">
            <router-link class="nav-link"
                         active-class="active"
                         :to="{name: 'pk_index'}">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-joystick"
                   viewBox="0 0 16 16">
                <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
                <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
              </svg> PK对战
            </router-link>
          </li>
          <li class="nav-item"
              style=" margin-right: 50px">
            <router-link class="nav-link"
                         active-class="active"
                         :to="{name: 'record_index'}">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-card-list"
                   viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg> 对局记录
            </router-link>
          </li>
          <li class="nav-item"
              style=" margin-right: 50px">
            <router-link class="nav-link"
                         active-class="active"
                         :to="{name: 'ranklist_index'}">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-trophy"
                   viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
              </svg> 排行榜
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav"
            v-if="$store.state.user.is_login">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
               href="#"
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false">
              <img :src="$store.state.user.avatar"
                   class="img-fluid">
              {{ $store.state.user.username }}
            </a>
            <ul class="dropdown-menu"
                style="min-width: 50px">
              <li>
                <router-link class="dropdown-item"
                             :to="{name: 'user_bot_index'}">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       class="bi bi-robot"
                       viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                  </svg> 我的Bot
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item"
                             :to="{name: 'user_account_profile'}">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       class="bi bi-person-circle"
                       viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg> 个人中心
                </router-link>
              </li>
              <li><a class="dropdown-item"
                   href="#"
                   @click="logout">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       class="bi bi-box-arrow-right"
                       viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                    <path fill-rule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                  </svg> 退出登录</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav"
            v-else>
          <li class="nav-item">
            <router-link class="nav-link"
                         :to="{ name: 'user_account_login' }"
                         role="button">登录</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
                         :to="{ name: 'user_account_register' }"
                         role="button">注册</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();
    const logout = () => {
      store.dispatch("logout");
    }

    return {
      logout
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
  margin-right: 5px;
  width: 30px;
}
</style>