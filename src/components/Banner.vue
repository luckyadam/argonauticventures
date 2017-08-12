<template>
  <div class="banner">
    <p class="banner_tip">{{content.tip}}</p>
    <div class="banner_deco banner_deco_top"></div>
    <div class="banner_title">
      <p class="banner_title_b" v-for="big in content.bigTitle">{{big}}</p>
      <p class="banner_title_s" v-for="small in content.smallTitle">{{small}}</p>
    </div>
    <div class="banner_deco banner_deco_bottom"></div>
    <div class="banner_desc">{{content.desc}}</div>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    props: {
      content: Object
    }
  }
</script>

<style lang="scss">
  @import '../assets/sass/_common';
  $blueColor: #017ad7;
  $whiteColor: #ffffff;

  .banner {
    position: absolute;
    z-index: 1;
    padding-left: rem(32px);
    &_tip {
      font-size: 13px;
      color: $blueColor;
      line-height: 1;
      margin-bottom: rem(58px);
      text-transform: uppercase;
    }
    &_deco {
      width: rem(20px);
      height: rem(4px);
      &_top {
        background-color: $whiteColor;
      }
      &_bottom {
        background-color: $blueColor;
        margin-bottom: rem(64px);
      }
    }
    &_title {
      color: $whiteColor;
      text-transform: uppercase;
      font-size: 35px;
      margin-bottom: rem(80px);
      margin-top: rem(80px);
      &_b {
        font-family: NexaRustSans-Black;
        line-height: 1;
        margin-bottom: rem(34px);
      }
      &_s {
        font-family: RegencieLight;
        line-height: 1;
      }
    }
    &_desc {
      font-size: 18px;
      color: $whiteColor;
      text-transform: uppercase;
    }
  }
</style>
