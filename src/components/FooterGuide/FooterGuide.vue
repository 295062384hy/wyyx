<template>
  <ul class="footer-guide">
    <li @click.stop = 'goto("/home")'>
      <a href="javascript:;">
        <i class="icon home-icon" :class = '{active: $route.path === "/home"}'></i>
        <span :class = '{active: $route.path === "/home"}'>首页</span>
      </a>
    </li>
    <li @click.stop = 'goto("/shiwu")'>
      <a href="javascript:;">
        <i class="icon shiwu-icon":class = '{active: $route.path === "/shiwu"}'></i>
        <span :class = '{active: $route.path === "/shiwu"}'>识物</span>
      </a>
    </li>
    <li @click.stop = 'goto("/fenlei")'>
      <a href="javascript:;">
        <i class="icon fenlei-icon" :class = '{active: $route.path === "/fenlei"}'></i>
        <span :class = '{active: $route.path === "/fenlei"}'>分类</span>
      </a>
    </li>
    <li @click.stop = 'goto("/shopcar")'>
      <a href="javascript:;">
        <i class="icon shopcar-icon" :class = '{active: $route.path === "/shopcar"}'></i>
        <span :class = '{active: $route.path === "/shopcar"}'>购物车</span>
      </a>
    </li>
    <li @click.stop = 'goto("/personnelcenter")'>
      <a href="javascript:;">
        <i class="icon personnelcenter-icon" :class = '{active: $route.path === "/personnelcenter"}'></i>
        <span :class = '{active: $route.path === "/personnelcenter"}'>个人</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods:{
      goto(path){
        this.$router.history.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer-guide
    position relative
    z-index 10
    width 100%
    height 1.30667rem
    margin-top -1.30667rem
    display flex
    align-items center
    justify-content center
    >li
      display flex
      flex-direction column
      flex 1
      >a
        text-align center
        .icon
          width: .53333rem
          height: .53333rem
          display: inline-block
          vertical-align: middle
          background-image url("../../assets/images/nav/nav.png")
          background-repeat no-repeat
          background-size .53333rem 6.53333rem
          &.home-icon
            background-position 0 -3.33333rem
            &.active
              background-position 0 -2.66667rem
          &.shiwu-icon
            background-position 0 -4.66667rem
            &.active
              background-position 0 -4rem
          &.fenlei-icon
            background-position 0 -2rem
            &.active
              background-position 0 -1.33333rem
          &.shopcar-icon
            background-position 0 -.66667rem
            &.active
              background-position 0 0
          &.personnelcenter-icon
            background-position 0 -6rem
            &.active
              background-position 0 -6rem
        span
          display: block;
          font-size: .32rem;
          color: #666;
          line-height: 1;
          &.active
            color #b4282d
</style>
