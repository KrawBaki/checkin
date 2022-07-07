<template>
  <footer class="px-3 z-[999] fixed bottom-0 left-0 right-0 shadow bg-white">
    <ul class="flex py-2 justify-between items-center">
      <router-link
        v-for="sidebar in sidebars"
        :class="{
          'bg-[#6197FF]  rounded-full': isActive(sidebar),
        }"
        class="flex px-4 duration-1000 py-2 items-center"
        :to="sidebar.link"
        :key="sidebar.url"
      >
        <img class="mr-[8px]" :src="isActive(sidebar) ? sidebar.urlSelect : sidebar.url" alt="" />
        <p
          class="text-[14px] whitespace-nowrap duration-1000 overflow-hidden transition-all w-0 text-white"
          :class="{ 'text-[14px] !w-min ': isActive(sidebar) }"
        >
          {{ sidebar.title }}
        </p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  components: {},
  data: () => ({
    sidebars: [
      {
        title: "Главная",
        url: "img/sidebar1.svg",
        urlSelect: "img/sidebar1Select.svg",
        link: "/",
      },
      {
        title: "Медицинская карта",
        url: "img/sidebar2.svg",
        urlSelect: "img/sidebar2Select.svg",
        link: "/card",
      },
      {
        title: "Трекер здоровья",
        url: "img/sidebar3.svg",
        opacity: "opacity: 0.5",
        urlSelect: "img/sidebar3Select.svg",
        link: "/healthy",
      },
      {
        title: "Профиль",
        url: "img/sidebar4.svg",
        urlSelect: "img/sidebar4Select.svg",
        link: "/profil",
      },
    ],
  }),
  methods: {
    isActive(e) {
      return e.link === this.$route.fullPath;
    },
  },
};
</script>

<style scoped></style>
