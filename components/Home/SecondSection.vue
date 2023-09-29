<script setup lang="ts"></script>
<template>
  <div class="py-16 lg:py-[112px] mx-auto w-full max-w-[1312px]">
    <div
      class="flex flex-col md:flex-row px-5 xl:px-0 items-center justify-between w-full"
    >
      <div class="w-full md:ml-4 max-w-[616px]">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
        >
          Outsource and offshore with confidence
        </h2>

        <p class="mt-5 md:text-lg leading-[150%] md:mt-4">
          Discover our business sector bespoke offshoring services that allow
          companies to outsource and offshore specific departments, ensuring
          cost-effectiveness and operational efficiency.
        </p>
        <div class="flex w-full md:w-auto mt-6 md:mt-10">
          <nuxt-link
            to="#contact"
            class="border border-black bg-black w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded leading-none text-white"
            >Work with us
            <Icon
              name="mdi:arrow-right"
              color="#FFF"
              size="20"
              class="ml-1 mb-0.5"
          /></nuxt-link>
        </div>
      </div>
      <div
        class="mt-12 md:mt-0 flex justify-center md:w-[486px] w-full lg:w-[616px] relative"
      >
        <img
          class="w-4/5 max-w-[486px] relative"
          src="/img/tender-stack.png"
          alt="hero image"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
