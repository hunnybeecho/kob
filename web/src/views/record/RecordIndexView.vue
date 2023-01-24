<template>
  <ContentField>
    <div style="font-size: 20px; font-weight: bold;">对局记录</div>
    <table style="margin-top: 15px; text-align: center;"
           class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">玩家A</th>
          <th scope="col">玩家B</th>
          <th scope="col">对局结果</th>
          <th scope="col">对局时间</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="(record, index) in records"
            :key="record.record.id">
          <th scope="row">{{ handleIndex(index + 1) }}</th>
          <td>
            <img :src="record.a_avatar"
                 alt="玩家A头像"
                 class="record-user-avatar">
            &nbsp;
            <span class="record-user-username">{{ record.a_username }}</span>
            <span v-if="record.result === '玩家A获胜'"
                  style="color: #3491FA">
              &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-bookmark-star-fill"
                   viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z" />
              </svg>
            </span>
          </td>
          <td>
            <img :src="record.b_avatar"
                 alt="玩家B头像"
                 class="record-user-avatar">
            &nbsp;
            <span class="record-user-username">{{ record.b_username }}</span>
            <span v-if="record.result === '玩家B获胜'"
                  style="color: #3491FA">
              &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-bookmark-star-fill"
                   viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z" />
              </svg>
            </span>
          </td>
          <td>{{ record.result }}</td>
          <td>{{ record.record.createTime }}</td>
          <td>
            <button @click="open_record_content(record.record.id)"
                    type="button"
                    class="btn btn-success">查看回放</button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item"
            @click="click_page(-2)">
          <a class="page-link"
             href="#"
             aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li :class="'page-item ' + page.is_active"
            v-for="page in pages"
            :key="page.number"
            @click="click_page(page.number)"><a class="page-link"
             href="#">{{ page.number }}</a></li>
        <li class="page-item"
            @click="click_page(-1)">
          <a class="page-link"
             href="#"
             aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField'
import { useStore } from 'vuex'
import { ref } from 'vue'
import $ from 'jquery'
import router from '../../router/index'

export default {
  components: {
    ContentField
  },
  setup() {
    const store = useStore();
    let records = ref([]);
    let current_page = 1;
    let total_records = 0;
    let pages = ref([]);

    const handleIndex = index => {
      if (index === 10) {
        return current_page + '0'
      }
      let page = current_page - 1;
      return page === 0 ? index : page.toString() + index.toString();
    }

    const click_page = page => {
      if (page === -2) page = current_page - 1;
      else if (page === -1) page = current_page + 1;
      let max_pages = parseInt(Math.ceil(total_records / 10));

      if (page >= 1 && page <= max_pages) {
        pull_page(page);
      }
    }

    const update_pages = () => {
      let max_pages = parseInt(Math.ceil(total_records / 10));
      let new_pages = [];
      for (let i = current_page - 2; i <= current_page + 2; i++) {
        if (i >= 1 && i <= max_pages) {
          new_pages.push({
            number: i,
            is_active: i === current_page ? "active" : "",
          });
        }
      }
      pages.value = new_pages;
    }

    const pull_page = page => {
      current_page = page;
      $.ajax({
        url: "http://127.0.0.1:3000/record/get-list",
        type: "GET",
        data: {
          page,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          records.value = resp.records;
          total_records = resp.records_count;
          update_pages();
        },
        error(resp) {
          console.log(resp);
        }
      })
    };

    pull_page(current_page);

    const stringTo2D = map => {
      let g = [];
      for (let i = 0, k = 0; i < 13; i++) {
        let line = [];
        for (let j = 0; j < 14; j++, k++) {
          if (map[k] === '0') line.push(0);
          else line.push(1);
        }
        g.push(line);
      }
      return g;
    }

    const open_record_content = recordId => {
      for (const record of records.value) {
        if (record.record.id === recordId) {
          store.commit("updateIsRecord", true);
          store.commit("updateGame", {
            map: stringTo2D(record.record.map),
            a_id: record.record.aid,
            a_sx: record.record.asx,
            a_sy: record.record.asy,
            b_id: record.record.bid,
            b_sx: record.record.bsx,
            b_sy: record.record.bsy,
          });
          store.commit("updateSteps", {
            a_steps: record.record.asteps,
            b_steps: record.record.bsteps,
          });
          store.commit("updateRecordLoser", record.record.loser);
          router.push({
            name: "record_content",
            params: {
              recordId,
            }
          });
          break;
        }
      }
    }

    return {
      records,
      pages,
      handleIndex,
      open_record_content,
      click_page,
    }
  }
}
</script>

<style scoped>
img.record-user-avatar {
  width: 4vh;
  border-radius: 50%;
}
</style>