<template>
  <div class="vp-home">
    <img alt="Vue logo" class="mx-auto" src="../assets/logo.png" />
    <welcome></welcome>
  </div>
</template>

<script>
import welcome from "../components/welcome.vue";
export default {
  name: "Homepage",
  components: {
    welcome: welcome,
  },
};
</script>
