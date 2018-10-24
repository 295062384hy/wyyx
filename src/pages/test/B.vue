<template>
  <div>
    <h1>B</h1>
    <div>
      <router-link to="/b/b1" replace>b1</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
