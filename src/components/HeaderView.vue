<template>
  <header class="header z-[999] fixed top-0 left-0 right-0 bg-white">
    <navbar-view />
  </header>
</template>
<script>
import NavbarView from "@/components/app/NavbarView.vue";
export default {
  components: {
    NavbarView,
  },
};
</script>
