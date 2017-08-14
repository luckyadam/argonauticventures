<template>
  <a class="explore">
    <i class="explore_arrow"></i>
    <span class="explore_txt">EXPLOREIT</span>
  </a>
</template>

<style lang="scss">
  @import '../assets/sass/_common';

  $blueColor: #0079d7;

  .explore {
    display: block;
    padding-left: rem(32px);
    &_arrow {
      display: inline-block;
      vertical-align: middle;
      width: rem(35px);
      height: rem(5px);
      background-color: $blueColor;
      position: relative;
      margin-right: rem(22px);
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: rem(-12px);
        right: 0px;
        width: rem(25px);
        height: rem(25px);
        border-right: rem(5px) solid $blueColor;
        border-bottom: rem(5px) solid $blueColor;
        transform: rotate(-45deg);
      }
    }
    &_txt {
      display: inline-block;
      vertical-align: middle;
      font-size: 18px;
      color: #ffffff;
    }
  }
</style>
