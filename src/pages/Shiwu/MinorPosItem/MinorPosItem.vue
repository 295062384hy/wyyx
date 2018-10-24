<template>
  <a class="minorPosItem" href="javascript:;" v-if="minorData">
    <div class="topicInfo">
      <div class="author">
        <div class="avatar">
          <img :src="minorData.avatar">
        </div>
        <div class="nickname">{{minorData.nickname}}</div>
      </div>
      <div class="line1">
        {{minorData.title}}
      </div>
      <div class="line2">
        {{minorData.subTitle}}
      </div>
    </div>
    <div class="minorPic" :style="{backgroundImage:`url(${minorData.picUrl})`}">
      <div class="topicTag">
        <div class="tag">{{minorData.typeName}}</div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    props:{
      minorData:Object
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .minorPosItem
    display: flex;
    background-color: #fff;
    color: #333;
    border: 1px solid #d9d9d9;
    border-radius: .05333rem;
    margin-bottom: .4rem
    .topicInfo
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      position: relative;
      padding-left: .26667rem;
      padding-right: .4rem
      .author
        display: flex;
        align-items: center
        font-size: 0.26666666666666666rem
        margin-bottom: .33333rem
        margin-top: .33333rem
        .avatar
          width: 0.64rem;
          height: 0.64rem;
          margin-right: 0.16666666666666667rem;
          border-radius: 50%
          overflow: hidden;
          border: 1px solid #d9d9d9
          img
            display: block;
            width: 100%;
            height: 100%


        .nickname
          color: #333;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden


      .line1
        margin-right: .4rem;
        font-size: .42667rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden
        margin-bottom: .18667rem;
        line-height: 1.2
      .line2
        width 358*$rpx
        height 67*$rpx
        position: relative;
        font-size: .32rem;
        line-height: 1.5;
        color: #7f7f7f
        overflow: hidden;
        text-overflow: ellipsis
    .minorPic
      position: relative;
      width: 3.73333rem;
      height: 3.62667rem
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat
      .topicTag
        position: absolute;
        top: -.13333rem;
        left: .13333rem
        .tag
          display: inline-block;
          padding: 0 .21333rem;
          height: .48rem;
          line-height: .48rem;
          background-color: rgba(255,255,255,.9);
          border: 1px solid #d9d9d9;
          border-radius: .26667rem;
          color: #333
          font-size: 24*$rpx

</style>
