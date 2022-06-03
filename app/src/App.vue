<template>
  <div class="app">
    <header class="mx-auto max-w-5xl px-2 py-2">
      <header-general></header-general>
    </header>
    <main class="mx-auto max-w-5xl bg-white px-2 py-2 mt-2 min-h-screen">
      <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-5xl px-2 py-2 mt-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>
<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";

import "./tailwind.css";
export default {
  name: "App",
  components: {
    "header-general": header,
    "footer-general": footer,
  },
  watch: {
    $route: function(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
};
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, #ee7752, #e73c7e);
  background-size: auto;
}
</style>
