<template>
  <div class="container-principal">
    <div class="col">
      <div class="row">
        <div class="col-md-4  mt-4">
          <div class="card">
            <div class="card-header">
              <h3>Questionário 1</h3>
            </div>
            <div class="card-body">
                <p>Clica aqui pra teste</p>
            </div>
            <div class="card-footer">
              <p><Modal :content="modalComponent"></Modal></p>
            </div>
          </div>
        </div>

        <div class="col-md-4  mt-4">
          <div class="card">
            <div class="card-header">
              <h3>Questionário 2</h3>
            </div>
            <div class="card-body">
                <p>Clica aqui pra teste</p>
            </div>
            <div class="card-footer">
              <p>Estamos OK!</p>
            </div>
          </div>
        </div>

        <div class="col-md-4  mt-4">
          <div class="card">
            <div class="card-header">
              <h3>Questionário 3</h3>
            </div>
            <div class="card-body">
                <p>Clica aqui pra teste</p>
            </div>
            <div class="card-footer">
              <p>Estamos OK!</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 mt-4">
          <div class="card">
            <div class="card-header">
              <h3>Questionário 4</h3>
            </div>
            <div class="card-body">
                <p>Clica aqui pra teste</p>
            </div>
            <div class="card-footer">
              <p>Estamos OK!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from '@/components/Widgets/Modal'
export default {
  name: 'Dashboard',
  components: {
    Modal
  },
  data () {
    return {
      modalTitle: 'Quiz 1',
      btnAbrirModal: {
        name: 'Quiz',
        class: 'btn btn-dark'
      },
      formDataBtn: [
        {btnEvent: {'class': 'btn-dark', 'event': 'save', 'value': 'SAVE'}},
        {btnEvent: {'class': 'btn-danger', 'event': 'closeModal', 'value': 'CLOSE'}}
      ],
      modalComponent: ''
    }
  },
  mounted () {
    events.$off('save')
    events.$on('save',function(){
      alert('EXECUTA O SAVE')
    })

    events.$off('closeModal')
    events.$on('closeModal', () =>{
      window.$('#modal').modal('hide')
    })
  },
  created () {
    this.modalComponent = {component: () => import('./components/contentModal'), params: {'btnModal': this.btnAbrirModal, 'formDataBtn': this.formDataBtn, 'modalTitle': this.modalTitle}}
  }
}
</script>
<style>
.container-principal{
  margin-left: 140px;
  padding-top: 95px;
}
</style>