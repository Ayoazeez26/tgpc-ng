<script setup lang="ts"></script>
<template>
  <div class="py-16 lg:py-[112px] mx-auto w-full max-w-[1312px]">
    <div class="flex flex-col px-5 xl:px-0 items-center justify-center w-full">
      <div class="w-full flex flex-col gap-6 md:ml-4 max-w-[768px] text-center">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
        >
          Streamline Your Operations with Our Outsourcing Solutions
        </h2>

        <p class="md:text-lg md:leading-[150%] leading-[150%]">
          Our cost-effective and time-saving services provide professional
          commitment and access to expert staff.
        </p>
      </div>
      <div class="mt-20 gap-x-8 gap-y-16 flex justify-center flex-wrap w-full">
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-2 flex flex-col items-center px-6 pb-8 text-center"
        >
          <img class="-translate-y-7" src="/img/cost.png" alt="cost" />
          <h3 class="text-xl font-bold -mt-5 leading-[140%]">
            Cost-Effective Solutions
          </h3>
          <p class="leading-[150%]">
            Save money by outsourcing essential departments to us.
          </p>
        </div>
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-2 flex flex-col items-center px-6 pb-8 text-center"
        >
          <img class="-translate-y-7" src="/img/time.png" alt="cost" />
          <h3 class="text-xl font-bold -mt-5 leading-[140%]">
            Cost-Effective Solutions
          </h3>
          <p class="leading-[150%]">
            Save money by outsourcing essential departments to us.
          </p>
        </div>
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-2 flex flex-col items-center px-6 pb-8 text-center"
        >
          <img class="-translate-y-7" src="/img/commit.png" alt="cost" />
          <h3 class="text-xl font-bold -mt-5 leading-[140%]">
            Cost-Effective Solutions
          </h3>
          <p class="leading-[150%]">
            Save money by outsourcing essential departments to us.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row gap-6 md:gap-5 mt-10 w-full md:w-auto"
      >
        <nuxt-link
          to="contact"
          class="border border-black bg-black w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded leading-none text-white"
          >Work with us
          <Icon
            name="mdi:arrow-right"
            color="#FFF"
            size="20"
            class="ml-1 mb-0.5"
          />
        </nuxt-link>
        <nuxt-link
          to="#contact"
          class="border border-grey-3 bg-white w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded leading-none text-black"
          >Learn more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(111deg, rgba(0, 6, 26, 0.95) 0%, #0a0a0a 100%);
}
.invert-curve {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 14px;
    background-image: url("/svg/line.svg");
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 1024px) {
      height: 9px;
      bottom: 3px;
    }
  }
}
</style>
