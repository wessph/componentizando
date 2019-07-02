<template>
    <div>
        <button type="button" :class="content.params.btnModal.class" data-toggle="modal" data-target="#exampleModal">
            {{ content.params.btnModal.name }}
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <component v-bind:is="content.component" :params="content.params"></component>
                    </div>
                    <div class="modal-footer">
                        <BtnTag :formDataBtn="content.params.formDataBtn"></BtnTag>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import events from '@/utils/events'
import BtnTag from '@/components/Widgets/ButtonsTag'

export default {
  name: 'Modal',
  components: {
    BtnTag
  },
  props: ['name','title','button', 'content','footer'],
  created(){
    events.$on('modal-test-close',function(){
        alert('FECHA MODAL')
    })
  },
  methods:{
    dispatch(event){
      events.$emit('modal-test-' + event)
    }
  }
}
</script>
