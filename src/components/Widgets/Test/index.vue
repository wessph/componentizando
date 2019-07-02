<template>
    <div>
        <input type="text"  v-model="params.name"/>
        <subComp></subComp>
    </div>
</template>
<script>
import events from '@/utils/events'
import subComp from './sub'
export default {
    name: "test",
    props:['params'],
    components: {
        subComp
    },
    mounted() {
        console.log("MONTOU O COMPONENT TEST")
        events.$off("modal-test-save")
        events.$on("modal-test-save",function(){
            alert('EXECUTA O SAVE')
        })
    }

}
</script>

