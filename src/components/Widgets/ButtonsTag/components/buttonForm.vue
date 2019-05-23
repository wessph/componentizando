<template>
  <div>
    <template v-if="fieldButton.click">
      <input class="btn mt-2" @click="fieldButton.click" :class="fieldButton.class" :value="fieldButton.value" />
    </template>
    <template v-else>
      <input type="submit" class="btn mt-1" @click="dispatch(fieldButton.event)" :value="fieldButton.value" :class="fieldButton.class" />
    </template>
  </div>
</template>
<script>
import events from '@/utils/events'
export default {
  name: 'ButtonForm',
  props: ['fieldButton'],
  methods: {
    dispatch (event) {
      events.$emit(event)
    }
  }
}
</script>
<style scoped>

</style>

