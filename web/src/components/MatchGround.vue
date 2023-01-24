<template>
  <div class="matchground">
    <div class="bd-callout bd-callout-warning">
      <p style="font-weight: bold; font-size: 18px">注意事项：</p>
      <p>您可以选择 `亲自出马` 或挑选 `您的 Bot` 出战，当选择 `亲自出马` 时，使用 <kbd>W</kbd>、<kbd>A</kbd>、<kbd>S</kbd>、<kbd>D</kbd> 控制蛇的移动方向 .</p>
    </div>
    <div class="container content-field">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-5">
              <div class="avatar">
                <img :src="$store.state.user.avatar"
                     alt="用户头像">
              </div>
              <div class="username">
                {{ $store.state.user.username }}
              </div>
            </div>
            <div class="col-2">
              <div class="user-select-bot">
                <select v-model="selected_bot"
                        class="form-select"
                        aria-label="Default select example">
                  <option value="-1"
                          selected>亲自出马</option>
                  <option v-for="bot in bots"
                          :key="bot.id"
                          :value="bot.id">{{ bot.title }}</option>
                </select>
              </div>
            </div>
            <div class="col-5">
              <div class="avatar">
                <img :src="$store.state.pk.opponent_avatar"
                     alt="对手头像">
              </div>
              <div class="username">
                {{ $store.state.pk.opponent_username }}
              </div>
            </div>
            <div class="col-12"
                 style="text-align: center; padding-top: 10vh">
              <button @click="click_match_btn"
                      type="button"
                      class="btn btn-warning btn-lg">{{ match_btn_info }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import $ from 'jquery'

export default {
  setup() {
    const store = useStore();
    let match_btn_info = ref("开始匹配");
    let bots = ref([]);
    let selected_bot = ref("-1");

    const click_match_btn = () => {
      if (match_btn_info.value === "开始匹配") {
        match_btn_info.value = "取消";
        store.state.pk.socket.send(JSON.stringify({
          event: "start-matching",
          bot_id: selected_bot.value,
        }));
      } else {
        match_btn_info.value = "开始匹配";
        store.state.pk.socket.send(JSON.stringify({
          event: "stop-matching",
        }));
      }
    }

    const refresh_bots = () => {
      $.ajax({
        url: "http://127.0.0.1:3000/user/bot/get-list",
        type: "GET",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          bots.value = resp;
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    refresh_bots();

    return {
      match_btn_info,
      bots,
      selected_bot,
      click_match_btn,
    }
  }
}
</script>

<style scoped>
div.matchground {
  width: 70vw;
  height: 70vh;
  margin: 40px auto;
}

div.avatar {
  text-align: center;
  padding-top: 5vh;
}

div.avatar > img {
  width: 50%;
  border-radius: 50%;
}

div.username {
  padding-top: 2vh;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.bd-callout {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: #997404;
  background-color: #fff3cd;
  border-left: 0.25rem solid #ffe69c;
}

.bd-callout-warning {
  --bd-callout-color: #997404;
  --bd-callout-bg: #fff3cd;
  --bd-callout-border: #ffe69c;
}

div.user-select-bot {
  padding-top: 6vh;
}

div.user-select-bot > select {
  margin: 0 auto;
}
</style>