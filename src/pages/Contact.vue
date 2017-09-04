<template>
  <div class="contact" :style="{ height: this.winSize.height + 'px' }">
    <PageLogo />
    <Navigation type="white" />
    <div class="contact_mask"></div>
    <div class="contact_main">
      <Banner :content="contactContent" class="contact_content" />
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import PageLogo from '@/components/PageLogo'
import Banner from '@/components/Banner'

export default {
  components: {
    Navigation,
    PageLogo,
    Banner
  },

  mixins: [mixin],

  data () {
    return {
      contactContent: {
        bigTitle: ['CONTACT'],
        smallTitle: ['US'],
        desc: '<p class="banner_desc_p">Email: info@argonauticventures.com</p><p class="banner_desc_p">Willow House, Cricket Square Grand Cayman KY1-1103, Cayman Islands</p>'
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .contact {
    position: relative;
    width: 100%;
    background: url(../assets/img/contact.jpg) 0 0 no-repeat;
    background-size: cover;
    &_mask {
      width:  100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .55);
    }
    &_main {
      position: absolute;
      bottom: rem(40px);
      left: 0;
    }
    .banner {
      position: static;
      &_title {
        font-size: 32px;
      }
      &_desc {
        font-size: 12px;
        color: #8d8d8d;
        text-transform: none;
        &_p {
          line-height: rem(50px);
        }
      }
    }
  }
</style>
