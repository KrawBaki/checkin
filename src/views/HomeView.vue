<template>
  <header-view />
  <main>
    <search-button />
    <section class="healthy px-4 pt-[12px] pb-[24px] bg-[#F4F4F9]">
      <div class="flex items-center justify-evenly mt-[12px] h-[70px] bg-white rounded-md shadow">
        <div class="">
          <img class="p-[13px] bg-[#F4F4F9] rounded-md" src="img/healthy.svg" alt="" />
        </div>
        <div>
          <p class="text-[#2B2C3A] text-[16px]">Записи</p>
          <p class="text-[14px] text-slate-500">Следите за здоровьем своего ребенка</p>
        </div>
      </div>
      <div class="flex items-center justify-evenly mt-[12px] h-[70px] bg-white rounded-md shadow">
        <div class="">
          <img class="p-[13px] bg-[#F4F4F9] rounded-md" src="img/healthy2.svg" alt="" />
        </div>
        <div>
          <p class="text-[#2B2C3A] text-[16px]">Моя семья</p>
          <p class="text-[14px] text-slate-500">Следите за здоровьем своего ребенка</p>
        </div>
      </div>
      <div class="flex items-center justify-evenly mt-[12px] h-[70px] bg-white rounded-md shadow">
        <div class="">
          <img class="p-[13px] bg-[#F4F4F9] rounded-md" src="img/healthy3.svg" alt="" />
        </div>
        <div>
          <p class="text-[#2B2C3A] text-[16px]">Скидки</p>
          <p class="text-[14px] text-slate-500">Следите за здоровьем своего ребенка</p>
        </div>
      </div>
    </section>
    <section class="relative px-4 bg-[#F4F4F9] pb-[16px]">
      <h3 class="text-[19px] inline font-semibold">События и предложения</h3>
      <swiper
        :spaceBetween="60"
        :pagination="{
          clickable: true,
        }"
        :slides-per-view="3"
        :space-between="30"
        :modules="modules"
        class="mySwiper py-4"
      >
        <swiper-slide><img src="img/themes.svg" alt="" /></swiper-slide>
        <swiper-slide><img src="img/themes.svg" alt="" /></swiper-slide>
        <swiper-slide><img src="img/themes.svg" alt="" /></swiper-slide>
        <swiper-slide><img src="img/themes.svg" alt="" /></swiper-slide>
        <swiper-slide><img src="img/themes.svg" alt="" /></swiper-slide>
        <swiper-slide><img src="img/themes.svg" alt="" /></swiper-slide>
        <swiper-slide><img src="img/themes.svg" alt="" /></swiper-slide>
      </swiper>
      <hr class="bg-[rgba(43,_44,_58,_0.1)]" />

      <div class="flex justify-between pt-[12px] space-x-2">
        <div class="w-3/6 space-y-2">
          <div class="flex justify-around items-center bg-white p-3 rounded-lg">
            <p class="w-[93px]">Детский врач</p>
            <img src="img/service.svg" alt="" />
          </div>
          <div class="flex justify-around items-center bg-white p-3 rounded-lg">
            <p class="w-[93px]">Голованая боль</p>
            <img src="img/service2.svg" alt="" />
          </div>
        </div>
        <div class="w-3/6 space-y-2">
          <div class="flex justify-around items-center bg-white p-3 rounded-lg">
            <p class="w-[93px]">Проблемы с зубами</p>
            <img src="img/service3.svg" alt="" />
          </div>
          <div class="flex justify-around items-center bg-white p-3 rounded-lg">
            <p class="w-[93px]">Боль в спине</p>
            <img src="img/service4.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="pb-[12px] pt-[16px]">
        <button
          class="bg-white w-full text-[14px] leading-[20px] rounded-lg shadow text-[#6197FF] h-[46px]"
        >
          Посмотреть все
        </button>
      </div>
    </section>
    <section class="px-4 bg-[#F4F4F9] pb-[55px]">
      <div class="flex justify-between items-center">
        <h2 class="text-[#2B2C3A] font-semibold text-[20px]">Новости сайта</h2>
        <a href="">
          <img src="img/right.svg" alt="" />
        </a>
      </div>
      <div class="bg-[#F4F4F9] pt-[12px]">
        <div class="flex justify-between bg-white items-center rounded-lg">
          <img src="img/news.svg" class="rounded-tl-lg rounded-bl-lg" alt="" />
          <div class="ml-[12px]">
            <p class="text-[14px] mb-[8px] leading-[20px]">
              Мы рады представить вам новые возможности сайта
            </p>
            <p class="text-[14px] text-zinc-500">05.03.2020 13:05</p>
          </div>
        </div>
        <div class="flex justify-between bg-white items-center rounded-lg mt-[12px]">
          <img src="img/new2.svg" class="rounded-tl-lg rounded-bl-lg" alt="" />
          <div class="ml-[12px]">
            <p class="text-[14px] mb-[8px] leading-[20px]">
              Мы рады представить вам новые возможности сайта
            </p>
            <p class="text-[14px] text-zinc-500">05.03.2020 13:05</p>
          </div>
        </div>
      </div>
      <div class="pb-[24px] pt-[12px]">
        <button
          class="bg-white w-full text-[14px] leading-[20px] rounded-lg shadow text-[#6197FF] h-[46px]"
        >
          Посмотреть все
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import "swiper/css";
import "../assets/css/style.css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import HeaderView from "@/components/HeaderView.vue";
import SearchButton from "@/components/app/SearchButton.vue";
export default {
  data: () => ({
    count: 0,
  }),
  methods: {
    addCount() {
      this.count++;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    HeaderView,
    SearchButton,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
.swiper {
  position: static;
}

.swiper-pagination {
  position: absolute;
  transition: opacity 0.3s;
  transform: translateZ(0);
  z-index: 10;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  top: 1px;
  text-align: right;
  padding-right: 18px;
}
</style>
