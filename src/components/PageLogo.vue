<template>
  <div class="page_logo">
    <img src="../assets/img/logo.png" class="page_logo_img" />
  </div>
</template>

<style lang="scss">
@import '../assets/sass/_common';

.page_logo {
  position: absolute;
  z-index: 10;
  left: rem(32px);
  top: rem(30px);
  &_img {
    width: rem(90px);
    height: rem(90px);
  }
}
</style>
