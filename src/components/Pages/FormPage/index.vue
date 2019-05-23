<template>
  <div>
      <FormTags :formData='formData'></FormTags>
      <BtnTag :formDataBtn="formDataBtn"></BtnTag>
  </div>
</template>
<script>
import events from '@/utils/events'
import BtnTag from '@/components/Widgets/ButtonsTag'
import FormTags from '@/components/Widgets/FormTags'
export default {
  name: 'FormPage',
  components: {
    BtnTag,
    FormTags
  },
  data () {
    return {
      formDataBtn: {
        buttonTest: {'class': 'btn-warning', 'event': 'btnTest', 'value': 'TESTANDO COMPONENTE'},
        buttonPreview: {'class': 'btn-danger', 'event': 'test123', 'click': this.testXPTO, 'value': 'TESTANDO PREVIEW'}
      },
      formData: [
        {fields: [
          {'name': 'id', 'alias': 'ID', 'type': 'text', 'placeholder': 'productId', 'required': true, value: ''},
          {'name': 'name', 'alias': 'Nome', 'type': 'text', 'placeholder': 'productName', 'required': true, value: ''},
          {'name': 'price', 'alias': 'Preço', 'type': 'text', 'placeholder': 'productPrice', 'required': true, value: ''}
        ]},
        {fields: [
          {'name': 'department', 'alias': 'Categoria', 'type': 'text', 'placeholder': 'productCategory', value: ''},
          {'name': 'category', 'alias': 'SubCategoria', 'type': 'text', 'placeholder': 'productSubCategory', value: ''},
          {'name': 'subcategory', 'alias': 'Subcategoria 2', 'type': 'text', 'placeholder': 'productSubCategory 2', value: ''}
        ]},
        {fields: [
          {'name': 'brand', 'alias': 'Marca', 'type': 'text', 'placeholder': 'productBrand', value: ''}
        ]}
      ]
    }
  },
  mounted () {
    let _this = this
    events.$off('btnTest')
    events.$on('btnTest', function () {
      _this.teste()
    })
  },
  methods: {
    testXPTO () {
      alert('2x')
    },
    teste () {
      alert('TESTE EVENT')
    }
  }
}
</script>
