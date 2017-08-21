<template>
  <div class="portfolio">
    <Navigation type="white" />
    <div class="portfolio_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="portfolio_top_mask"></div>
      <Banner :content="portfolioTopContent" class="portfolio_top_main" />
    </div>
    <div class="portfolio_main clearfix">
      <a v-for="item in partners" :href="item.url" class="portfolio_main_lk">
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
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c002.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c003.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c004.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c005.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c006.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c007.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c008.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c009.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c010.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c011.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c012.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c013.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c014.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c015.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c017.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c018.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c019.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c020.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c021.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c022.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c023.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c024.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c025.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c026.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c027.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c028.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c029.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c030.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c031.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c033.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c034.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c035.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c036.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c037.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c038.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c039.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c040.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c041.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c042.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c043.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c044.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c045.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c046.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c047.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c048.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c049.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c050.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c051.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c052.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/portfolio/c053.png'),
            'url': '',
            'name': ''
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
