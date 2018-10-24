<template>
  <div class="fenlei">
    <header class="header">
      <div class="search">
        <div class="content">
          <i class="icon"></i>
          搜索商品, 共13230款好物
        </div>
      </div>
    </header>
    <section class="section">
      <div class="navContiner">
        <div class="navScroll">
          <ul class="navList">
            <li :class="{active:isActive === index}" v-if="fenlei_data.length"
                v-for="(fenlei,index) in fenlei_data" :key="index" @click = 'switchfenlei(index,fenlei)'>
              <a class="txt" href="javascript:;">{{fenlei.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cateContiner">
        <div class="catetScroll">
          <div class="cates">
            <div class="banner" :style="{backgroundImage: `url(${showfenlei.bannerUrl})`}"></div>
            <div class="cateList" v-if="fenlei_data.length">
              <SpecialItem v-if="!showfenlei.level" :showfenlei = 'showfenlei'/>
              <fenleiItem v-else :showfenlei = 'showfenlei'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import fenleiItem from './fenleiItem/fenleiItem.vue'
  import SpecialItem from './SpecialItem/SpecialItem.vue'
  export default {
    mounted(){
      this.$store.dispatch('getfenleiData',()=>{
        this.$nextTick(()=>{
          this._initScroll();
          this.showfenlei = this.fenlei_data[0]
        })
      })
    },
    data() {
      return {
        isActive:0,
        showfenlei:{}
      }
    },
    computed:{
      ...mapState(['fenlei_data'])
    },
    methods:{
      switchfenlei(index,fenlei){
        this.isActive = index;
        this.showfenlei = fenlei;
      },
      _initScroll(){
        const navScroll = document.querySelector('.navScroll');
        const catetScroll = document.querySelector('.catetScroll');
        this.navScroll = new BScroll(navScroll,{
          click: true,
          scrollX:false,
          scrollY:true,
          probeType: 1,
          scrollbar:true
        });
        this.catetScroll = new BScroll(catetScroll,{
          click: true,
          scrollX:false,
          scrollY:true,
          probeType: 1,
          scrollbar:true
        });
      }
    },
    components:{
      fenleiItem,
      SpecialItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.fenlei
  width 100%
  height 100%
  >.header
    width 100%
    height: 88*$rpx
    position fixed
    top 0
    left 0
    z-index 5
    &::after
      content: '';
      position: absolute;
      background-color: #d9d9d9;
      left: 0;
      width: 100%;
      height: 1*$rpx;
      -webkit-transform-origin: 50% 100% 0;
      transform-origin: 50% 100% 0;
      bottom: 0
    >.search
      display: flex;
      align-items: center;
      height: 1.17333rem;
      padding: 0 .4rem;
      background-color: #fff;
      position: relative
      >.content
        width 100%
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        >.icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
          margin-right: .13333rem

  >.section
    position relative
    width 100%
    height 100%
    padding-top 88*$rpx
    box-sizing border-box
    background-color: #fff
    >.navContiner
      position: absolute;
      top: 88*$rpx
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 2.16rem;
      &::after
        content: '';
        position: absolute;
        background-color: rgba(0,0,0,.15);
        top: 0;
        bottom: 0;
        width: 1*$rpx;
        -webkit-transform-origin: 100% 50% 0;
        transform-origin: 100% 50% 0;
        right: 0
      >.navScroll
        width 100%
        height 100%
        overflow hidden
        position: relative
        ul
          li
            position relative
            width: 100%;
            height: .866667rem;
            text-align: center;
            border: none
            margin-top: .53333rem
            >.txt
              display: block;
              color: #333;
              font-size: .37333rem;
              line-height: .66667rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            &.active
              &::before
                content: ' ';
                position: absolute;
                top: 0;
                left: 0;
                height 100%
                width: .08rem;
                background-color: #ab2b2b
              >.txt
                color: #ab2b2b
    >.cateContiner
      height 100%
      box-sizing border-box
      margin-left: 2.16rem;
      padding: .4rem .4rem .28rem
      >.catetScroll
        width 100%
        height 100%
        overflow hidden
        position: relative
        >.cates
          >.banner
            width: 100%;
            height: 2.56rem;
            display: table;
            margin-bottom: .42667rem;
            background: center no-repeat #f4f4f4;
            background-size: cover;
            border-radius: 4*$rpx
</style>
