<template>
  <div class="asset" :style="{ height: this.winSize.height + 'px' }">
    <Navigation type="white" />
    <div class="asset_mask"></div>
    <div class="asset_page asset_page_1">
      <div class="asset_main">
        <Banner :content="assetContent1" class="asset_content" />
        <Explore />
      </div>
    </div>
    <div class="asset_page asset_page_2">
      <div class="asset_main">
        <Banner :content="assetContent2" class="asset_content" />
        <Explore />
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import Banner from '@/components/Banner'
import Explore from '@/components/Explore'

export default {
  components: {
    Navigation,
    Banner,
    Explore
  },

  mixins: [mixin],

  data () {
    return {
      assetContent1: {
        bigTitle: ['venture capital'],
        smallTitle: ['ASSET  CLASS'],
        desc: 'Venture capital (VC) is a type of private equity,a form of financing that is provided by firms or funds to small, early-stage, emerging firms that are deemed to have high growth potential, or which have demonstrated high growth.'
      },
      assetContent2: {
        bigTitle: ['vhedge fund'],
        smallTitle: ['ASSET  CLASS'],
        desc: 'A Hedge Fund is an investment fund that invests in a variety of assets, often with complex portfolio-construction and risk-management techniques. Hedge funds are generally distinct from mutual funds as their use of leverage is not capped by regulators and distinct from private equity funds as the majority of hedge funds invest in relatively liquid assets.'
      }
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
  }
</style>
