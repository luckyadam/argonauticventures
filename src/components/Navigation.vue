<template>
  <div :class="['nav', { open }, type]">
    <div class="nav_btn" v-tap="{ methods: togglenav }">
      <i class="nav_btn_dot nav_btn_dot_1"></i>
      <i class="nav_btn_dot nav_btn_dot_2"></i>
      <i class="nav_btn_dot nav_btn_dot_3"></i>
      <i class="nav_btn_dot nav_btn_dot_4" v-show="open"></i>
      <i class="nav_btn_dot nav_btn_dot_5" v-show="open"></i>
    </div>
    <div class="nav_list" v-if="open">
      <ul>
        <li v-for="item in navList" class="nav_item">
          <router-link :to="item.lnk" active-class="active" class="nav_lnk">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
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
            lnk: 'portfolio'
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
      border-radius: 100%;
      top: rem(30px);
      right: rem(40px);
      text-align: center;
      z-index: 10;
      &_dot {
        width: rem(8px);
        height: rem(8px);
        border-radius: 100%;
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
      margin-bottom: rem(56px);
      padding-right: rem(40px);
    }
    &_lnk {
      color: #fff;
      font-size: 24px;
      font-family: NexaRustSans-Black;
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

</style>
