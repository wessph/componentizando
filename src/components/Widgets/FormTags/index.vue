<template>
    <div class='formTags'>
        <template v-for="row in formData">
            <div class="form-group">
                <div v-for="(field,iField) in row.fields" :key="iField" :class="getCol(row.fields)">
                    <inputForm :field='field'></inputForm>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import inputForm from './components/inputForm.vue'
export default {
  name: 'FormTags',
  props: ['formData'],
  components: {
    inputForm
  },
  methods: {
    getCol (fields) {
      return 'col-md-' + Math.abs(Math.ceil(12 / fields.length))
    }
  }
}
</script>
<style>
</style>
