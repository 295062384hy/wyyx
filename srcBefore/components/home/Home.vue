<template>
  <section class="msite">
    <div class="msite_header">
      <!--首页头部-->
      <header class="header">
        <span class="header_title">网易严选</span>
        <div class="header_search">
          <span><i class="iconfont icon-sousuo"></i></span>
          搜索商品，共16703款好物
        </div>
      </header>
      <!--选项-->
      <div class="msite_options">
        <ul ref="optionsUl" class="better-container">
          <li class="on">推荐</li>
          <li>居家</li>
          <li>鞋包配饰</li>
          <li>服装</li>
          <li>电器</li>
          <li>洗护</li>
          <li>饮食</li>
          <li>餐厨</li>
          <li>婴童</li>
          <li>文体</li>
          <li>特色区</li>
        </ul>
      </div>
    </div>

    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/1.jpg" alt="1">
      </div>
      <div class="swiper-slide">
        <img src="./images/3.jpg" alt="2">
      </div>
      <div class="swiper-slide">
        <img src="./images/7.jpg" alt="3">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    </div>


    <!--轮播下边文本-->
    <ul class="msite_item">
      <li>
        <div class="circle"></div>
        <div class="text">网易自营品牌</div>
      </li>
      <li>
        <div class="circle"></div>
        <div class="text">30天无忧退货</div>
      </li>
      <li>
        <div class="circle"></div>
        <div class="text">48小时快速退款</div>
      </li>
    </ul>

    <!--品牌制造商直供-->
    <div class="msite_brand">
      <span>品牌制造商直供</span>
      <span><i class="iconfont icon-right"></i></span>
    </div>
    <!--品牌制造商直供 列表-->
    <div class="msite_brand_list">
      <ul>
        <li>
          <div class="left">
            <div>海外制造商</div>
            <div>9.9元起</div>
            <div class="new">上新</div>
          </div>
          <img src="./images/8.png"/>
        </li>
        <li>
          <div class="left">
            <div>海外制造商</div>
            <div>9.9元起</div>
            <div class="new">上新</div>
          </div>
          <img src="./images/1.jpg"/>
        </li>
        <li>
          <div class="left">
            <div>海外制造商</div>
            <div>9.9元起</div>
            <div class="new">上新</div>
          </div>
          <img src="./images/1.jpg"/>
        </li>
        <li>
          <div class="left">
            <div>海外制造商</div>
            <div>9.9元起</div>
            <div class="new">上新</div>
          </div>
          <img src="./images/1.jpg"/>
        </li>
      </ul>
    </div>
    <!--新品首发-->
    <div class="msite_newStart">
      <div class="newStart_text">
        <div class="top">新品首发</div>
        <div class="bottom">
          <span>查看全部</span>
          <span><i class="iconfont icon-right"></i></span>
        </div>
      </div>
      <div class="newStart_list">
        <ul ref="newStartUl">
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
        </ul>
      </div>
    </div>
    <!--人气推荐-->
    <div class="msite_popularity">
      <div class="popularity_text">
        <div class="top">人气推荐.好物精选</div>
        <div class="bottom">
          <span>查看全部</span>
          <span><i class="iconfont icon-right"></i></span>
        </div>
      </div>
      <div class="popularity_list">
        <ul ref="popularityUl">
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
          <li>
            <img src="./images/1.jpg"/>
            <!--<div class="activity">满额减</div>-->
            <div class="goodsName">羊皮拼接</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴长靴</div>
            <div class="money">￥199</div>
          </li>
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
          <li>
            <img src="./images/1.jpg"/>
            <div class="activity">满额减</div>
            <div class="goodsName">羊皮拼接过膝长靴</div>
            <div class="describe">羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴羊皮拼接过膝长靴</div>
            <div class="money">￥199</div>
          </li>
        </ul>
      </div>
    </div>
    <!--严选限时购-->
    <div class="msite_timeLimit">
      <div class="timeLimit_content">
        <div class="left">
          <div class="timeLimit">严选限时购</div>
          <div class="time">
            <span>03</span>  :
            <span>15</span>  :
            <span>45</span>
          </div>
          <div class="other">下一场22:00开始</div>
        </div>
        <div class="right">
          <img src="./images/1.jpg"/>
          <div class="price">￥299<br/><span>￥499</span></div>
        </div>
      </div>
    </div>
    <!--福利社-->
    <div class="msite_welfare">
      <img src="./images/1.jpg"/>
    </div>
    <!--专题精选-->
    <div class="msite_brand">
      <span>专题精选</span>
      <span><i class="iconfont icon-right"></i></span>
    </div>
    <!--专题精选列表-->
    <div class="msite_proSelect">
      <ul ref="proSelectUl">
        <li>
          <img src="./images/1.jpg"/>
          <div class="text">
            <span class="describe">今年女鞋更好穿的秘密</span>
            <span class="price">89元起</span>
          </div>
          <div class="content">今年女鞋更好穿的秘密今年女鞋更好穿的秘密今年女鞋更好穿的秘密今年女鞋更好穿的秘密</div>
        </li>
        <li>
          <img src="./images/1.jpg"/>
          <div class="text">
            <span class="describe">今年女鞋更好穿的秘密</span>
            <span class="price">89元起</span>
          </div>
          <div class="content">今年女鞋更好穿的秘密今年女鞋更好穿的秘密今年女鞋更好穿的秘密今年女鞋更好穿的秘密</div>
        </li>
        <li>
          <img src="./images/1.jpg"/>
          <div class="text">
            <span class="describe">今年女鞋更好穿的秘密</span>
            <span class="price">89元起</span>
          </div>
          <div class="content">今年女鞋更好穿的秘密今年女鞋更好穿的秘密今年女鞋更好穿的秘密今年女鞋更好穿的秘密</div>
        </li>
      </ul>
    </div>
    <!--下部整体列表-->
    <div class="msite_cartList">
      <!--居家-->
      <div class="item">
        <div class="item_header">居家好物</div>
        <div class="item_list">
          <div class="">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  export default {
    mounted () {
      const ul= this.$refs.optionsUl;
      const liNodes = ul.children
      let width = 0;
      for (let i = 0; i < liNodes.length; i++) {
        width += liNodes[i].offsetWidth
      }
      ul.style.width = width + 'px';

      new BScroll('.msite_options', {
        click: true,
        scrollX: true
      })



      const newStartUl= this.$refs.newStartUl;
      const newStartLiNodes = newStartUl.children
      let newStartWidth = 0;
      for (let i = 0; i < newStartLiNodes.length; i++) {
        newStartWidth += newStartLiNodes[i].offsetWidth
      }
      newStartUl.style.width = newStartWidth + 'px';

      new BScroll('.newStart_list', {
        click: true,
        scrollX: true
      })

      const popularityUl= this.$refs.popularityUl;
      const popularityLiNodes = popularityUl.children
      let popularityWidth = 0;
      for (let i = 0; i < popularityLiNodes.length; i++) {
        popularityWidth += popularityLiNodes[i].offsetWidth
      }
      popularityUl.style.width = popularityWidth + 'px';

      new BScroll('.popularity_list', {
        click: true,
        scrollX: true
      })


      const proSelectUl= this.$refs.proSelectUl;
      const proSelectLiNodes = proSelectUl.children
      let proSelectWidth = 0;
      for (let i = 0; i < proSelectLiNodes.length; i++) {
        proSelectWidth += proSelectLiNodes[i].offsetWidth
      }
      proSelectUl.style.width = proSelectWidth + 'px';

      new BScroll('.msite_proSelect', {
        click: true,
        scrollX: true
      })
      new Swiper('.swiper-container',{
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.msite
  overflow hidden
  width 100%
  background #F4F4F4
  margin-bottom 50px
  .msite_header
    /*position fixed !important*/
    /*top 0*/
    /*left 0*/
    .header
      width 100%
      height 40px
      background #fff
      .header_title
        height 40px
        line-height 40px
        font-size 18px
        margin-left 15px
        float left
      .header_search
        float left
        width 68%
        height 30px
        line-height 30px
        text-align center
        margin-top 5px
        margin-left 15px
        background #EDEDED
        border-radius 7px
        color #666
        font-size 14px
      .icon-sousuo
        font-size 16px
    .better-container
      padding 0 10px
      display flex
      background #fff
      li
        padding 10px
        white-space nowrap
        &.on
          color #b4282d
          border-bottom 1px solid #b4282d
  .swiper-container
    bottom-border-1px(#e4e4e4)
    height 200px
    background pink
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        img
          width 100%
          height 100%
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774
  .msite_item
    width 100%
    height 30px
    line-height 30px
    background #fff
    li
      float left
      margin 0 19px
      .circle
        width 3px
        height 3px
        margin-top 13px
        border 1px solid #D7D7D7
        border-radius 100%
        float left
      .text
        color #666666
        font-size 12px
        margin-left 3px
        float left
  .msite_brand
    margin-top 10px
    width 100%
    height 55px
    line-height 55px
    text-align center
    background #fff
    font-size 18px
  .msite_brand_list
    width 100%
    height 238px
    background #fff
    ul
      margin 0 8px
      margin-bottom 4px
      width 355px
      height 234px
      li
        float left
        margin-left  2px
        margin-bottom 2px
        width 175px
        height 115px
        background #F4F4F4
        position relative
        .left
          /*width 60%*/
          /*height 100%*/
          font-size 14px
          div
            margin 10px
          .new
            border 1px solid #C9BB9E
            width 30px
            height 18px
            line-height 18px
            text-align center
            font-size 12px
            color #C9BB9E
        img
          position absolute
          top 0
          left 0
          width 100%
          height 100%
  .msite_newStart
    margin-top 10px
    width 100%
    height 400px
    background #fff
    .newStart_text
      width 100%
      height 130px
      background-image url("./images/1.jpg")
      background-size 100% 130px
      background-repeat no-repeat
      text-align center
      margin-bottom 15px
      .top
        width 100%
        height 30px
        padding-top 40px
        color #9EB0C3
        font-size 18px
      .bottom
        font-size 14px
        width 120px
        height 30px
        line-height 30px
        background #D8E5F1
        margin-left 120px
        span
          color #9EB0C3
    .newStart_list
      width 100%
      height 240px
      ul
        width 100%
        height 100%
        display flex
        li
          /*float left*/
          width 140px
          height 100%
          margin-left 15px
          img
            width 140px
            height 140px
          .activity
            width 45px
            height 15px
            line-height 15px
            text-align center
            background #F48F18
            font-size 12px
            margin-left 10px
            margin-top 4px
          .goodsName
            margin-top 6px
            font-size 16px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            color #464646
          .describe
            font-size 14px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            color #CDCDCD
            margin 5px 0
          .money
            font-size 18px
            color #BA3A3E
  .msite_popularity
    margin 10px 0
    width 100%
    height 400px
    background #fff
    .popularity_text
      width 100%
      height 130px
      background-image url("./images/1.jpg")
      background-size 100% 130px
      background-repeat no-repeat
      text-align center
      margin-bottom 15px
      .top
        width 100%
        height 30px
        padding-top 40px
        color #B4A078
        font-size 18px
      .bottom
        font-size 14px
        width 120px
        height 30px
        line-height 30px
        background #F4E9CB
        margin-left 120px
        span
          color #B4A078
    .popularity_list
      width 100%
      height 240px
      ul
        width 100%
        height 100%
        display flex
        li
          /*float left*/
          width 140px
          height 100%
          margin-left 15px
          img
            width 140px
            height 140px
          .activity
            width 45px
            height 15px
            line-height 15px
            text-align center
            background #F48F18
            font-size 12px
            margin-left 10px
            margin-top 4px
          .goodsName
            font-size 16px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            color #464646
            margin-top 6px
          .describe
            font-size 14px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            color #CDCDCD
            margin 5px 0
          .money
            font-size 18px
            color #BA3A3E
  .msite_timeLimit
    width 100%
    height 160px
    background #fff
    padding 15px 0
    .timeLimit_content
      width 325px
      height 160px
      margin 0 25px
      .left
        float left
        width 165px
        height 160px
        .timeLimit
          font-size 20px
          padding-top 35px
          letter-spacing 5px
        .time
          margin 10px 0
          span
            display inline-block
            width 31px
            height 28px
            line-height 28px
            text-align center
            background #444
            border-radius 3px
            color #fff
        .other
          font-size 12px
      .right
        float left
        width 160px
        height 160px
        position relative
        img
          width 100%
          height 100%
        .price
          width 40px
          height 40px
          line-height 18px
          border-radius 100%
          font-size 12px
          text-align center
          background #F59524
          color #fff
          position absolute
          right 15px
          bottom 15px
          span
            text-decoration-line line-through
  .msite_welfare
    margin-top 10px
    width 100%
    height 150px
    img
      width 100%
      height 100%
  .msite_proSelect
    width 100%
    height 227px
    background #fff
    margin-bottom 10px
    ul
      width 100%
      height 100%
      display flex
      li
        width 286px
        height 100%
        margin-left 15px
        img
          width 100%
          height 160px
        .text
          margin 10px 0
          .describe
            display inline-block
            margin-right 70px
            font-size 16px
            color #333
          .price
            display inline-block
            font-size 16px
            color #B4282D
        .content
          font-size 14px
          color #666
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
</style>
