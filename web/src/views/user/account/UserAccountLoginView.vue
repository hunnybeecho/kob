<template>
  <div class="homeBox"
       v-if="!$store.state.user.loading">
    <div class="container">
      <div class="login-box">
        <div class="apple-btn login-apple">
          <li class="red-btn"></li>
          <li class="yellow-btn"></li>
          <li class="green-btn"></li>
        </div>
        <div class="title">账密登录</div>
        <form @submit.prevent="login">
          <div class="input">
            <input v-model="username"
                   type="text"
                   id="login-user"
                   placeholder="请输入用户名">
          </div>
          <div class="input">
            <input v-model="password"
                   type="password"
                   id="login-password"
                   placeholder="请输入密码">
            <div class="error-message">{{ error_message }}</div>
          </div>
          <button type="submit"
                  class="btn login-btn">登录</button>
        </form>
        <div class="change-box login-change">
          <div class="change-btn toSign"
               @click="GotoRegister">
            <span>注册</span>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

//import ContentBase from '@/components/ContentBase'
//import LoginContent from '@/components/LoginContent.vue'

import { ref } from 'vue';
import { useStore } from 'vuex'; //全局变量
import router from '@/router';
//import { useRoute } from 'vue-router';



export default {
  name: 'LoginView',
  components: {

  },

  setup() {
    const store = useStore();
    //const route = useRoute();
    let username = ref('');
    let password = ref('');
    let error_message = ref('');
    //let route_name = computed(() => route.name);

    const login = () => {
      error_message.value = "";
      //调用user.js里的actions里的函数要用dispatch
      store.dispatch("login", {
        username: username.value,
        password: password.value,
        success() {
          store.dispatch("getInfo", {
            success() {
              router.push({ name: "home" });
            },
            error() {
              error_message.value = "服务器异常!";
            }
          });
        },
        error() {
          error_message.value = "用户名或密码错误!";
        }
      });
    };

    const GotoRegister = () => {
      router.push({
        name: "user_account_register",
      });
    }


    return {
      username,
      password,
      error_message,
      // route_name,
      login,
      GotoRegister,
    }
  }


}


</script>



<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.homeBox {
  /*! autoprefixer: off */
  /*  background: -webkit-gradient(linear,
      100% 0,
      0 0,
      from(#1e2a78),
#485296
#28389e
#14248b,#fbc531
#1d428a,#fdb927
      to(#FF2E4c));*/
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50px;
}

.container {
  position: absolute;
  height: 350px;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.9);
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(17, 39, 59, 0.8);
  border: 1px solid rgba(17, 39, 59, 1);
  box-sizing: border-box;
}

.container:hover .title {
  font-size: 20px;
  /* transform: translate(0,-30%); */
}

.container:hover input {
  transform: translate(0, -30%);
}

.container:hover .btn {
  height: 30px;
  width: 90px;
  transform: translate(0, -30%);
  font-size: 12px;
}

.container:hover .change-box {
  height: 200px;
}

.container:hover .change-btn {
  display: block;
}

.title {
  margin-top: 10px;
  position: relative;
  height: 40px;
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  transition: 0.4s;
}

.login-box .title {
  color: white;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.9);
}

.input {
  width: 400px;
  height: 45px;
  position: relative;
  margin: 40px auto;
  /* border-radius: 45px;
    overflow: hidden; */
}

input {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  /* box-sizing: border-box; */
  padding-left: 15px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 45px;
  transition: 0.4s;
}

.login-box input:focus {
  box-shadow: 0 0 10px rgba(1, 1, 1, 0.8);
}

.btn {
  height: 50px;
  width: 160px;
  position: relative;
  margin: -10px auto;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
}

.change-box {
  position: absolute;
  height: 0px;
  width: 100%;
  clip-path: polygon(100% 50%, 50% 100%, 100% 100%);
  bottom: 0px;
  transition: 0.4s;
}

.change-btn {
  position: absolute;
  bottom: 30px;
  right: 40px;
  font-size: 20px;
  display: none;
  font-weight: 500;
}

.change-btn:hover {
  text-shadow: 0px 0px 3px rgba(200, 200, 200, 0.8);
  cursor: pointer;
}

.login-box input {
  caret-color: white;
  color: rgba(255, 255, 255, 0.8);
}

.login-btn:hover {
  color: white;
  background-color: #57606f;
  box-shadow: rgba(0, 0, 0, 0.1);
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}

.login-change {
  background-color: rgba(255, 255, 255, 0.8);
}

.animate_login {
  transform: rotate(-90deg);
}

.login-box {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(17, 39, 59, 0.8);
  transition: 0.4s;
  z-index: 1;
  transform-origin: 0 100%;
}

.error-message {
  font-weight: bold;
  color: brown;
}

/* Mac 按钮样式及特效 */
.apple-btn {
  position: absolute;
  height: 15px;
  width: 65px;
  top: 3px;
}

.apple-btn li {
  list-style: none;
  position: relative;
  height: 15px;
  width: 15px;
  border-radius: 15px;
  opacity: 0;
}

.login-apple li {
  left: 5px;
  float: left;
}

.sign-apple li {
  right: 5px;
  float: right;
}

.sign-apple {
  right: 5px;
}

li:nth-child(2) {
  margin: 0px 2px;
}

.red-btn {
  background-color: red;
  transition: 0.3s;
  transform: translate(0, -50%);
}

.yellow-btn {
  background-color: orange;
  /* transition-delay: .2s; */
  transition: 0.6s;
  transform: translate(0, -50%);
}

.green-btn {
  background-color: rgb(15, 136, 15);
  /* transition-delay: .3s; */
  transition: 0.9s;
  transform: translate(0, -50%);
}

.container:hover .red-btn {
  opacity: 1;
  transform: translate(0, 0);
}

.container:hover .yellow-btn {
  opacity: 1;
  transform: translate(0, 0);
}

.container:hover .green-btn {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
