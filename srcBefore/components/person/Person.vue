<template>
  <div class="person">
    <!--个人的头部-->
     <div class="person_header">
       <a href="javascript:;">
         <span class="person_icon person_left">
           <i class="iconfont icon-home"></i>
         </span>
       </a>
       <span class="person-title">网易严选</span>
       <a href="javascript:;">
         <span class="person_icon person_right">
            <i class="iconfont icon-sousuo"></i>
         </span>
       </a>
       <a href="javascript:;">
         <span class="person_icon person_right">
            <i class="iconfont icon-gouwuche1"></i>
         </span>
       </a>
     </div>
    <!--个人的内容-->
    <div class="person-content">
      <img src="../../../images/person_01.png" alt="网易严选" class="content_img">
     <div class="person_iphone">
       <span>手机号码登录</span>
     </div>
      <div class="person_emmail" >
        <span >邮箱账号登录</span>
      </div>
      <span class="person_login">手机号快捷注册></span>
     <div class="person-footer">
       <span> <i class="iconfont icon-weixin"></i>微信</span>
       <span>|</span>
       <span> <i class="iconfont icon-qq"></i>QQ</span>
       <span>|</span>
       <span> <i class="iconfont icon-weibo-copy"></i>微博</span>
     </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .person
    width 100%
    .person_header
      height 45px
      width 100%
      padding 0px 5px
      display flex
      align-items center
      .person_left
        float left
      .person_right
        float right
      .person-title
        font-size 20px
        float left
        margin 0px 72px
      .person_icon
        height 100%
        width 50px
        display flex
        justify-content center
        align-items center
        >i
          font-size 28px
    .person-content
      background-color #F2F5F4
      height 600px
      width 100%
      display flex
      flex-direction column
      align-items center
      .content_img
        height 45px
        width 134px
        margin 70px 0px
      .person_iphone
        font-size 25px
        margin 20px
        width 90%
        height 45px
        border-radius 5px
        background-color #b4282d
        display flex
        justify-content center
        align-items center
      .person_emmail
        margin 10px
        width 90%
        height 45px
        border 1px solid #b4282d
        font-size:25px
        display flex
        justify-content center
        align-items center

      .person-footer
        margin-top 200px
        color: #979797
        >span
          padding 20px



</style>
