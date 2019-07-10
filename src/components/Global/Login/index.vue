<template>
    <div class="container-center">
        <div class="card">
            <div class="card-body">
              <h1 class="center h1-login">Login page</h1>
                <form v-on:submit.prevent>
                    <FormTags :formData="formData"></FormTags>                      
                      <div class="center">
                        <BtnTag :formDataBtn="formDataBtn"></BtnTag>
                      </div>
                </form>
            </div>
            <div class="card-footer">
                <a href="/register">REGISTRAR-SE</a>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import events from '@/utils/events'
import BtnTag from '@/components/Widgets/ButtonsTag'
import FormTags from '@/components/Widgets/FormTags'
export default {
  name: 'Login',
  components: {
    BtnTag,
    FormTags
  },
  data () {
    return {
      formData: [
        {fields: [
          {'name': 'email', 'type': 'email', 'placeholder': 'Usuário', 'required': false, value: ''}
        ]},
        {fields: [
          {'name': 'password', 'type': 'password', 'placeholder': 'Senha', 'required': false, value: ''}
        ]}
      ],
      formDataBtn: [
        {btnEvent: {'class': 'btn-dark', 'event': 'btnLogin', 'value': 'ACESSAR'}}
      ]
    }
  },
  mounted () {
    events.$off('btnLogin')
    events.$on('btnLogin', () => {
      this.login()
    })
    events.$off('authenticatedLogin')
    events.$on('authenticatedLogin', () => {
      this.$root.authenticated = true
    })
  },
  methods: {
    login () {
      let _this = this
      let email = this.formData[0].fields[0].value
      let password = this.formData[1].fields[0].value
      if (email === '' || password === '') {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Falhou',
          text: 'Digite os campos obrigatórios (*)'
        })
      } else {
        axios.post('/login', {email: email, password: password})
          .then(res => {
            localStorage.setItem('userComponent', JSON.stringify(res.data))
            _this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Uhul!',
              text: 'Logado com sucesso!'
            })
            events.$emit('authenticatedLogin')
            _this.$router.push({ path: '/dashboard' })
          }).catch(error => {
            _this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ops!',
              text: 'Usuário ou senha incorreto ou você não tem permissão para acesso!'
            })
            console.log(error)
          })
      }
    }
  }
}
</script>
<style scoped>
.h1-login{
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