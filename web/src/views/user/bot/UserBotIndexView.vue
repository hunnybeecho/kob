<template>
  <ContentField>
    我的Bot
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField'
import $ from 'jquery'
import { useStore } from 'vuex'

export default {
  components: {
    ContentField
  },
  setup() {
    const store = useStore();
    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/bot/add",
    //   type: "POST",
    //   data: {
    //     title: "Bot标题",
    //     description: "Bot描述",
    //     content: "Bot代码",
    //   },
    //   headers: {
    //     Authorization: "Bearer " + store.state.user.token,
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // })

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/bot/remove",
    //   type: "POST",
    //   data: {
    //     bot_id: 4,
    //   },
    //   headers: {
    //     Authorization: "Bearer " + store.state.user.token,
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // })

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/bot/update",
    //   type: "POST",
    //   data: {
    //     bot_id: 3,
    //     title: "Bot3标题",
    //     description: "Bot3描述",
    //     content: "Bot3代码",
    //   },
    //   headers: {
    //     Authorization: "Bearer " + store.state.user.token,
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // })

    $.ajax({
      url: "http://127.0.0.1:3000/user/bot/get-list",
      type: "GET",
      headers: {
        Authorization: "Bearer " + store.state.user.token,
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      }
    })
  }
}
</script>

<style scoped>
</style>