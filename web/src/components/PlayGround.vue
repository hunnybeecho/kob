<template>
  <div class="playground">
    <GameMap />
  </div>
  <div style="text-align: center; font-size: 24px; font-weight: bold;">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         fill="currentColor"
         class="bi bi-emoji-wink"
         viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z" />
    </svg>
    <span v-if="parseInt($store.state.user.id) === $store.state.pk.a_id"> 您在左下角</span>
    <span v-else> 您在右上角</span>
  </div>
</template>

<script>
import GameMap from '@/components/GameMap'
export default {
  components: {
    GameMap
  }
}
</script>

<style scoped>
div.playground {
  width: 70vw;
  height: 70vh;
  margin: 40px auto;
}

.d-inline-flex {
  display: inline-flex !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.fw-semibold {
  font-weight: 600 !important;
}

.text-success-emphasis {
  color: #146c43 !important;
}

.bg-success-subtle {
  background-color: #d1e7dd !important;
}

.rounded-2 {
  border-radius: var(--bs-border-radius) !important;
}

.border {
  border: var(--bs-border-width) var(--bs-border-style) #dee2e6 !important;
}

.border-success-subtle {
  border-color: #a3cfbb !important;
}
</style>