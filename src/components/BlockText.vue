<template>
  <section class="btext">
    <h2 :class="['btext_title', `btext_title_${type}`]" v-if="type === 'h'">
      <span class="btext_title_s">{{content.smallTitle}}</span><span class="btext_title_b">{{content.bigTitle}}</span>
    </h2>
    <h2 :class="['btext_title', `btext_title_${type}`]" v-else-if="type === 'v'">
      <p class="btext_title_s">{{content.smallTitle}}</p><p class="btext_title_b">{{content.bigTitle}}</p>
    </h2>
    <div class="btext_txt">
      <p class="btext_txt_p" v-for="item in content.main" v-html="item"></p>
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
      }
      &_s {
        font-family: RegencieLight;
      }
    }
    &_txt {
      line-height: rem(45px);
      font-size: 12px;
      color: #8d8d8d;
    }
  }
</style>
