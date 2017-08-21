<template>
  <div class="portfolio">
    <Navigation type="white" />
    <div class="portfolio_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="portfolio_top_mask"></div>
      <Banner :content="portfolioTopContent" class="portfolio_top_main" />
    </div>
    <div class="portfolio_main clearfix">
      <a v-for="item in partners" :href="item.url" target="_blank" class="portfolio_main_lk">
        <i class="portfolio_main_ver"></i>
        <img v-lazy="item.img" class="portfolio_main_img" >
      </a>
    </div>
    <Copyright />
  </div>
</template>

<script>
  import mixin from '@/mixins'
  import Navigation from '@/components/Navigation'
  import Banner from '@/components/Banner'
  import Copyright from '@/components/Copyright'

  export default {
    components: {
      Navigation,
      Banner,
      Copyright
    },

    mixins: [mixin],

    data () {
      return {
        portfolioTopContent: {
          bigTitle: ['PORTFOLIO COMPANIES'],
          smallTitle: ['OF  OUR', 'PARTNERS']
        },

        partners: [
          {
            'img': require('../assets/img/portfolio/c001.png'),
            'url': 'https://www.crunchbase.com/organization/adfreeq#/entity'
          },
          {
            'img': require('../assets/img/portfolio/c002.png'),
            'url': 'https://www.amplehills.com/'
          },
          {
            'img': require('../assets/img/portfolio/c003.png'),
            'url': 'http://bensonhillbio.com/'
          },
          {
            'img': require('../assets/img/portfolio/c004.png'),
            'url': 'https://www.betterweekdays.com/'
          },
          {
            'img': require('../assets/img/portfolio/c005.png'),
            'url': 'http://www.bractlet.com/'
          },
          {
            'img': require('../assets/img/portfolio/c006.png'),
            'url': 'http://www.crazyforeducation.com/'
          },
          {
            'img': require('../assets/img/portfolio/c007.png'),
            'url': 'https://www.comparaguru.com/'
          },
          {
            'img': require('../assets/img/portfolio/c008.png'),
            'url': 'https://cruncher.ai/'
          },
          {
            'img': require('../assets/img/portfolio/c009.png'),
            'url': 'http://cohealo.com/'
          },
          {
            'img': require('../assets/img/portfolio/c010.png'),
            'url': 'http://www.essinc.com'
          },
          {
            'img': require('../assets/img/portfolio/c011.png'),
            'url': 'https://www.epharmix.com/'
          },
          {
            'img': require('../assets/img/portfolio/c012.png'),
            'url': 'http://www.euclises.com/'
          },
          {
            'img': require('../assets/img/portfolio/c013.png'),
            'url': 'http://www.fairwords.co/'
          },
          {
            'img': require('../assets/img/portfolio/c014.png'),
            'url': 'http://www.forelight.com/'
          },
          {
            'img': require('../assets/img/portfolio/c015.png'),
            'url': 'http://www.flexreceipts.com/'
          },
          {
            'img': require('../assets/img/portfolio/c017.png'),
            'url': 'https://www.gremlinsocial.com'
          },
          {
            'img': require('../assets/img/portfolio/c018.png'),
            'url': 'https://www.hatchbuck.com/'
          },
          {
            'img': require('../assets/img/portfolio/c019.png'),
            'url': 'http://www.holganix.com/'
          },
          {
            'img': require('../assets/img/portfolio/c020.png'),
            'url': 'https://www.humi.ca/'
          },
          {
            'img': require('../assets/img/portfolio/c021.png'),
            'url': 'http://www.immunophotonics.com/'
          },
          {
            'img': require('../assets/img/portfolio/c022.png'),
            'url': 'https://www.crunchbase.com/product/indalo#/entity'
          },
          {
            'img': require('../assets/img/portfolio/c023.png'),
            'url': 'https://www.iopipe.com/'
          },
          {
            'img': require('../assets/img/portfolio/c024.png'),
            'url': 'http://www.inspiredme.com/'
          },
          {
            'img': require('../assets/img/portfolio/c025.png'),
            'url': 'https://www.crunchbase.com/organization/jumpcut-studios#/entity'
          },
          {
            'img': require('../assets/img/portfolio/c026.png'),
            'url': 'https://www.joymode.com/'
          },
          {
            'img': require('../assets/img/portfolio/c027.png'),
            'url': 'http://kultevat.com/'
          },
          {
            'img': require('../assets/img/portfolio/c028.png'),
            'url': 'http://www.lendingfront.com/'
          },
          {
            'img': require('../assets/img/portfolio/c029.png'),
            'url': 'http://liquiglide.com/'
          },
          {
            'img': require('../assets/img/portfolio/c030.png'),
            'url': 'http://neurosmedical.com/'
          },
          {
            'img': require('../assets/img/portfolio/c031.png'),
            'url': 'https://www.nutanix.com/'
          },
          {
            'img': require('../assets/img/portfolio/c033.png'),
            'url': 'https://www.popbookings.com/'
          },
          {
            'img': require('../assets/img/portfolio/c034.png'),
            'url': 'http://proteosense.com/'
          },
          {
            'img': require('../assets/img/portfolio/c035.png'),
            'url': 'https://payforward.com/'
          },
          {
            'img': require('../assets/img/portfolio/c036.png'),
            'url': 'https://postmates.com/'
          },
          {
            'img': require('../assets/img/portfolio/c037.png'),
            'url': 'http://getquilt.com'
          },
          {
            'img': require('../assets/img/portfolio/c038.png'),
            'url': 'http://rebound-tech.com/'
          },
          {
            'img': require('../assets/img/portfolio/c039.png'),
            'url': 'http://www.raptormaps.com/'
          },
          {
            'img': require('../assets/img/portfolio/c040.png'),
            'url': 'http://www.streamlinksoftware.com'
          },
          {
            'img': require('../assets/img/portfolio/c041.png'),
            'url': 'https://www.letskedaddle.com/'
          },
          {
            'img': require('../assets/img/portfolio/c042.png'),
            'url': 'https://www.scratchpay.com/'
          },
          {
            'img': require('../assets/img/portfolio/c043.png'),
            'url': 'https://www.tansna.com/'
          },
          {
            'img': require('../assets/img/portfolio/c044.png'),
            'url': 'http://www.TimeToCater.com'
          },
          {
            'img': require('../assets/img/portfolio/c045.png'),
            'url': 'https://www.crunchbase.com/organization/hellotwist#/entity'
          },
          {
            'img': require('../assets/img/portfolio/c046.png'),
            'url': 'http://www.tachyus.com/'
          },
          {
            'img': require('../assets/img/portfolio/c047.png'),
            'url': 'https://tribogenics.com/'
          },
          {
            'img': require('../assets/img/portfolio/c048.png'),
            'url': 'https://www.crunchbase.com/organization/the-honest-company#/entity'
          },
          {
            'img': require('../assets/img/portfolio/c049.png'),
            'url': 'https://www.vendigo.com/en/'
          },
          {
            'img': require('../assets/img/portfolio/c050.png'),
            'url': 'https://wunder.org/'
          },
          {
            'img': require('../assets/img/portfolio/c051.png'),
            'url': 'https://www.zenprospect.com/'
          },
          {
            'img': require('../assets/img/portfolio/c052.png'),
            'url': 'http://www.zincplatform.com/'
          },
          {
            'img': require('../assets/img/portfolio/c053.png'),
            'url': 'https://zerocater.com/'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/sass/_common.scss';

  .portfolio {
    &_top {
      position: relative;
      width: 100%;
      background: url(../assets/img/portfolio.jpg) 0 0 no-repeat;
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
        bottom: rem(20px);
      }
      &_split {
        display: inline-block;
        vertical-align: middle;
        width: rem(28px);
        height: rem(14px);
        background-color: #fff;
        margin-left: rem(15px);
        margin-right: rem(18px);
      }
    }
    &_main {
      background: #161616;
      padding: rem(50px) rem(32px) 0 rem(32px);
      &_lk {
        width: 33.33%;
        height: rem(250px);
        float: left;
        text-align: center;
      }
      &_ver {
        display: inline-block;
        width: 1px;
        height: 100%;
        vertical-align: middle;
      }
      &_img {
        max-width: 70%;
        height: auto;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
</style>
