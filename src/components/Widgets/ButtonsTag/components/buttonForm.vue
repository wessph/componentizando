<template>
  <div>
    <input type="submit" class="btn mt-1" @click="dispatch(fieldButton.event)" :value="fieldButton.value" :class="fieldButton.class" />
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
