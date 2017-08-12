<template>
  <div class="about">
    <Navigation type="white" />
    <div class="about_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="about_top_mask"></div>
      <div class="about_top_main">
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    Navigation
  },
  computed: {
    winSize () {
      const win = window
      return {
        width: win.innerWidth,
        height: win.innerHeight
      }
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
    }
  }
</style>
