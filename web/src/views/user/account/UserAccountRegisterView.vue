<template>
  <ContentField>
    <div class="loginForm">
      <h2>用户注册</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text"
                 class="form-control"
                 id="username"
                 placeholder="请输入用户名"
                 v-model="username">
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password"
                 class="form-control"
                 id="password"
                 placeholder="请输入密码"
                 v-model="password">
        </div>
        <div class="form-group">
          <label for="confirmedPassword">确认密码</label>
          <input type="password"
                 class="form-control"
                 id="confirmedPassword"
                 placeholder="请再次输入密码"
                 v-model="confirmedPassword">
        </div>
        <div class="error_message">{{ error_message }}</div>
        <div class="button">
          <input type="submit"
                 class="btn btn-success"
                 value="注  册" />
        </div>
      </form>
    </div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField'
import { ref } from 'vue'
import router from '../../../router/index'
import $ from 'jquery'

export default {
  components: {
    ContentField
  },
  setup() {
    let username = ref('');
    let password = ref('');
    let confirmedPassword = ref('');
    let error_message = ref('');

    const register = () => {
      $.ajax({
        url: "http://127.0.0.1:3000/user/account/register",
        type: "POST",
        data: {
          username: username.value,
          password: password.value,
          confirmedPassword: confirmedPassword.value,
        },
        success(resp) {
          if (resp.error_message === "success") {
            router.push({ name: "user_account_login" });
          } else {
            error_message.value = resp.error_message;
          }
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    return {
      username,
      password,
      confirmedPassword,
      error_message,
      register
    }
  }
}
</script>

<style scoped>
.loginForm {
  /*边框高度*/
  height: 360px;
  /*边框宽度*/
  width: 500px;
  /*边框颜色*/
  border: #4d4d4d solid 1px;
  /*边框圆角*/
  border-radius: 4px;
  /*阴影 水平方向，竖直方向，模糊距离*/
  box-shadow: 5px 5px 5px #4d4d4d;
  /*上边界距离*/
  /* margin-top: 100px; */
  /*左边界距离：自动*/
  margin-left: auto;
  /*右边界距离：自动*/
  margin-right: auto;
  /*用户名、密码间距*/
  padding: 20px 40px;
}

/*将用户登录置于中间*/
.loginForm h2 {
  text-align: center;
}

/*修改button属性*/
.button {
  text-align: center;
  vertical-align: middle;
  margin-top: 30px;
}

.error_message {
  height: 10px;
  color: red;
  font-size: 10px;
}
</style>