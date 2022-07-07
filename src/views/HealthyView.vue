<template>
  <header-view />
  <main>
    <section class="bg-[#F4F4F9] pt-[80px] pb-[16px] px-4">
      <h2 class="font-semibold text-[20px] leading-[20px]">Ваши трекеры</h2>
      <div class="flex justify-between items-center bg-white shadow-md rounded-lg mt-[14px] p-3">
        <div>
          <img src="img/treker.svg" alt="" />
          <p class="text-[14px] leading-[17px] font-semibold pt-[12px]">Базовый трекер</p>
          <p class="text-[12px] text-[rgba(43,_44,_58,_0.5)] leading-[15px] pt-[6px]">
            Ты хорошо идешь, еще пару шагов, поднажми!
          </p>
        </div>
        <div class="relative">
          <p
            class="absolute top-[31px] left-[26px] text-[14px] font-semibold leading-[150%] text-[rgba(43,_44,_58,_0.5)]"
          >
            {{ step }}/{{ count }}
          </p>
          <circle-progress
            :border-width="8"
            :border-bg-width="8"
            :empty-color="'rgba(238, 238, 238, 0.7)'"
            :size="80"
            :percent="count"
            :fill-color="'#FF6197'"
          />
        </div>
      </div>
    </section>

    <section class="relative px-4 bg-[#F4F4F9] pb-[16px]">
      <h3 class="text-[19px] inline font-semibold">События и предложения</h3>
      <swiper
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div
            class="flex justify-between items-center bg-gradient-to-r p-3 from-blue-500 to-pink-500 rounded-lg"
          >
            <div>
              <h3 class="text-white text-[20px]">
                Педиатрический <br />
                трекер с 2 до 6 лет
              </h3>
              <p class="text-[rgba(255,_255,_255,_0.7)] text-[14px] leading-[17px] pt-[22px]">
                Одобрено доктором
              </p>
              <p class="text-lg leading-[17px] text-white">Новиковым А.В.</p>
            </div>
            <div><img src="img/person.svg" class="w-[100px]" alt="" /></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="flex justify-between items-center bg-gradient-to-r p-3 from-blue-500 to-pink-500 rounded-lg"
          >
            <div>
              <h3 class="text-white text-[20px]">
                Педиатрический <br />
                трекер с 2 до 6 лет
              </h3>
              <p class="text-[rgba(255,_255,_255,_0.7)] text-[14px] leading-[17px] pt-[22px]">
                Одобрено доктором
              </p>
              <p class="text-lg leading-[17px] text-white">Новиковым А.В.</p>
            </div>
            <div><img src="img/person.svg" class="w-[100px]" alt="" /></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="flex justify-between items-center bg-gradient-to-r p-3 from-blue-500 to-pink-500 rounded-lg"
          >
            <div>
              <h3 class="text-white text-[20px]">
                Педиатрический <br />
                трекер с 2 до 6 лет
              </h3>
              <p class="text-[rgba(255,_255,_255,_0.7)] text-[14px] leading-[17px] pt-[22px]">
                Одобрено доктором
              </p>
              <p class="text-lg leading-[17px] text-white">Новиковым А.В.</p>
            </div>
            <div><img src="img/person.svg" class="w-[100px]" alt="" /></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="flex justify-between items-center bg-gradient-to-r p-3 from-blue-500 to-pink-500 rounded-lg"
          >
            <div>
              <h3 class="text-white text-[20px]">
                Педиатрический <br />
                трекер с 2 до 6 лет
              </h3>
              <p class="text-[rgba(255,_255,_255,_0.7)] text-[14px] leading-[17px] pt-[22px]">
                Одобрено доктором
              </p>
              <p class="text-lg leading-[17px] text-white">Новиковым А.В.</p>
            </div>
            <div><img src="img/person.svg" class="w-[100px]" alt="" /></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="flex justify-between items-center bg-gradient-to-r p-3 from-blue-500 to-pink-500 rounded-lg"
          >
            <div>
              <h3 class="text-white text-[20px]">
                Педиатрический <br />
                трекер с 2 до 6 лет
              </h3>
              <p class="text-[rgba(255,_255,_255,_0.7)] text-[14px] leading-[17px] pt-[22px]">
                Одобрено доктором
              </p>
              <p class="text-lg leading-[17px] text-white">Новиковым А.В.</p>
            </div>
            <div><img src="img/person.svg" class="w-[100px]" alt="" /></div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <section class="bg-[#F4F4F9] pb-[70px] px-4">
      <div class="flex space-x-3">
        <div class="w-3/6 space-y-3">
          <div class="bg-white shadow-md rounded-lg p-3">
            <img src="img/offers1.svg" class="pb-[12px]" alt="" />
            <h4 class="text-[14px] pb-[4px]">Гормональный</h4>
            <p class="text-[14px] pb-[10px] text-[rgba(43,_44,_58,_0.5)]">
              Равным образом реализация намеченных плановых заданий позволяет оценить
            </p>
            <div class="flex justify-center items-center text-[12px] py-[10px] text-[#6197FF]">
              <img src="img/plusBlue.svg" class="mr-[4px]" alt="" />
              <p>Добавить</p>
            </div>
          </div>
          <div class="bg-white shadow-md rounded-lg p-3">
            <img src="img/offers2.svg" class="pb-[12px]" alt="" />
            <h4 class="text-[14px] pb-[4px]">Онкологический</h4>
            <p class="text-[14px] pb-[10px] text-[rgba(43,_44,_58,_0.5)]">
              Равным образом реализация намеченных плановых заданий способствует подготовки и
              реализации позиций, занимаемых участниками
            </p>
            <div class="flex justify-center items-center text-[12px] py-[10px] text-[#6197FF]">
              <img src="img/plusBlue.svg" class="mr-[4px]" alt="" />
              <p>Добавить</p>
            </div>
          </div>
        </div>
        <div class="w-3/6 space-y-3">
          <div class="bg-white shadow-md rounded-lg p-3">
            <img src="img/offers2.svg" class="pb-[12px]" alt="" />
            <h4 class="text-[14px] pb-[4px]">Онкологический</h4>
            <p class="text-[14px] pb-[10px] text-[rgba(43,_44,_58,_0.5)]">
              Равным образом реализация намеченных плановых заданий способствует подготовки и
              реализации позиций, занимаемых участниками
            </p>
            <div class="flex justify-center items-center text-[12px] py-[10px] text-[#6197FF]">
              <img src="img/plusBlue.svg" class="mr-[4px]" alt="" />
              <p>Добавить</p>
            </div>
          </div>
          <div class="bg-white shadow-md rounded-lg p-3">
            <img src="img/offers1.svg" class="pb-[12px]" alt="" />
            <h4 class="text-[14px] pb-[4px]">Гормональный</h4>
            <p class="text-[14px] pb-[10px] text-[rgba(43,_44,_58,_0.5)]">
              Равным образом реализация намеченных плановых заданий позволяет оценить
            </p>
            <div class="flex justify-center items-center text-[12px] py-[10px] text-[#6197FF]">
              <img src="img/plusBlue.svg" class="mr-[4px]" alt="" />
              <p>Добавить</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

import "../assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import HeaderView from "@/components/HeaderView.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
export default {
  components: { HeaderView, Swiper, SwiperSlide, CircleProgress },
  setup() {
    return {
      count: 40,
      step: 3,
      modules: [Pagination],
    };
  },
  methods: {},
};
</script>

<style>
.swiper {
  position: static;
}

.swiper-wrapper {
  position: static;
}
</style>
