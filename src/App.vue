<template>
  <div id="app" class="app">
    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@charset "UTF-8";

/*===================
  样式重置
===================*/
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin:0;
  padding:0;
  vertical-align:baseline;
}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
img {
  border: 0 none;
  vertical-align: top;
}
i, em {
  font-style: normal;
}
ol, ul {
  list-style: none;
}
input, select, button, h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
  font-family: inherit;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: #666;
}
body {
  height: 100%;
  font-size: 14px;
  font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Arial;
  line-height: 1.5;
  background-color: #f9f9f9;
  color: #666;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100% !important;
          text-size-adjust: 100% !important;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
input[type="text"],textarea{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

/*===================
  公共样式区域
===================*/
.display_flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.display_flex.horizontal {
  box-orient: horizontal;
  -webkit-flex-flow: row;
      -ms-flex-flow: row;
          flex-flow: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
}
.display_flex.vertical {
  box-orient: vertical;
  -webkit-flex-flow: column;
      -ms-flex-flow: column;
          flex-flow: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden
}

@font-face {
  font-family: 'RegencieLight';
  font-weight: normal;
  font-style: normal;
	src: url('./assets/fonts/RegencieLight.ttf');
	src: url('./assets/fonts/RegencieLight.eot?#iefix') format('embedded-opentype'),
		url('./assets/fonts/RegencieLight.woff') format('woff'),
		url('./assets/fonts/RegencieLight.ttf') format('truetype');
}
@font-face {
  font-family: 'NexaRustSans-Black';
  font-weight: normal;
  font-style: normal;
	src: url('./assets/fonts/NexaRustSans-Black.otf');
	src: url('./assets/fonts/NexaRustSans-Black.eot?#iefix') format('embedded-opentype'),
		url('./assets/fonts/NexaRustSans-Black.woff') format('woff'),
		url('./assets/fonts/NexaRustSans-Black.ttf') format('truetype');
}

html, body, .app, .container {
  width: 100%;
}

</style>
