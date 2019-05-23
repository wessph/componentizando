<template>
    <div class="container-center">
        <div class="card">
          <div class="card-body">
            <h1 class="center h1-register">Register page</h1>
              <form v-on:submit.prevent>
                  <FormTags :formData="formData"></FormTags>
                  <div class="center">
                    <BtnTag :formDataBtn="formDataBtn"> </BtnTag>
                  </div>
              </form>
          </div>
        </div>
    </div>
</template>
<script>
import events from '@/utils/events'
import axios from 'axios'
import BtnTag from '@/components/Widgets/ButtonsTag'
import FormTags from '@/components/Widgets/FormTags'

export default {
  name: 'Register',
  components: {
    BtnTag,
    FormTags
  },
  data () {
    return {
      formData: [
        {fields: [
          {'name': 'email', 'type': 'email', 'placeholder': 'Digite o email(*)', 'required': true, value: ''}
        ]},
        {fields: [
          {'name': 'name', 'type': 'text', 'placeholder': 'Digite seu nome(*)', 'required': true, value: ''}
        ]},
        {fields: [
          {'name': 'password', 'type': 'password', 'placeholder': 'Digite a senha(*)', 'required': true, value: ''}
        ]}
      ],
      formDataBtn: {
        btnEvent: {'class': 'btn-dark', 'event': 'registerEvent', 'value': 'REGISTRAR'}
      }
    }
  },
  mounted () {
    events.$off('registerEvent')
    events.$on('registerEvent', () => {
      this.register()
    })
  },
  methods: {
    register () {
      let _this = this
      let email = this.formData[0].fields[0].value
      let name = this.formData[1].fields[0].value
      let password = this.formData[2].fields[0].value

      axios.post('/register', {email: email, name: name, password: password})
        .then(res => {
          _this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Feito!',
            text: 'Cadastro realizado com sucesso!'
          })
          _this.$router.push({ path: '/login' })
        }).catch(error => {
            _this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ops!',
              text: 'Verifique as informações e teste novamente!'
            })
            console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.h1-register{
  padding: 20px;
}
.card{
  border-radius: 10px;
  height: 350px;
}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<style>
</style>