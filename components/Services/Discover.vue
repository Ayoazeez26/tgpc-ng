<script setup lang="ts"></script>
<template>
  <div class="bg-white flex flex-col py-16 lg:py-[112px] px-5 xl:px-0 w-full">
    <div class="w-full mx-auto max-w-[1312px]">
      <div
        class="bg-grey-2 flex flex-col md:flex-row rounded-3xl justify-between relative items-center w-full"
      >
        <img class="absolute z-0" src="/svg/cta-bg.svg" alt="cta-bg" />
        <div class="w-full max-w-[696px] p-[28px] m-0 md:m-12 z-[1]">
          <h2
            class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
          >
            Discover TGPC's Exceptional Services Today
          </h2>

          <p class="leading-[150%] md:text-lg mt-6 md:leading-[150%]">
            Find out how TGPC's offshoring and outsourcing solutions can benefit your business.
          </p>
          <div class="flex w-full md:w-auto mt-10">
            <nuxt-link
              to="#contact"
              class="border border-black bg-black w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded leading-none text-white"
              >Contact us
              <Icon
                name="mdi:arrow-right"
                color="#FFF"
                size="20"
                class="ml-1 mb-0.5"
            /></nuxt-link>
          </div>
        </div>
        <img
          class="w-full max-w-[520px]"
          src="/img/cta.png"
          alt="man in suit"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
