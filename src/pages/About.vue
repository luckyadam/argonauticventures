<template>
  <div class="about">
    <PageLogo />
    <Navigation type="white" />
    <div class="about_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="about_top_mask"></div>
      <Banner :content="aboutTopContent" class="about_top_main" />
    </div>
    <div class="about_main">
      <p class="about_main_txt" v-for="p in aboutTxt">{{p}}</p>
    </div>
    <Copyright />
  </div>
</template>

<script>
import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import PageLogo from '@/components/PageLogo'
import Banner from '@/components/Banner'
import Copyright from '@/components/Copyright'

export default {
  components: {
    Navigation,
    PageLogo,
    Banner,
    Copyright
  },

  mixins: [mixin],

  data () {
    return {
      aboutTopContent: {
        tip: 'who are we',
        bigTitle: ['about'],
        smallTitle: ['us'],
        desc: 'ARGONAUTIC VENTURES'
      },
      aboutTxt: [
        'Argonautic Ventures SPC was founded in the interests of creating unparalleled fund-of-funds asset allocation models comprising of both private and public markets. The absolute return strategies of our segregated portfolios were formed to generate meaningful alpha coupled with defined liquidity in the form of specified duration. Our structure brings together top tier investors who participate together in all portfolio positions and who jointly profit from our execution.',
        'Argonautic provides access to best-of-class elite funds and has a deep knowledge of emerging managers with significantly higher potential for performance. Our pulse on market dynamics and cycle are fundamental to the selection of our core partnerships as well as our ability to time and employ sector-focused verticals within the right asset classes.',
        'The Argonautic platform encompasses both venture capital and hedge fund investing. From a portfolio management perspective we are strong advocates of active asset management and believe that cerebral analysis and engagement style can produce returns that are consistent in outperformance. Furthermore, that in partnering the realms of venture and equities, we are innovating investment strategy that will ultimately produce game-changing opportunities for our investors.',
        'We are a seasoned team of professionals with decades of investment and client service experience. Our company is built upon a legacy of strong industry relationships and a track record of success in both the venture and hedge fund industries. We are highly experienced in raising and co-managing right-sized funds and are a leader in portfolio creation within alternatives.',
        'Argonautic Management'
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .about {
    &_top {
      position: relative;
      width: 100%;
      background: url(../assets/img/about.jpg) 0 0 no-repeat;
      background-size: cover;
      &_mask {
        width:  100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .8);
      }
      &_main {
        left: 0;
        bottom: rem(166px);
      }
    }
    &_main {
      padding: rem(50px) rem(32px) 0 rem(32px);
      font-size: 12px;
      color: #8d8d8d;
      &_txt {
        line-height: rem(44px);
        margin-bottom: rem(56px);
      }
    }
  }
</style>
