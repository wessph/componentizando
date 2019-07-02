<template>
  <div class="teste">
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
body{
  height: 100vh;
  background-image: linear-gradient(to left top,
  #555555, #5e5e5e, #676767, #717171,
  #7a7a7a, #828282, #898989, #919191,
  #999999, #a1a1a1, #a9a9a9, #b1b1b1);
}
</style>
