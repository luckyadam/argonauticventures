<template>
  <div class="loading_container">
    <div class="loading">
      <div class="loading_dot"></div>
      <div class="loading_dot"></div>
      <div class="loading_dot"></div>
      <div class="loading_dot"></div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../assets/sass/_common';
  .loading_container {
    background: #222;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: rem(-28px) 0 0 rem(-84px);
    padding: rem(20px);
    background: rgba(20, 20, 20, 0.9);
    border-radius: rem(10px);
    box-shadow: inset 0 0 rem(10px) #000, 0 rem(2px) rem(2px) rgba(255, 255, 255, 0.1);
  }

  .loading_dot {
    float: left;
    width: rem(16px);
    height: rem(16px);
    margin: 0 rem(8px);
    background: #fff;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 rem(4px) #000;
    animation: loadingFade 1s infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.1s;
    }

    &:nth-child(3) {
      animation-delay: 0.2s;
    }

    &:nth-child(4) {
      animation-delay: 0.3s;
    }
  }

  @keyframes loadingFade {
    0% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 0; }
  }
</style>
