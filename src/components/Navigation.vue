<template>
  <div :class="['nav', { open }, type]">
    <div class="nav_btn" v-tap="{ methods: togglenav }">
      <i class="nav_btn_dot nav_btn_dot_1"></i>
      <i class="nav_btn_dot nav_btn_dot_2"></i>
      <i class="nav_btn_dot nav_btn_dot_3"></i>
      <transition name="fade">
        <i class="nav_btn_dot nav_btn_dot_4" v-show="open"></i>
      </transition>
      <transition name="fade">
        <i class="nav_btn_dot nav_btn_dot_5" v-show="open"></i>
      </transition>
    </div>
    <transition name="slide-fade">
      <div class="nav_list" v-if="open">
        <ul>
          <li v-for="item in navList" class="nav_item">
            <router-link :to="item.lnk" active-class="active" class="nav_lnk" @click.native="onNavItemClick">
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    props: {
      type: String
    },
    data () {
      return {
        navList: [
          {
            name: 'Home',
            lnk: '/'
          },
          {
            name: 'about us',
            lnk: 'about'
          },
          {
            name: 'core ethos',
            lnk: 'core-ethos'
          },
          {
            name: 'asset classes',
            lnk: 'asset'
          },
          {
            name: 'co investor network',
            lnk: 'co-investor-network'
          },
          {
            name: 'portfolio companies',
            lnk: 'portfolio-companies'
          },
          {
            name: 'news',
            lnk: 'news'
          },
          {
            name: 'contact us',
            lnk: 'contact'
          },
          {
            name: 'terms of use',
            lnk: 'terms-of-use'
          }
        ],
        open: false
      }
    },
    methods: {
      togglenav () {
        this.open = !this.open
      },
      onNavItemClick () {
        this.open = false
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .nav {
    &_btn {
      position: absolute;
      width: rem(75px);
      height: rem(75px);
      border-radius: 50%;
      top: rem(30px);
      right: rem(40px);
      text-align: center;
      z-index: 10;
      &_dot {
        width: rem(8px);
        height: rem(8px);
        border-radius: 50%;
        display: block;
        position: absolute;
        left: 50%;
        &_1 {
          top: rem(16px);
          margin-left: rem(-4px);
        }
        &_2 {
          top: rem(32px);
          margin-left: rem(-4px);
        }
        &_3 {
          top: rem(48px);
          margin-left: rem(-4px);
        }
        &_4 {
          top: rem(32px);
          margin-left: rem(-20px);
        }
        &_5 {
          top: rem(32px);
          margin-left: rem(12px);
        }
      }
    }
    &_list {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9;
      background-color: #000000;
      padding-top: rem(230px);
    }
    &_item {
      text-align: right;
      line-height: 1;
      margin-bottom: rem(50px);
      padding-right: rem(40px);
    }
    &_lnk {
      color: #fff;
      font-size: 24px;
      font-family: corbelb;
      text-transform: uppercase;
      &.router-link-exact-active {
        color: #0079d7;
      }
    }
    &.white {
      .nav_btn {
        background-color: #ffffff;
        &_dot {
          background-color: #000000;
        }
      }
    }
    &.black {
      .nav_btn {
        background-color: #000000;
        &_dot {
          background-color: #ffffff;
        }
      }
    }
    &.open {
      .nav_btn {
        background-color: #ffffff;
        &_dot {
          background-color: #000000;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(12px);
    opacity: 0;
  }
</style>
