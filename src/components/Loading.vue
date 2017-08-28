<template>
  <div class="loading_container">
    <div class="loading"></div>
  </div>
</template>

<style lang="scss">
  @import '../assets/sass/_common';
  .loading_container {
    background: rgba(0,0,0,.7);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
  }
  .loading {
    position: absolute;
    width: rem(176px);
    height: rem(176px);
    top: 50%;
    left: 50%;
    margin-top: rem(-88px);
    margin-left: rem(-88px);
    background: url(../assets/img/logo.png) 0 0 no-repeat;
    background-size: 100%;
    animation: fade 1s infinite;
    animation-direction: alternate;
  }
  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
</style>
