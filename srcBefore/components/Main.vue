<template>
<div>

  <router-view/>
  <footerlist/>
</div>
</template>
<script>

  import Footerlist from './../common/Footerlist/Footerlist.vue'
export default {
  components:{
    Footerlist,
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
