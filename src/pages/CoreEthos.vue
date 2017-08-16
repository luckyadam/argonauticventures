<template>
  <div class="core">
    <Navigation type="white" />
    <div class="core_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="core_top_mask"></div>
      <Banner :content="coreTopContent" class="core_top_main" />
    </div>
    <div class="core_main" v-for="item in mainContent">
      <BlockText :content="item.blockTextContent" />

    </div>
    <Copyright />
  </div>
</template>

<script>
import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import Banner from '@/components/Banner'
import BlockText from '@/components/BlockText'
import Copyright from '@/components/Copyright'

export default {
  components: {
    Navigation,
    Banner,
    BlockText,
    Copyright
  },

  mixins: [mixin],

  data () {
    return {
      coreTopContent: {
        bigTitle: ['OUR'],
        smallTitle: ['CORE', 'ETHOS']
      },
      mainContent: [
        {
          blockTextContent: {
            smallTitle: 'POSIT',
            bigTitle: 'IONING',
            main: ['Our objective is to occupy a clear, unique, and advantageous position with our investors. Our innovative and flexible structure allows us to deploy into a diverse, fluid portfolio of companies by whichever mechanism is suited best to optimizing our returns. We not only invest alongside our investors but stay thoroughly invested in the outcome of the positions in our funds. We share in both the risk and the reward of our portfolio of offerings. Argonautic employs comprehensive quantitative modeling for analysis of duration and payout streams between the venture and hedge fund realms. In our venture segregated portfolios we are able to quantify targeted returns based on stage and offer a spectrum of options. In our hedge fund segregated portfolios we are able to quantify liquidity. The combination of both has created hyper opportunistic situations for our community of investors.']
          },
          img: require('../assets/img/core_banner_1.jpg')
        },
        {
          blockTextContent: {
            smallTitle: 'INTEG',
            bigTitle: 'RITY',
            main: ['At Argonautic we operate with integrity and respect for our investors. We understand that integrity is structural in nature and is a combination of traits that build methodically. The Argonautic value system is the basis of our business code of conduct and is ultimately a coherent set of values adopted and evolved by our organization to guide behavior in preferences in all situations. We are strong advocates of our corporate culture and see it as a social system that shares a set of common values in which such values permitexpectations and collective understandings.']
          },
          img: require('../assets/img/core_banner_2.jpg')
        },
        {
          blockTextContent: {
            smallTitle: 'TRANS',
            bigTitle: 'PARENCY',
            main: ['At Argonautic we believe that transparency is fundamental to our relationships with our investors. Argonautic stays in regular contact with its investors and aims to ensure that our investors have full access to the information they need on their investments. We are open about our operations. We update our investors on the actions we are taking and are upfront and visible about the deals we are investing in and on the performance of our funds. We provide accurate and timely reports on our activities to our investors and use an independent third party auditor to review and audit our activities on an annual basis and an independent tax compliance representative in the jurisdiction in which our companies are incorporated. The companies that we manage provide detailed disclosure documents to all potential and existing investors which detail our legal structure, our incentive structure and our investment strategies and objectives. We clearly identify the risks and rewards to investors so they are fully informed when they invest alongside us. We disclose details of our carefully chosen business partners and service providers to our investors so that they can see a complete picture of our structure and how we conduct our business.']
          },
          img: require('../assets/img/core_banner_3.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .core {
    &_top {
      position: relative;
      width: 100%;
      background: url(../assets/img/core.jpg) 0 0 no-repeat;
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
      &_img {
        &_container {
          width: 100%;
        }
        width: 100%;
        height: auto;
      }
    }
  }
</style>
