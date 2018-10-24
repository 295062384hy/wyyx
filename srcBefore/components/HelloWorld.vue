<template>
  <div class="first" @click="goTo('/main')" :class="{on:$route.path==='/main'}">
    <img src="../../images/yx01.jpg" alt="网易严选" class="header">
    <img src="../../images/appxr.jpg" alt="新人APP" class="content">
    <img src="../../images/xiazai.jpg" alt="新人礼包" class="button">
  </div>
</template>

<script>
  export default {
    methods:{
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

  .first
    img
      display block
    .header
      height 220px
      width 100%
    .content
      height 198px
      width 100%
    .button
      width 100%
      height 250px
</style>
