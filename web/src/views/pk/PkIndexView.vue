<template>
  <ContentField>
    <PlayGround />
    <h3 style="text-align: center"><span class="badge rounded-pill text-bg-secondary">您在左下角</span></h3>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField'
import PlayGround from '../../components/PlayGround'
export default {
  components: {
    ContentField,
    PlayGround
  }
}
</script>

<style scoped>
</style>