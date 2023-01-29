<template>
  <ContentField>
    <div style="font-size: 20px; font-weight: bold;">排行榜</div>
    <table id="tableId"
           style="margin-top: 15px; text-align: center;"
           class="table table-striped table-hover"
           v-if="users !== undefined && users !== null && users.length > 0">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">玩家</th>
          <th scope="col">天梯分</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="(user, index) in users"
            :key="user.id">
          <th scope="row">{{ handleIndex(index + 1) }}</th>
          <td>
            <img :src="user.avatar"
                 alt="玩家头像"
                 class="user-avatar">
            &nbsp;
            <span class="user-username">{{ user.username }}</span>
            <span v-if="handleIndex(index + 1) === 1"
                  style="color: #F7BA1E">
              &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-trophy-fill"
                   viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
              </svg>
            </span>
            <span v-if="handleIndex(index + 1) === 2"
                  style="color: #8E8E8E">
              &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-trophy-fill"
                   viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
              </svg>
            </span>
            <span v-if="handleIndex(index + 1) === 3"
                  style="color: #774B04">
              &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-trophy-fill"
                   viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
              </svg>
            </span>
          </td>
          <td>{{ user.rating }}</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example"
         v-if="users !== undefined && users !== null && users.length > 0">
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
    <div v-else
         style="text-align: center">无数据</div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField'
import { useStore } from 'vuex'
import { ref } from 'vue'
import $ from 'jquery'

export default {
  components: {
    ContentField
  },
  setup() {
    const store = useStore();
    let users = ref([]);
    let current_page = 1;
    let total_users = 0;
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
      let max_pages = parseInt(Math.ceil(total_users / 10));

      if (page >= 1 && page <= max_pages) {
        pull_page(page);
      }
    }

    const update_pages = () => {
      let max_pages = parseInt(Math.ceil(total_users / 10));
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
        // url: "http://127.0.0.1:3000/ranking/get-list",
        url: "https://app4553.acapp.acwing.com.cn/api/ranking/get-list",
        type: "GET",
        data: {
          page,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          users.value = resp.users;
          total_users = resp.users_count;
          update_pages();
        },
        // error(resp) {
        //   console.log(resp);
        // }
      })
    };

    pull_page(current_page);

    return {
      users,
      pages,
      handleIndex,
      click_page,
    }
  }
}
</script>

<style scoped>
img.user-avatar {
  width: 4vh;
  border-radius: 50%;
}
</style>