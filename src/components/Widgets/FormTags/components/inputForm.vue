<template>
    <div class="inputForm">
      <input v-model="field.value" :type="field.type" :placeholder="field.placeholder" :required="field.required" class="form-control mt-2" />
    </div>
</template>
<script>
export default {
  name: 'inputForm',
  props: ['field']
}
</script>
<style>
</style>
