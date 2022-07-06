<template>
  <component :is="layout">
    <router-view />
  </component>
  <FooterSidebar />
</template>

<script>
import "animate.css";
import HomeView from "./views/HomeView.vue";
import HealthyViewVue from "./views/HealthyView.vue";
import CardViewVue from "./views/CardView.vue";
import ProfilViewVue from "./views/ProfilView.vue";
import FooterSidebar from "@/components/layout/FooterSidebar.vue";

export default {
  components: {
    HomeView,
    HealthyViewVue,
    CardViewVue,
    ProfilViewVue,
    FooterSidebar,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-view-vue";
    },
  },
};
</script>
<style>
.control-enter-active,
.control-leave-active {
  animation: 1s show show forwards;
}
@keyframes show {
  0% {
    transform: translateX(-300px);
    opacity: 0;
  }
  0% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
