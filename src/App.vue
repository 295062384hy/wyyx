<template>
  <div id="app">
    <HeaderGuide v-show="$route.meta.ishowHeader"/>
    <div class="contentContiner">
      <router-view/>
    </div>
    <FooterGuide v-show="$route.meta.ishowFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'

export default {
  name: 'App',
  components: {
    HeaderGuide,
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    .contentContiner
      width 100%
      height 100%
      box-sizing border-box
      padding-bottom 1.30667rem
</style>
