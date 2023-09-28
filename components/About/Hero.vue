<script setup lang="ts"></script>
<template>
  <div
    class="bg-white bg-blend-normal pt-[80px] lg:pt-[212px] lg:pb-[112px] w-full"
  >
    <div
      class="flex flex-col px-4 lg:px-0 justify-center lg:items-center w-full mx-auto max-w-[1312px]"
    >
      <div
        class="flex flex-col md:flex-row px-4 lg:px-0 justify-between w-full"
      >
        <div class="w-full md:ml-4 max-w-[616px]">
          <div class="text-primary font-medium mb-4">Empowering</div>
          <h2
            class="font-bold leading-snug lg:leading-[120%] text-3xl lg:text-[48px] text-black dark:text-white"
          >
            Transforming Businesses Globally
          </h2>
        </div>
        <div
          class="mt-12 md:mt-0 flex flex-col justify-center md:w-[486px] w-full lg:w-[616px] relative"
        >
          <p class="mt-8 leading-7 md:text-lg md:leading-[150%] md:mt-4">
            At TGPC, we are dedicated to providing innovative and tailored
            outsourcing and offshoring solutions to businesses worldwide. Our
            mission is to empower companies by offering cost-effective services
            that allow them to focus on their core competencies while we handle
            essential departments such as marketing, bid writing, and social
            media management. With our expertise and commitment to excellence,
            we are transforming businesses globally.
          </p>
          <div class="flex w-full md:w-auto gap-6 mt-10">
            <nuxt-link
              to="#contact"
              class="border border-black bg-black w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded leading-none text-white"
              >Learn more
              <Icon
                name="mdi:arrow-down"
                color="#FFF"
                size="20"
                class="ml-1 mb-0.5"
              />
            </nuxt-link>
            <nuxt-link
              to="#contact"
              class="border border-grey-3 bg-white w-full md:w-auto text-center flex items-center justify-center text-sm font-semibold py-4 px-8 rounded leading-none text-black"
              >Contact us
            </nuxt-link>
          </div>
        </div>
      </div>
      <div id="about" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
