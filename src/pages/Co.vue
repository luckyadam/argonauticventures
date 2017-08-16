<template>
  <div class="co">
    <Navigation type="white" />
    <div class="co_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="co_top_mask"></div>
      <Banner :content="coTopContent" class="co_top_main" />
    </div>
    <div class="co_main clearfix">
      <a v-for="item in partners" :href="item.url" class="co_main_lk">
        <i class="co_main_ver"></i>
        <img v-lazy="item.img" class="co_main_img" >
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
        coTopContent: {
          bigTitle: ['CO<span class="co_top_split"></span>INVESTOR'],
          smallTitle: ['NETWORK OF', 'OUR PARTNERS']
        },

        partners: [
          {
            'img': require('../assets/img/partners/p001.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p002.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p003.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p004.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p005.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p006.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p007.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p008.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p009.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p010.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p011.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p012.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p013.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p014.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p015.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p016.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p017.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p018.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p019.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p020.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p021.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p022.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p023.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p024.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p025.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p026.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p027.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p028.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p029.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p030.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p031.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p032.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p033.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p034.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p035.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p036.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p037.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p038.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p039.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p040.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p041.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p042.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p043.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p044.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p045.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p046.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p047.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p048.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p049.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p050.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p051.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p052.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p053.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p054.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p055.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p056.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p057.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p058.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p059.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p060.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p061.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p062.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p063.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p064.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p065.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p066.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p067.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p068.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p069.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p070.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p071.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p072.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p073.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p074.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p075.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p076.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p077.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p078.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p079.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p080.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p081.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p082.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p083.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p084.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p085.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p086.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p087.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p088.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p089.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p090.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p091.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p092.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p093.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p094.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p095.png'),
            'url': '',
            'name': ''
          },
          {
            'img': require('../assets/img/partners/p096.png'),
            'url': '',
            'name': ''
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .co {
    &_top {
      position: relative;
      width: 100%;
      background: url(../assets/img/co.jpg) 0 0 no-repeat;
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
        bottom: rem(200px);
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
        height: rem(170px);
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
