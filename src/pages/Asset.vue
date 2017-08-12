<template>
  <div class="asset" :style="{ height: this.winSize.height + 'px' }">
    <Navigation type="white" />
    <div class="asset_page">
      <div class="asset_page_mask"></div>
      <Banner :content="assetContent" class="asset_content" />
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import Banner from '@/components/Banner'

export default {
  components: {
    Navigation,
    Banner
  },

  mixins: [mixin],

  data () {
    return {
      assetContent: {
        bigTitle: ['venture capital'],
        smallTitle: ['ASSET  CLASS'],
        desc: 'Venture capital (VC) is a type of private equity,a form of financing that is provided by firms or funds to small, early-stage, emerging firms that are deemed to have high growth potential, or which have demonstrated high growth.'
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .asset {
    position: relative;
    &_page {
      width:  100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
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
    }
    .banner {
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
