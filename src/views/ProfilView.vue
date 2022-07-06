<template>
  <header class="p-4">
    <div class="flex justify-between items-center">
      <h4 class="text-[18px] font-semibold">Мой профиль</h4>
      <img src="img/exat.svg" alt="" />
    </div>
  </header>
  <main>
    <section class="p-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h4
            class="bg-[#D82B88] text-[20px] px-[10px] py-[4px] rounded-full text-white font-semibold"
          >
            M
          </h4>
          <div class="pl-[15px]">
            <h5 class="text-[16px] font-semibold">Мамыров Максат</h5>
            <p class="text-[rgba(43,_44,_58,_0.5)] text-[14px]">+996 505 44 55 34</p>
          </div>
        </div>
        <a>
          <img src="img/change.svg" alt="" />
        </a>
      </div>
    </section>
    <section class="pt-4 bg-[#F4F4F9]">
      <div class="bg-white flex items-center justify-between p-4">
        <div class="flex items-center">
          <div>
            <img src="img/computer.svg" alt="" />
          </div>
          <div class="pl-[19px]">
            <p class="text-[18px] font-semibold">Активные сеансы</p>
            <p class="text-[rgba(43,_44,_58,_0.5)] text-[14px]">3 девайса</p>
          </div>
        </div>
        <a>
          <img src="img/right.svg" alt="" />
        </a>
      </div>
    </section>
    <section class="py-4 bg-[#F4F4F9]">
      <div class="bg-white p-4">
        <h5 class="text-[#6197FF] font-semibold text-[16px] pb-[16px]">Дети</h5>

        <div class="flex items-center justify-between border p-3 rounded-lg">
          <p class="text-[rgba(43,_44,_58,_0.5)] text-[14px]">Нет провиля ваших детей</p>
          <a class="flex">
            <img src="img/addPerson.svg" alt="" />
            <p class="text-[#6197FF] pl-[8px] text-[16px]">Добавить</p>
          </a>
        </div>
      </div>
    </section>
    <section class="py-4 bg-[#F4F4F9]">
      <div class="text-center bg-white py-5">
        <div class="flex justify-center pb-[12px]">
          <img src="img/soungs.svg" alt="" />
        </div>
        <h5 class="text-[18px] font-semibold pb-[6px]">Cлужба поддержки</h5>
        <p class="text-[14px] text-[rgba(43,_44,_58,_0.5)] pb-[16px] leading-[17px] p">
          У вас возникли сложности с пользованием <br />
          checkin, свяжитесь с нами!
        </p>
        <button
          class="bg-[#6197ff] text-[14px] px-20 rounded-full py-3 text-white tracking-[0.75px]"
        >
          СВЯЗАТЬСЯ
        </button>
      </div>
    </section>
    <section class="pb-[75px] p-4">
      <h5 class="text-[#6197FF] font-semibold pb-[32px]">Информация о приложении</h5>
      <a class="flex">
        <img src="img/message.svg" alt="" />
        <p class="pl-[18px]">Оставить отзыв</p>
      </a>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    getPost() {
      return function () {};
    },
  },
};
</script>

<style lang="scss" scoped></style>
