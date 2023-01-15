<template>
  <div class="playground">
    <GameMap />
  </div>
  <div style="text-align: center;">
    <normal class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2">您在左下角</normal>
  </div>
  <!-- <h4 style="text-align: center"><span class="badge rounded-pill text-bg-secondary">您在左下角</span></h4> -->
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