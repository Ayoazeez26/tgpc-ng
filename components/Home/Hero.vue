<script setup lang="ts"></script>
<template>
  <div
    class="hero bg-blend-normal bg-no-repeat bg-contain bg-center pt-[80px] lg:pt-[100px] w-full h-screen"
  >
    <div
      class="flex flex-col px-4 lg:px-0 justify-center lg:items-center mx-auto h-full w-full max-w-[1312px]"
    >
      <div
        class="w-full max-w-[822px] flex flex-col items-center text-center mt-[120px] mb-16"
      >
        <h1
          class="text-bg font-bold leading-snug lg:leading-tight text-[40px] lg:text-[56px] text-black dark:text-white"
        >
          Transforming Businesses Through HR Outsourcing Solutions
        </h1>
        <!-- <div class="mt-3 md:hidden mb-12 max-w-[509px] relative pr-4">
          <img
            class="w-full max-w-[491px] relative z-10"
            src="/img/hero-img.png"
            alt="hero image"
          />
          <div
            class="absolute w-[calc(100%-16px)] h-full bg-black dark:bg-white rounded-lg top-4 right-0 z-0"
          />
        </div> -->
        <!-- <p class="leading-7 mt-4 w-full max-w-[612px]">
          The Good Practice Company NG is a trusted quality assurance auditing
          company that strives to improve healthcare and social care services in
          Nigeria. We work with individuals and communities to make a positive
          impact on their lives.
        </p> -->
        <div
          class="flex flex-col md:flex-row gap-3 md:gap-5 mt-10 w-full md:w-auto"
        >
          <nuxt-link
            to="#contact"
            class="border-2 border-white text-center text-sm bg-white font-semibold px-8 py-4 leading-none rounded text-black"
            >Work with us
            <Icon
              name="mdi:arrow-right"
              color="#0A0A0A"
              size="20"
              class="ml-1 mb-0.5"
          /></nuxt-link>
          <nuxt-link
            to="#contact"
            class="border border-grey-3 bg-black text-center text-sm font-semibold py-4 px-8 rounded leading-none text-white"
            >Learn more
            <Icon
              name="mdi:arrow-down"
              color="#FFF"
              size="20"
              class="ml-1 mb-0.5"
          /></nuxt-link>
        </div>
        <div class="border border-grey-3 bg-black px-6 py-8 rounded-full mt-20">
          <Icon
            name="mdi:arrow-down"
            color="#FFF"
            size="20"
            class="ml-1 mb-0.5"
          />
        </div>
      </div>
      <!-- <div class="mt-3 md:mt-0 w-full relative">
        <img
          class="w-full"
          src="/img/vid-place.png"
          alt="hero image"
        />
      </div> -->
      <div id="about" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url("/img/hero-bg.png"),
    linear-gradient(111deg, rgba(0, 6, 26, 0.95) 0%, #0a0a0a 100%);
  // background-image: url("/img/bg-hero.png");
}
</style>
