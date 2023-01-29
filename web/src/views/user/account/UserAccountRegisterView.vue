<template>
  <div class="homeBox">
    <div class="container">
      <div class="sign-box">
        <div class="apple-btn sign-apple">
          <li class="red-btn"></li>
          <li class="yellow-btn"></li>
          <li class="green-btn"></li>
        </div>
        <div class="title">用户注册</div>
        <form @submit.prevent="register">
          <div class="input">
            <input v-model="username"
                   type="text"
                   id="sign-user"
                   placeholder="用户名">
          </div>
          <div class="input">
            <input v-model="password"
                   type="password"
                   id="sign-password"
                   placeholder="密码">
          </div>
          <div class="input">
            <input v-model="confirmedPassword"
                   type="password"
                   id="confirmedPassword"
                   placeholder="确认密码">
            <div class="error-message">{{ error_message }}</div>
          </div>
          <button type="submit"
                  class="btn sign-btn">注册</button>
        </form>
        <div class="change-box sign-change">
          <div class="change-btn toLogin"
               @click="GotoLogin">
            <span>登录</span>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

import { ref } from 'vue';
import router from '@/router';
import $ from "jquery"


export default {
  name: 'LoginView',
  components: {

  },

  setup() {
    let username = ref('');
    let password = ref('');
    let confirmedPassword = ref('');
    let error_message = ref('');

    const register = () => {
      $.ajax({
        // url: "http://127.0.0.1:3000/user/account/register",
        url: "https://app4553.acapp.acwing.com.cn/api/user/account/register",
        type: "POST",
        data: {
          username: username.value,
          password: password.value,
          confirmedPassword: confirmedPassword.value,
        },
        success(resp) {
          //console.log(resp);
          if (resp.error_message === "success") {
            router.push({ name: "user_account_login" });
          } else {
            error_message.value = resp.error_message;
          }
        }
      });

    }

    const GotoLogin = () => {
      router.push({
        name: "user_account_login",
      });
    }


    return {
      username,
      password,
      confirmedPassword,
      error_message,
      register,
      GotoLogin,
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
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50px;
}

.container {
  position: absolute;
  height: 430px;
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

.sign-change {
  background-color: rgba(17, 39, 59, 0.8);
}

.toLogin {
  color: white;
}

.sign-box input {
  box-shadow: 0 0 3px black;
}

.sign-box .btn {
  color: #1e90ff;
  background-color: rgba(200, 200, 200, 0.1);
  transition: 0.5s;
}

.sign-box .btn:hover {
  color: white;
  background-color: #1e90ff;
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
.error-message {
  font-weight: bold;
  color: brown;
}
</style>
