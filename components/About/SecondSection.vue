<script setup lang="ts"></script>
<template>
  <div
    class="bg-grey-2 bg-blend-normal pt-[80px] lg:pt-[212px] lg:pb-[112px] w-full"
  >
    <div
      class="flex flex-col px-4 lg:px-0 justify-center lg:items-center w-full mx-auto max-w-[1312px]"
    >
      <div
        class="flex flex-col md:flex-row px-4 lg:px-0 justify-between w-full"
      >
        <div class="w-full md:ml-4 max-w-[616px]">
          <div class="text-primary font-medium mb-4">Excellence</div>
          <h2
            class="font-bold leading-snug lg:leading-[120%] text-3xl lg:text-[48px] text-black dark:text-white"
          >
            Outsourcing and Offshoring Solutions for Businesses
          </h2>
        </div>
        <div
          class="mt-12 md:mt-0 flex flex-col justify-center md:w-[486px] w-full lg:w-[616px] relative"
        >
          <p class="mt-8 leading-7 md:text-lg md:leading-[150%] md:mt-4">
            At TGPC, we are dedicated to providing businesses with customized
            offshoring and outsourcing solutions. With our expertise and
            commitment to excellence, we help companies streamline their
            operations and achieve cost savings. Our journey as a Human Resource
            Outsourcing and Offshoring solution provider has been driven by a
            passion for delivering exceptional service and value to our
            international clientele.
          </p>
          <div class="flex w-full md:w-auto gap-6 mt-10">
            <nuxt-link
              to="#contact"
              class="border border-grey-3 bg-white w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded leading-none text-black"
              >Learn more
              <Icon
                name="mdi:arrow-right"
                color="#0A0A0A"
                size="20"
                class="ml-1 mb-0.5"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="mt-10 md:mt-20 w-full">
        <img src="/img/excellence-img.png" alt="excellence image">
      </div>
      <div id="about" />
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
