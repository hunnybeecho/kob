<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <div class="card"
             style="margin-top: 20px;">
          <div class="card-header">
            <img :src="$store.state.user.avatar_url"
                 alt=""
                 style="width: 100%">
          </div>
          <div class="card-body username">{{ $store.state.user.username }}</div>
        </div>
      </div>
      <div class="col-10">
        <div class="card"
             style="margin-top: 20px;">
          <div class="card-header">
            <span style="font-size: 20px">我的Bot</span>
            <button type="button"
                    class="btn btn-success float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#add-bot-modal">添加Bot</button>

            <!-- 添加Modal -->
            <div class="modal fade"
                 id="add-bot-modal"
                 data-bs-backdrop="static"
                 data-bs-keyboard="false"
                 tabindex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5"
                        id="exampleModalLabel">添加Bot</h1>
                    <button type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="add-bot-title"
                               class="col-form-label">标题</label>
                        <input v-model="botadd.title"
                               type="text"
                               class="form-control"
                               id="add-bot-title"
                               placeholder="请输入Bot标题">
                      </div>
                      <div class="mb-3">
                        <label for="add-bot-description"
                               class="col-form-label">描述</label>
                        <textarea v-model="botadd.description"
                                  class="form-control"
                                  id="add-bot-description"
                                  rows="3"
                                  placeholder="请输入Bot描述"></textarea>
                      </div>
                      <div class="mb-3">
                        <label for="add-bot-code"
                               class="col-form-label">代码</label>
                        <VAceEditor v-model:value="botadd.content"
                                    @init="editorInit"
                                    lang="java"
                                    theme="textmate"
                                    style="height: 300px" />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <div class="error-message">{{ botadd.error_message }}</div>
                    <button type="button"
                            class="btn btn-success"
                            @click="add_bot">保存</button>
                    <button type="button"
                            class="btn btn-danger"
                            data-bs-dismiss="modal">取消</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="card-body">
            <table id="tableId"
                   class="table table-striped table-hover"
                   style="text-align: center;"
                   v-if="bots !==undefined &&bots != null && bots.length > 0">
              <thead>
                <tr>
                  <th>序号</th>
                  <th>标题</th>
                  <th>描述</th>
                  <th>创建时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="(bot, index) in bots"
                    :key="bot.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ bot.title }}</td>
                  <td>{{ bot.description }}</td>
                  <td>{{ bot.createTime }}</td>
                  <td>
                    <button type="button"
                            class="btn btn-outline-warning btn-sm"
                            data-bs-toggle="modal"
                            :data-bs-target="'#update-bot-modal-' + bot.id">编辑</button>
                    <button @click="remove_bot(bot)"
                            type="button"
                            class="btn btn-outline-danger btn-sm"
                            style="margin-left: 10px">删除</button>

                    <!-- 编辑Modal -->
                    <div class="modal fade"
                         :id="'update-bot-modal-' + bot.id"
                         data-bs-backdrop="static"
                         data-bs-keyboard="false"
                         tabindex="-1"
                         aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5"
                                id="exampleModalLabel">编辑Bot</h1>
                            <button type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="mb-3">
                                <label for="update-bot-title"
                                       class="col-form-label">标题</label>
                                <input v-model="bot.title"
                                       type="text"
                                       class="form-control"
                                       id="update-bot-title"
                                       placeholder="请输入Bot标题">
                              </div>
                              <div class="mb-3">
                                <label for="update-bot-description"
                                       class="col-form-label">描述</label>
                                <textarea v-model="bot.description"
                                          class="form-control"
                                          id="update-bot-description"
                                          rows="3"
                                          placeholder="请输入Bot描述"></textarea>
                              </div>
                              <div class="mb-3">
                                <label for="update-bot-code"
                                       class="col-form-label">代码</label>
                                <VAceEditor v-model:value="bot.content"
                                            @init="editorInit"
                                            lang="java"
                                            theme="textmate"
                                            style="height: 300px" />
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <div class="error-message">{{ bot.error_message }}</div>
                            <button type="button"
                                    class="btn btn-success"
                                    @click="update_bot(bot)">保存</button>
                            <button type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal">取消</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else
                 style="text-align: center">无数据</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import $ from 'jquery'
import { useStore } from 'vuex'
import { Modal } from 'bootstrap/dist/js/bootstrap'
import { VAceEditor } from 'vue3-ace-editor';
import ace from 'ace-builds';

export default {
  components: {
    VAceEditor,
  },
  setup() {
    ace.config.set(
      "basePath",
      "https://cdn.jsdelivr.net/npm/ace-builds@" + require('ace-builds').version + "/src-noconflict/")

    const store = useStore();
    let bots = ref([]);

    const botadd = reactive({
      title: "",
      description: "",
      content: "",
      error_message: ""
    });

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

    const add_bot = () => {
      botadd.error_message = "";
      $.ajax({
        url: "http://127.0.0.1:3000/user/bot/add",
        type: "POST",
        data: {
          title: botadd.title,
          description: botadd.description,
          content: botadd.content,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          if (resp.error_message === "success") {
            botadd.title = "";
            botadd.description = "";
            botadd.content = "";
            Modal.getInstance("#add-bot-modal").hide();
            refresh_bots();
          } else {
            botadd.error_message = resp.error_message;
          }
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    const remove_bot = (bot) => {
      $.ajax({
        url: "http://127.0.0.1:3000/user/bot/remove",
        type: "POST",
        data: {
          bot_id: bot.id,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          if (resp.error_message === "success") {
            refresh_bots();
          }
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    const update_bot = (bot) => {
      botadd.error_message = "";
      $.ajax({
        url: "http://127.0.0.1:3000/user/bot/update",
        type: "POST",
        data: {
          bot_id: bot.id,
          title: bot.title,
          description: bot.description,
          content: bot.content,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          if (resp.error_message === "success") {
            Modal.getInstance('#update-bot-modal-' + bot.id).hide();
            refresh_bots();
          } else {
            botadd.error_message = resp.error_message;
          }
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    return {
      bots,
      botadd,
      add_bot,
      remove_bot,
      update_bot,
    }
  }
}
</script>

<style scoped>
.username {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}

div.error-message {
  color: red;
}
</style>