<template>
  <ContentField>
    <div class="loginForm">
      <h2>用户登录</h2>
      <form @submit.prevent="login">
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
        <div class="error_message">{{ error_message }}</div>
        <div class="button">
          <input type="submit"
                 class="btn btn-success"
                 value="登  录" />
        </div>
      </form>
    </div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField'
import { useStore } from 'vuex'
import { ref } from 'vue'
import router from '../../../router/index'

export default {
  components: {
    ContentField
  },
  setup() {
    const store = useStore();
    let username = ref('');
    let password = ref('');
    let error_message = ref('');

    const login = () => {
      error_message.value = "";
      store.dispatch("login", {
        username: username.value,
        password: password.value,
        success() {
          store.dispatch("getInfo", {
            success() {
              router.push({ name: 'home' });
              console.log(store.state.user);
            }
          })
        },
        error() {
          error_message.value = "用户名或密码错误";
        }
      })
    }

    return {
      username,
      password,
      error_message,
      login
    }
  }
}
</script>

<style scoped>
.loginForm {
  /*边框高度*/
  height: 300px;
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
  color: brown;
}
</style>