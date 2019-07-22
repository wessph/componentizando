<template>
    <div>
        <button type="button" :class="content.params.btnModal.class" data-toggle="modal" data-target="#modal">
            {{ content.params.btnModal.name }}
        </button>
        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="modalLabel">{{ content.params.modalTitle }}</h3>
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
import BtnTag from '@/components/Widgets/ButtonsTag'

export default {
  name: 'Modal',
  components: {
    BtnTag
  },
  props: ['button', 'content', 'footer']
}
</script>
