<script setup lang="ts"></script>
<template>
  <div class="bg-white py-16 lg:py-[112px] w-full">
    <div
      class="flex flex-col md:flex-row px-5 xl:px-0 items-center justify-between w-full mx-auto max-w-[1312px]"
    >
      <div class="w-full md:ml-4 max-w-[616px]">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
        >
          Matching Service: Connecting Companies with Expert Staff
        </h2>

        <p class="mt-5 leading-[150%] md:text-lg md:leading-[150%] md:mt-6">
          Our matching service provides companies in need of specialized
          services with expert staff who can deliver exceptional results. We
          understand the importance of finding the right talent to meet your
          unique requirements.
        </p>
        <div class="flex flex-col md:flex-row w-full md:w-auto gap-6 mt-8">
          <div class="flex flex-col gap-2">
            <h4 class="font-bold text-xl leading-[140%]">Expertise</h4>
            <p class="leading-[150%]">
              Access top-tier professionals who excel in their respective
              fields, ensuring high-quality service delivery.
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="font-bold text-xl leading-[140%]">Efficiency</h4>
            <p class="leading-[150%]">
              Save time and resources by leveraging our extensive network of
              skilled professionals.
            </p>
          </div>
        </div>
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
        class="mt-12 md:mt-0 flex justify-center w-full max-w-[616px] relative"
      >
        <img class="w-full relative" src="/img/match.png" alt="hero image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.check-list li {
  background-image: url("~/assets/icons/check-circle.svg");
  background-repeat: no-repeat;
}
li {
  list-style: none;
  padding-left: 30px;
}
li::before {
  content: "";
  display: inline-block;
  background-image: url();
}
</style>
