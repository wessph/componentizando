<template>
  <div>
    <router-view/>
    <Sidebar v-if="$root.authenticated"> </Sidebar>
    <notifications group="foo"
    position="bottom right"/>
  </div>
</template>
<script>
import Sidebar from '@/components/Global/Sidebar'
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
<style>
</style>
