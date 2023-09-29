<script setup lang="ts"></script>
<template>
  <div class="bg-white py-16 lg:py-[112px] w-full">
    <div
      class="flex flex-col px-5 xl:px-0 justify-center lg:items-center w-full mx-auto max-w-[1312px]"
    >
      <div
        class="flex flex-col md:flex-row justify-between w-full"
      >
        <div class="w-full md:ml-4 max-w-[616px]">
          <h2
            class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
          >
            Start Your Offshoring Journey
          </h2>
        </div>
        <div
          class="flex flex-col justify-center md:w-[486px] w-full lg:w-[616px] relative"
        >
          <p class="mt-5 leading-[150%] md:text-lg md:leading-[150%] md:mt-4">
            Contact TGPC today to begin your offshoring or outsourcing journey.
            Our team of experts will guide you through the process and provide
            you with the best solutions for your business needs.
          </p>
          <div
            class="flex flex-col md:flex-row gap-6 md:gap-5 mt-10 w-full md:w-auto"
          >
            <nuxt-link
              to="#contact"
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
              class="border border-grey-3 bg-white w-full md:w-auto text-center flex items-center justify-center text-sm font-semibold py-4 px-8 rounded leading-none text-black"
              >Learn more
            </nuxt-link>
          </div>
        </div>
      </div>
      <div id="about" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
