<template>
  <div class="co">
    <Navigation type="white" />
    <div class="co_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="co_top_mask"></div>
      <Banner :content="coTopContent" class="co_top_main" />
    </div>
    <div class="co_main clearfix">
      <a v-for="item in partners" :href="item.url" target="_blank" class="co_main_lk">
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
            'url': 'http://a16z.com/'
          },
          {
            'img': require('../assets/img/partners/p002.png'),
            'url': 'https://arenavc.com/'
          },
          {
            'img': require('../assets/img/partners/p003.png'),
            'url': 'http://aspectventures.com/'
          },
          {
            'img': require('../assets/img/partners/p004.png'),
            'url': 'http://atxseedventures.com/'
          },
          {
            'img': require('../assets/img/partners/p007.png'),
            'url': 'https://www.airware.com/'
          },
          {
            'img': require('../assets/img/partners/p008.png'),
            'url': 'https://bluventureinvestors.com/'
          },
          {
            'img': require('../assets/img/partners/p009.png'),
            'url': 'http://www.boldcapitalpartners.com/'
          },
          {
            'img': require('../assets/img/partners/p010.png'),
            'url': 'http://www.brooklynbridge.vc/'
          },
          {
            'img': require('../assets/img/partners/p011.png'),
            'url': 'http://blumbergcapital.com/'
          },
          {
            'img': require('../assets/img/partners/p012.png'),
            'url': 'http://chaacventures.com/'
          },
          {
            'img': require('../assets/img/partners/p013.png'),
            'url': 'https://www.battery.com'
          },
          {
            'img': require('../assets/img/partners/p014.png'),
            'url': 'http://caffeinatedcapital.com/'
          },
          {
            'img': require('../assets/img/partners/p015.png'),
            'url': 'http://canaan.com/'
          },
          {
            'img': require('../assets/img/partners/p016.png'),
            'url': 'http://chaacventures.com/'
          },
          {
            'img': require('../assets/img/partners/p017.png'),
            'url': 'http://www.coriginventures.com/'
          },
          {
            'img': require('../assets/img/partners/p018.png'),
            'url': 'http://correlationvc.com/'
          },
          {
            'img': require('../assets/img/partners/p019.png'),
            'url': 'https://www.cultivationcapital.com'
          },
          {
            'img': require('../assets/img/partners/p020.png'),
            'url': 'http://www.viola-group.com/'
          },
          {
            'img': require('../assets/img/partners/p021.png'),
            'url': 'http://www.crosslinkcapital.com/'
          },
          {
            'img': require('../assets/img/partners/p022.png'),
            'url': 'https://www.dcm.com/'
          },
          {
            'img': require('../assets/img/partners/p023.png'),
            'url': 'https://dfj.com/'
          },
          {
            'img': require('../assets/img/partners/p024.png'),
            'url': 'http://www.dfjdragon.com'
          },
          {
            'img': require('../assets/img/partners/p025.png'),
            'url': 'https://drapernexus.com/'
          },
          {
            'img': require('../assets/img/partners/p026.png'),
            'url': 'http://www.dcvc.com'
          },
          {
            'img': require('../assets/img/partners/p027.png'),
            'url': 'http://www.eniac.com/'
          },
          {
            'img': require('../assets/img/partners/p028.png'),
            'url': 'https://www.felicis.com/'
          },
          {
            'img': require('../assets/img/partners/p029.png'),
            'url': 'http://www.foundercollective.com/'
          },
          {
            'img': require('../assets/img/partners/p030.png'),
            'url': 'http://foundersfund.com/'
          },
          {
            'img': require('../assets/img/partners/p031.png'),
            'url': 'https://fidelity.com/'
          },
          {
            'img': require('../assets/img/partners/p032.png'),
            'url': 'http://flywheelventures.com/'
          },
          {
            'img': require('../assets/img/partners/p033.png'),
            'url': 'http://formation8.com/'
          },
          {
            'img': require('../assets/img/partners/p034.png'),
            'url': 'http://www.glengaryllc.com'
          },
          {
            'img': require('../assets/img/partners/p035.png'),
            'url': 'http://www.greycroft.com/'
          },
          {
            'img': require('../assets/img/partners/p036.png'),
            'url': 'http://www.generalcatalyst.com/'
          },
          {
            'img': require('../assets/img/partners/p037.png'),
            'url': 'http://www.goldmansachs.com/'
          },
          {
            'img': require('../assets/img/partners/p038.png'),
            'url': 'http://hydeparkvp.com/'
          },
          {
            'img': require('../assets/img/partners/p039.png'),
            'url': 'http://www.harmonyvp.com/'
          },
          {
            'img': require('../assets/img/partners/p040.png'),
            'url': 'http://www.huronrivervc.com/'
          },
          {
            'img': require('../assets/img/partners/p041.png'),
            'url': 'http://www.indicatorventures.com'
          },
          {
            'img': require('../assets/img/partners/p042.png'),
            'url': 'http://www.innospringseedfund.com/'
          },
          {
            'img': require('../assets/img/partners/p043.png'),
            'url': 'http://www.iconiqcapital.com/'
          },
          {
            'img': require('../assets/img/partners/p044.png'),
            'url': 'https://indexventures.com/'
          },
          {
            'img': require('../assets/img/partners/p045.png'),
            'url': 'https://ivp.com/'
          },
          {
            'img': require('../assets/img/partners/p047.png'),
            'url': 'http://www.khoslaventures.com/'
          },
          {
            'img': require('../assets/img/partners/p048.png'),
            'url': 'http://www.krillionventures.com'
          },
          {
            'img': require('../assets/img/partners/p049.png'),
            'url': 'http://kpcb.net/'
          },
          {
            'img': require('../assets/img/partners/p050.png'),
            'url': 'http://www.lererhippeau.com/'
          },
          {
            'img': require('../assets/img/partners/p051.png'),
            'url': 'https://lowercasecapital.com/'
          },
          {
            'img': require('../assets/img/partners/p052.png'),
            'url': 'http://www.lererhippeau.com/'
          },
          {
            'img': require('../assets/img/partners/p053.png'),
            'url': 'http://www.lsvp.com/'
          },
          {
            'img': require('../assets/img/partners/p054.png'),
            'url': 'http://matrixpartners.com/'
          },
          {
            'img': require('../assets/img/partners/p055.png'),
            'url': 'http://mercuryfund.com/'
          },
          {
            'img': require('../assets/img/partners/p056.png'),
            'url': 'http://www.middlelandcap.com/'
          },
          {
            'img': require('../assets/img/partners/p057.png'),
            'url': 'http://mithril.com/'
          },
          {
            'img': require('../assets/img/partners/p058.png'),
            'url': 'http://www.matrixpartners.com'
          },
          {
            'img': require('../assets/img/partners/p059.png'),
            'url': 'http://morganstanley.com/'
          },
          {
            'img': require('../assets/img/partners/p060.png'),
            'url': 'http://www.nextviewventures.com'
          },
          {
            'img': require('../assets/img/partners/p061.png'),
            'url': 'http://novavg.com/'
          },
          {
            'img': require('../assets/img/partners/p062.png'),
            'url': 'http://www.nea.com/'
          },
          {
            'img': require('../assets/img/partners/p063.png'),
            'url': 'https://newgencap.com/'
          },
          {
            'img': require('../assets/img/partners/p064.png'),
            'url': 'http://www.oakhcft.com'
          },
          {
            'img': require('../assets/img/partners/p065.png'),
            'url': 'https://pritzkergroup.com/'
          },
          {
            'img': require('../assets/img/partners/p066.png'),
            'url': 'http://pjc.vc/'
          },
          {
            'img': require('../assets/img/partners/p067.png'),
            'url': 'https://partechventures.com/'
          },
          {
            'img': require('../assets/img/partners/p068.png'),
            'url': 'http://www.precursorvc.com/'
          },
          {
            'img': require('../assets/img/partners/p069.png'),
            'url': 'http://preludeventures.com/'
          },
          {
            'img': require('../assets/img/partners/p070.png'),
            'url': 'https://www.pritzkergroup.com'
          },
          {
            'img': require('../assets/img/partners/p071.png'),
            'url': 'http://qedinvestors.com/'
          },
          {
            'img': require('../assets/img/partners/p072.png'),
            'url': 'http://www.redpoint.com/about/'
          },
          {
            'img': require('../assets/img/partners/p073.png'),
            'url': 'https://www.rivervest.com/'
          },
          {
            'img': require('../assets/img/partners/p074.png'),
            'url': 'http://www.romuluscap.com/'
          },
          {
            'img': require('../assets/img/partners/p075.png'),
            'url': 'http://route66ventures.com/'
          },
          {
            'img': require('../assets/img/partners/p076.png'),
            'url': 'http://www.sapphireventures.com'
          },
          {
            'img': require('../assets/img/partners/p076-1.png'),
            'url': 'https://www.sequoiacap.com/'
          },
          {
            'img': require('../assets/img/partners/p077.png'),
            'url': 'http://socialcapital.com/'
          },
          {
            'img': require('../assets/img/partners/p078.png'),
            'url': 'http://svangel.com/'
          },
          {
            'img': require('../assets/img/partners/p079.png'),
            'url': 'http://spectrum28.com/'
          },
          {
            'img': require('../assets/img/partners/p080.png'),
            'url': 'http://www.stormventures.com/'
          },
          {
            'img': require('../assets/img/partners/p081.png'),
            'url': 'http://www.tencent.com/'
          },
          {
            'img': require('../assets/img/partners/p082.png'),
            'url': 'http://www.tenoneten.com'
          },
          {
            'img': require('../assets/img/partners/p083.png'),
            'url': 'http://thrivecap.com/'
          },
          {
            'img': require('../assets/img/partners/p084.png'),
            'url': 'http://titan-partners.com/'
          },
          {
            'img': require('../assets/img/partners/p085.png'),
            'url': 'http://www.touchdownvc.com/'
          },
          {
            'img': require('../assets/img/partners/p086.png'),
            'url': 'https://www.tyltventures.com/'
          },
          {
            'img': require('../assets/img/partners/p087.png'),
            'url': 'http://www.techstars.com/'
          },
          {
            'img': require('../assets/img/partners/p088.png'),
            'url': 'https://upfront.com/'
          },
          {
            'img': require('../assets/img/partners/p005.png'),
            'url': 'http://valuestreamlabs.com/'
          },
          {
            'img': require('../assets/img/partners/p089.png'),
            'url': 'https://wiharper.com/'
          },
          {
            'img': require('../assets/img/partners/p090.png'),
            'url': 'https://www.wondervc.com/'
          },
          {
            'img': require('../assets/img/partners/p091.png'),
            'url': 'http://wrvcapital.com/mobile.php'
          },
          {
            'img': require('../assets/img/partners/p092.png'),
            'url': 'https://winklevosscapital.com/'
          },
          {
            'img': require('../assets/img/partners/p093.png'),
            'url': 'https://www.wellington.com/en'
          },
          {
            'img': require('../assets/img/partners/p094.png'),
            'url': 'http://www.ycombinator.com/'
          },
          {
            'img': require('../assets/img/partners/p095.png'),
            'url': 'http://www.zhenfund.com'
          },
          {
            'img': require('../assets/img/partners/p096.png'),
            'url': 'https://500.co/'
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
