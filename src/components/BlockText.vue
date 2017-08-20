<template>
  <section class="btext">
    <h2 :class="['btext_title', `btext_title_${type}`]" v-if="type === 'h'">
      <span class="btext_title_s" v-html="content.smallTitle"></span><span class="btext_title_b" v-html="content.bigTitle"></span>
    </h2>
    <h2 :class="['btext_title', `btext_title_${type}`]" v-else-if="type === 'v'">
      <p class="btext_title_s" v-html="content.smallTitle"></p><p class="btext_title_b" v-html="content.bigTitle"></p>
    </h2>
    <div class="btext_txt">
      <div v-if="content.mainTitle" v-for="(item, index) in content.mainTitle">
        <h3 class="btext_txt_title" v-html="content.mainTitle[index]"></h3>
        <p class="btext_txt_p" v-html="content.main[index]"></p>
      </div>
      <p class="btext_txt_p" v-if="!content.mainTitle" v-for="item in content.main" v-html="item"></p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'block-text',
    props: {
      type: {
        type: String,
        default: 'h'
      },
      content: Object
    }
  }
</script>

<style lang="scss">
  @import '../assets/sass/_common';
  $blueColor: #017ad7;

  .btext {
    padding: rem(90px) rem(32px) rem(0px) rem(32px);
    &:before {
      content: '';
      display: block;
      width: rem(20px);
      height: rem(4px);
      background-color: $blueColor;
      margin-bottom: rem(45px);
    }
    &_title {
      font-size: 30px;
      line-height: 1;
      margin-bottom: rem(55px);
      color: #000000;
      &_b {
        font-family: NexaRustSans-Black;
        font-weight: 300;
        span {
          font-family: RegencieLight;
        }
      }
      &_s {
        font-family: RegencieLight;
        font-weight: 300;
      }
    }
    &_txt {
      line-height: rem(45px);
      font-size: 12px;
      color: #8d8d8d;
      &_title {
        font-size: 14px;
        font-family: NexaRustSans-Black;
        color: #000000;
        line-height: 1;
        padding-top: rem(24px);
        padding-bottom: rem(18px);
      }
    }
  }
</style>
