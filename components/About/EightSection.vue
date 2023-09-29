<script setup lang="ts"></script>
<template>
  <div
    class="bg-join-bg-mob md:bg-join-bg bg-black/50 bg-blend-multiply bg-center bg-cover text-white py-16 lg:py-[112px] w-full"
  >
    <div class="flex flex-col px-5 xl:px-0 mx-auto w-full max-w-[1312px]">
      <div class="w-full max-w-[768px]">
        <div class="">
          <h3
            class="text-[36px] text-white lg:text-[48px] font-bold leading-[130%]"
          >
            Outsourcing and Offshoring Solutions
          </h3>
          <p class="leading-[150%] md:text-lg mt-6 md:leading-[150%]">
            Join the growing list of satisfied clients who trust TGPC for their
            outsourcing and offshoring needs
          </p>
        </div>
        <div class="flex w-full gap-6 md:w-auto mt-6">
          <nuxt-link
            to="#contact"
            class="border border-grey-3 bg-black w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded leading-none text-white"
            >Work with us
            <Icon
              name="mdi:arrow-right"
              color="#FFF"
              size="20"
              class="ml-1 mb-0.5"
            />
          </nuxt-link>
        </div>
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
