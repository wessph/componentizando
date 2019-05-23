<template>
    <div>
      <buttonForm :fieldButton="formDataBtn.btnEvent"></buttonForm>
      <buttonForm :fieldButton="formDataBtn.buttonPreview"></buttonForm>
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
