<template>
  <div class="asset" :style="{ height: this.winSize.height + 'px' }">
    <PageLogo />
    <Navigation type="white" />
    <div class="asset_mask"></div>
    <swiper class="asset_page_container" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <swiper-slide class="asset_page asset_page_1">
        <div class="asset_main">
          <Banner :content="vcAssetContent" class="asset_content" />
          <Explore link="/vc-asset-class" />
        </div>
      </swiper-slide>
      <swiper-slide class="asset_page asset_page_2">
        <div class="asset_main">
          <Banner :content="hfAssetContent" class="asset_content" />
          <Explore link="/hf-asset-class" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import PageLogo from '@/components/PageLogo'
import Banner from '@/components/Banner'
import Explore from '@/components/Explore'

export default {
  components: {
    Navigation,
    PageLogo,
    Banner,
    Explore,

    swiper,
    swiperSlide
  },

  mixins: [mixin],

  data () {
    return {
      notNextTick: true,
      swiperOption: {
        pagination: '.swiper-pagination',
        direction: 'vertical'
      },
      vcAssetContent: {
        bigTitle: ['VENTURE CAPITAL'],
        smallTitle: ['ASSET  CLASS'],
        desc: 'Venture capital (VC) is a type of private equity,a form of financing that is provided by firms or funds to small, early-stage, emerging firms that are deemed to have high growth potential, or which have demonstrated high growth.'
      },
      hfAssetContent: {
        bigTitle: ['HEDGE FUND'],
        smallTitle: ['ASSET  CLASS'],
        desc: 'A Hedge Fund is an investment fund that invests in a variety of assets, often with complex portfolio-construction and risk-management techniques. Hedge funds are generally distinct from mutual funds as their use of leverage is not capped by regulators and distinct from private equity funds as the majority of hedge funds invest in relatively liquid assets.'
      }
    }
  },

  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .asset {
    position: relative;
    width: 100%;
    background: url(../assets/img/asset.jpg) 0 0 no-repeat;
    background-size: cover;
    &_mask {
      width:  100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .55);
    }
    &_page {
      width:  100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
      &_container {
        width:  100%;
        height: 100%;
      }
    }
    &_main {
      position: absolute;
      bottom: rem(108px);
      left: 0;
    }
    .banner {
      position: static;
      margin-bottom: rem(42px);
      &_title {
        font-size: 32px;
      }
      &_desc {
        font-size: 12px;
        color: #8d8d8d;
        text-transform: none;
      }
    }
    .swiper-pagination-bullet {
      background: #fff;
    }
    .swiper-pagination-bullet-active {
      background: #007aff;
    }
  }
</style>
