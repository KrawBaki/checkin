<template>
  <header-view />
  <main>
    <section class="pt-[76px] px-4 py-[16px] bg-white">
      <div class="flex justify-between items-center">
        <h2 class="text-[#2B2C3A] font-semibold text-[20px]">Медицинская карта</h2>
        <a href="">
          <img src="img/right.svg" alt="" />
        </a>
      </div>
      <div class="parent flex pt-[16px]">
        <div class="bg-white w-3/6 p-[16px] rounded-lg shadow-md mr-[12px]">
          <div class="flex justify-between">
            <div class="flex space-x-2.5 items-center">
              <img src="img/blood.svg" alt="" />
              <p class="text-[rgba(43,_44,_58,_0.5)] text-[14px]">Кровь</p>
            </div>
            <p class="text-[16px] font-semibold">А+</p>
          </div>
          <div class="flex justify-between pt-[16px]">
            <div class="flex space-x-2 items-center">
              <img src="img/tara.svg" alt="" />
              <p class="text-[rgba(43,_44,_58,_0.5)] text-[14px]">Вес</p>
            </div>
            <p class="text-[16px] font-semibold">65</p>
          </div>
          <div class="flex justify-between pt-[16px]">
            <div class="flex space-x-1 items-center">
              <img src="img/toll.svg" alt="" />
              <p class="text-[rgba(43,_44,_58,_0.5)] text-[14px]">Рост</p>
            </div>
            <p class="text-[16px] font-semibold">170</p>
          </div>
        </div>
        <div class="w-3/6">
          <div class="flex justify-between items-center rounded-lg p-[16px] h-[62px] shadow-md">
            <p class="text-[#6197FF] mr-[8px] text-[14px]">Аллергия</p>
            <p class="text-[16px] font-semibold">2</p>
          </div>
          <div
            class="flex justify-between items-center p-[16px] rounded-lg mt-[12px] h-[62px] shadow-md"
          >
            <p class="text-[#FF6197] text-[14px] mr-[8px]">
              Хронические <br />
              заболевания
            </p>
            <p class="text-[16px] font-semibold">5</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-[#F4F4F9] px-4 pt-[16px] pb-[87px]">
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white rounded-lg shadow-md py-[12px]">
          <div class="flex justify-center items-center">
            <img src="img/category.svg" alt="" />
          </div>
          <h3 class="text-[14px] font-semibold leading-[24px] pt-[12px] text-center">Приёмы</h3>
        </div>
        <div class="bg-white rounded-lg shadow-md py-[12px]">
          <div class="flex justify-center items-center">
            <img src="img/category2.svg" alt="" />
          </div>
          <h3 class="text-[14px] font-semibold leading-[24px] pt-[12px] text-center">Диагнозы</h3>
        </div>
        <div class="bg-white rounded-lg shadow-md py-[12px]">
          <div class="flex justify-center items-center">
            <img src="img/category3.svg" alt="" />
          </div>
          <h3 class="text-[14px] font-semibold leading-[24px] pt-[12px] text-center">Анализы</h3>
        </div>
        <div class="bg-white rounded-lg shadow-md py-[12px]">
          <div class="flex justify-center items-center">
            <img src="img/category4.svg" alt="" />
          </div>
          <h3 class="text-[14px] font-semibold leading-[24px] pt-[12px] text-center">
            Обследования
          </h3>
        </div>
        <div class="bg-white rounded-lg shadow-md py-[12px]">
          <div class="flex justify-center items-center">
            <img src="img/category5.svg" alt="" />
          </div>
          <h3 class="text-[14px] font-semibold leading-[24px] pt-[12px] text-center">
            Заболевания
          </h3>
        </div>
        <div class="bg-white rounded-lg shadow-md py-[12px]">
          <div class="flex justify-center items-center">
            <img src="img/category4.svg" alt="" />
          </div>
          <h3 class="text-[14px] font-semibold leading-[24px] pt-[12px] text-center">Лечение</h3>
        </div>
        <div class="bg-white rounded-lg shadow-md py-[12px]">
          <div class="flex justify-center items-center">
            <img src="img/category7.svg" alt="" />
          </div>
          <h3 class="text-[14px] font-semibold leading-[24px] pt-[12px] text-center">Расходы</h3>
        </div>
        <div class="items-center bg-white rounded-lg shadow-md py-[12px]">
          <div class="flex justify-center items-center">
            <img src="img/category8.svg" alt="" />
          </div>
          <h3 class="text-[14px] font-semibold leading-[24px] pt-[12px] text-center">Вакцинация</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
export default {
  components: { HeaderView },
};
</script>

<style lang="scss" scoped></style>
