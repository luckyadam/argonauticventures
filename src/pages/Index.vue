<template>
  <div class="index" :style="{ height: this.winSize.height + 'px' }">
    <div style="display: none;">
      <span style="font-family: RegencieLight">1</span>
      <span style="font-family: NexaRustSans-Black">1</span>
      <span style="font-family: BrushScriptStd">1</span>
      <span style="font-family: FFXEuropeanThin">1</span>
    </div>
    <Navigation type="white" />
    <div v-for="(item, index) in carouselData" :class="['index_page', `index_page_${item.type}`]" :style="{ opacity: currentIndex === index ? 1 : 0, zIndex: currentIndex === index ? 5 : 1 }">
      <div class="index_page_mask"></div>
      <div class="index_page_content">
        <h1 :class="['index_page_title', currentIndex === index ? 'animated slideInLeft' : '']">{{item.title}}</h1>
        <div :class="['index_page_main', currentIndex === index ? 'animated slideInRight' : '']">
          <p class="index_page_p" v-for="p in item.content">{{p}}</p>
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
  mixins: [mixin],
  data () {
    return {
      carouselData: [
        {
          title: 'ACCESS',
          type: 'access',
          content: [
            'Access is the permission, liberty, or',
            'ability to enter',
            'the freedom or ability to obtain or an increase by addition'
          ]
        },
        {
          title: 'PERFORMANCE',
          type: 'performance',
          content: [
            'Performance is the execution of an action, something',
            'accomplished, the fulfillment of a claim, promise,',
            'request or a manner of reacting to stimuli'
          ]
        },
        {
          title: 'ANALYTICS',
          type: 'analytics',
          content: [
            'Analytics is the discovery, interpretation, and',
            'communication of meaningful patterns in data.It is',
            'especially valuable in areas rich with recorded information,',
            'analytics relies on the simulaneous application of',
            'research, statistics and logic'
          ]
        }
      ],
      currentIndex: 0
    }
  },
  mounted () {
    this.carousel()
  },
  methods: {
    carousel () {
      setInterval(() => {
        if (this.currentIndex >= 2) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      }, 3000)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/_common';

.index {
  position: relative;
  overflow: hidden;
}
.index_page {
  width:  100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  transition: opacity .6s ease-in-out;
  &_access {
    background-image: url(../assets/img/home_1.jpg);
  }
  &_performance {
    background-image: url(../assets/img/home_3.jpg);
  }
  &_analytics {
    background-image: url(../assets/img/home_2.jpg);
  }
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
.animated {
  animation-duration: .6s;
  animation-fill-mode: both
}
@keyframes slideInLeft {
  0% {
    transform: translate3d(-100%,0,0);
    visibility: visible;
  }

  to {
    transform: translateZ(0);
  }
}

.slideInLeft {
  animation-name: slideInLeft;
}

@keyframes slideInRight {
  0% {
    transform: translate3d(100%,0,0);
    visibility: visible;
  }

  to {
    transform: translateZ(0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}
</style>
