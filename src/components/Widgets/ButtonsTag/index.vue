<template>
    <div class="row">
      <buttonForm class="m-1" v-for="(btn, index) in formDataBtn" :key="index" :fieldButton="btn.btnEvent"></buttonForm>
    </div>
</template>
<script>
import ButtonForm from './components/buttonForm'
export default {
  name: 'btnTag',
  props: ['formDataBtn'],
  components: {
    ButtonForm
  }
}
</script>
