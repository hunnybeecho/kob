<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="card"
             style="margin-top: 15px;">
          <div class="card-body">
            <img class="img-responsive center-block"
                 :src="$store.state.user.avatar"
                 alt="头像" />
            <hr />
            <div class="username">{{ $store.state.user.username }}</div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="card"
             style="margin-top: 15px;">
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
                    <button @click="clear_botadd_data"
                            type="button"
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
                                  rows="2"
                                  placeholder="请输入Bot描述"></textarea>
                      </div>
                      <div class="mb-3">
                        <label for="add-bot-code"
                               class="col-form-label">代码</label>
                        <VAceEditor v-model:value="botadd.code"
                                    @init="editorInit"
                                    lang="java"
                                    theme="textmate"
                                    style="height: 300px"
                                    :options="{ fontSize: 15 }" />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <div class="error-message">{{ botadd.error_message }}</div>
                    <button type="button"
                            class="btn btn-success"
                            @click="add_bot">保存</button>
                    <button @click="clear_botadd_data"
                            type="button"
                            class="btn btn-danger"
                            data-bs-dismiss="modal">取消</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="card-body">
            <table class="table table-striped table-hover"
                   v-if="bots !==undefined &&bots != null && bots.length > 0">
              <thead>
                <tr>
                  <th style="text-align: center;">序号</th>
                  <th style="text-align: center;">标题</th>
                  <th style="text-align: center;">描述</th>
                  <th style="text-align: center;">创建时间</th>
                  <th style="text-align: center;">操作</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="(bot, index) in bots"
                    :key="bot.id">
                  <th style="text-align: center;">{{ index + 1 }}</th>
                  <td style="text-align: center;">{{ bot.title }}</td>
                  <td style="text-align: center;">{{ bot.description }}</td>
                  <td style="text-align: center;">{{ bot.createTime }}</td>
                  <td style="text-align: center;">
                    <button type="button"
                            class="btn btn-outline-warning btn-sm"
                            data-bs-toggle="modal"
                            :data-bs-target="'#update-bot-modal-' + bot.id">编辑</button>
                    <button type="button"
                            class="btn btn-outline-danger btn-sm"
                            style="margin-left: 10px"
                            data-bs-toggle="modal"
                            :data-bs-target="'#remove-bot-modal-' + bot.id">删除</button>
                  </td>

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
                          <button @click="refresh_bots"
                                  type="button"
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
                                        rows="2"
                                        placeholder="请输入Bot描述"></textarea>
                            </div>
                            <div class="mb-3">
                              <label for="update-bot-code"
                                     class="col-form-label">代码</label>
                              <VAceEditor v-model:value="bot.code"
                                          @init="editorInit"
                                          lang="java"
                                          theme="textmate"
                                          style="height: 300px"
                                          :options="{ fontSize: 15 }" />
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <div class="error-message">{{ bot.error_message }}</div>
                          <button type="button"
                                  class="btn btn-success"
                                  @click="update_bot(bot)">保存</button>
                          <button @click="refresh_bots"
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal">取消</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 删除Modal -->
                  <div class="modal fade"
                       :id="'remove-bot-modal-' + bot.id"
                       tabindex="-1">
                    <div class="modal-dialog modal-sm modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <div class="modal-title">提示</div>
                          <button type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                        </div>
                        <div class="modal-body mx-auto">
                          您确定删除该Bot吗?
                        </div>
                        <div class="modal-footer mx-auto">
                          <button type="button"
                                  class="btn btn-light"
                                  data-bs-dismiss="modal">取消</button>
                          <button @click="remove_bot(bot)"
                                  type="button"
                                  class="btn btn-warning">确定</button>
                        </div>
                      </div>
                    </div>
                  </div>

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
      code: "",
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

    const clear_botadd_data = () => {
      botadd.title = "";
      botadd.description = "";
      botadd.code = "";
      botadd.error_message = "";
    }

    const add_bot = () => {
      botadd.error_message = "";
      $.ajax({
        url: "http://127.0.0.1:3000/user/bot/add",
        type: "POST",
        data: {
          title: botadd.title,
          description: botadd.description,
          code: botadd.code,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          if (resp.error_message === "success") {
            clear_botadd_data();
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
            Modal.getInstance('#remove-bot-modal-' + bot.id).hide();
            refresh_bots();
          } else {
            Modal.getInstance('#remove-bot-modal-' + bot.id).hide();
            alert(resp.error_message);
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
          code: bot.code,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          if (resp.error_message === "success") {
            Modal.getInstance('#update-bot-modal-' + bot.id).hide();
            refresh_bots();
          } else {
            bot.error_message = resp.error_message;
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
      refresh_bots,
      clear_botadd_data,
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
  color: brown;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>