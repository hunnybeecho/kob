<template>
  <ContentField>
    <div class="container">
      <div class="row">
        <div class="col-11">
          <PlayGround />
        </div>
        <div class="col-1">
          <!-- <button @click="backspace"
                  type="button"
                  class="btn btn-success">重新回放</button>
          &nbsp;
          <button @click="backspace"
                  type="button"
                  class="btn btn-warning">暂停回放</button>
          &nbsp; -->
          <div style="text-align: right;">
            <button @click="this.$router.go(-1)"
                    type="button"
                    class="btn btn-danger">返回</button>
          </div>

        </div>
      </div>
    </div>
  </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField'
import PlayGround from '../../components/PlayGround'

export default {
  components: {
    ContentField,
    PlayGround,
  },
}
</script>

<style scoped>
</style>