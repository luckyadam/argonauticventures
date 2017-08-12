<template>
  <div class="index" :style="{ height: this.winSize.height + 'px' }">
    <Navigation type="white" />
    <div class="index_page index_page_access">
      <div class="index_page_mask"></div>
      <div class="index_page_content">
        <h1 class="index_page_title">ACCESS</h1>
        <div class="index_page_main">
          <p class="index_page_p">Access is the permission, liberty, or</p>
          <p class="index_page_p">ability to enter</p>
          <p class="index_page_p">the freedom or ability to obtain or an increase by addition</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins'
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  mixins: [mixin]
}
</script>

<style lang="scss">
@import '../assets/sass/_common';

.index {
  position: relative;
}
.index_page {
  width:  100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: url(../assets/img/home_1.jpg) 0 0 no-repeat;
  background-size: cover;
}

.index_page_mask {
  width:  100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .8);
}

.index_page_content {
  position: absolute;
  left: rem(32px);
  bottom: rem(85px);
  color: #fff;
}

.index_page_title {
  font-family: NexaRustSans-Black;
  font-size: 32px;
  line-height: 1;
  margin-bottom: rem(45px);
}

.index_page_p {
  font-size: 13px;
  color: #cccccc;
  line-height: 1;
}

</style>
