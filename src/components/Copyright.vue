<template>
  <div class="copyright">
    <p class="copyright_txt">COPYRIGHT &copy; 2017</p>
    <p class="copyright_txt">ARGONAUTIC VENTURES SPC ALL RIGHTS RESERVED</p>
  </div>
</template>

<style lang="scss">
  @import '../assets/sass/_common';

  .copyright {
    width: 100%;
    background-color: #000000;
    padding: rem(56px) 0 rem(56px) rem(32px);
    box-sizing: border-box;
    &_txt {
      color: #8d8d8d;
      font-size: 12px;
      line-height: 1;
      text-transform: uppercase;
      margin-bottom: rem(20px);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
