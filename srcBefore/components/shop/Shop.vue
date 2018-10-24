<template>
  <div class="shopContainer">
    <header class="header">
      <span class="logo">购物车</span>
      <div class="right">
        <a href="javascript:;">领券</a>
      </div>
    </header>
    <div class="testContainer">
      <ul class="testList">
        <li class="item">
          <i class="iconfont icon-shixinxiaoyuandian"></i>
          <span class="test">30天无忧退货</span>
        </li>
        <li class="item">
          <i class="iconfont icon-shixinxiaoyuandian"></i>
          <span class="test">48小时快速退款</span>
        </li>
        <li class="item">
          <i class="iconfont icon-shixinxiaoyuandian"></i>
          <span class="test">满88元免邮费</span>
        </li>

      </ul>

    </div>
    <div class="defaultPage">
      <div class="defaultContainer">
        <div class="img"></div>
        <div class="txt">
          <div class="noCart-login">
            <div class="noCart-title">去添加点什么吧</div>
            <div class="noCart-btn">登陆</div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shopContainer
    width 100%
    height 100%
    position relative
    overflow hidden
    >.header
      height 45px
      padding 0 15px
      line-height 45px
      text-align center
      background-color #fff
      position relative
      overflow hidden
      >.logo
        display inline-block
        font-size 18px
      >.right
        position absolute
        top 0
        right 15px
        font-size 15px
        >a
          margin-right 14px
          color #B4282D
    >.testContainer
      >.testList
        position: relative
        z-index 1
        height 35px
        padding 15px
        background: #f4f4f4
        display: flex
        flex-flow: row nowrap
        align-items: center
        justify-content: space-between
        >.item
          display: flex
          align-items: center
          font-size: 12px
          color: #666
          >.iconfont
            display: inline-block
            vertical-align: middle
            background-image  url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
            background-repeat: no-repeat
            width: 5px
            height: 5px
            margin-right: 3px
            position: relative
            top: -10px
    >.defaultPag
      position: fixed;
      top: 44px;
      left: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      background-color: #f4f4f4;
      text-align: center
      >.defaulContiner
        position: absolute;
        top: -25px
        right: 0;
        bottom: 0;
        left: 0;
        height: 150px;
        margin: auto
        >.img
          display: inline-block;
          vertical-align: middle;
          width: 124px;
          height: 124px;
          margin-bottom: 4px;
          background-size: 124 124
          background-position: center center;
          background-repeat: no-repeat
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
        >.txt
          font-size: 14px
          line-height: 1;
          color: #7f7f7f
          >.noCart-login
            margin-top: -10px
            >.noCart-title
              margin-bottom 25px
              line-height: 1;
              font-size: 14px
              color: #999
            >.noCart-btn
              margin: auto;
              width: 240px
              height: 46px
              font-size: 15px
              line-height: 46px
              color: #fff;
              background-color: #b4282d;
              border-radius: 1.5px


</style>
