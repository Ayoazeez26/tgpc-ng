<script setup lang="ts"></script>
<template>
  <div class="py-16 lg:py-[112px] bg-white w-full relative">
    <img
      src="/svg/left-half.svg"
      alt="left half"
      class="absolute hidden md:block top-10 left-0"
    />
    <img
      src="/svg/right-half.svg"
      alt="left half"
      class="absolute hidden md:block bottom-10 right-0"
    />
    <div
      class="flex flex-col px-5 xl:px-0 items-center justify-center mx-auto w-full max-w-[1312px]"
    >
      <div class="w-full flex flex-col gap-6 md:ml-4 max-w-[768px] text-center">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
        >
          Outsource Your Operations with TGPC
        </h2>

        <p class="md:text-lg md:leading-[150%] leading-[150%]">
          Experience the benefits of our offshoring and outsourcing services
          today
        </p>
      </div>
      <div
        class="flex flex-col md:flex-row gap-6 md:gap-5 mt-10 w-full md:w-auto"
      >
        <nuxt-link
          to="/contact"
          class="border border-black bg-black w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded text-white"
          >Work with us
          <Icon
            name="mdi:arrow-right"
            color="#FFF"
            size="20"
            class="ml-1 mb-0.5"
          />
        </nuxt-link>
        <nuxt-link
          to="/services"
          class="border border-grey-3 bg-white w-full flex items-center justify-center md:w-auto text-center text-sm font-semibold py-4 px-8 rounded text-black"
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
