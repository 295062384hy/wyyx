<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item " @click="goto('/main/home')" :class="{on:$route.path==='/main/home'}" >
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/main/knowledge')"  :class="{on:$route.path==='/main/knowledge'}" >
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/main/classification')"  :class="{on:$route.path==='/main/classification'}" >
      <span class="item_icon">
        <i class="iconfont icon-navicon-kcfl"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/main/shop')" :class="{on:$route.path==='/main/shop'}" >
      <span class="item_icon">
        <i class="iconfont icon-gouwuche1"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/main/person')" :class="{on:$route.path==='/main/person'}" >
      <span class="item_icon">
        <i class="iconfont icon-mine"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
