<script setup lang="ts"></script>
<template>
  <div class="mx-auto w-full">
    <div class="flex flex-col px-5 xl:px-0 items-center justify-center w-full">
      <div
        class="py-[40px] lg:py-[112px] gap-8 flex justify-center flex-wrap w-full max-w-[1312px]"
      >
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-16 flex flex-col p-6"
        >
          <img class="w-12" src="/img/star.png" alt="cost" />
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-bold leading-[140%]">
              Benefits of using TGPC's services:
            </h3>
            <p class="leading-[150%]">
              Seamless Integration, Customized Solutions, Improved Efficiency,
              Access to a Global Talent Pool.
            </p>
          </div>
        </div>
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-16 flex flex-col p-6"
        >
          <img class="w-12" src="/img/star.png" alt="cost" />
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-bold leading-[140%]">
              Benefits of using TGPC's services:
            </h3>
            <p class="leading-[150%]">
              Seamless Integration, Customized Solutions, Improved Efficiency,
              Access to a Global Talent Pool.
            </p>
          </div>
        </div>
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-16 flex flex-col p-6"
        >
          <img class="w-12" src="/img/star.png" alt="cost" />
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-bold leading-[140%]">
              Benefits of using TGPC's services:
            </h3>
            <p class="leading-[150%]">
              Seamless Integration, Customized Solutions, Improved Efficiency,
              Access to a Global Talent Pool.
            </p>
          </div>
        </div>
      </div>
      <div
        class="py-[40px] lg:py-[112px] flex flex-col items-center relative w-full"
      >
        <img
          src="/svg/left-half-grey.svg"
          alt="left half"
          class="absolute hidden md:block top-10 left-0"
        />
        <img
          src="/svg/right-half-grey.svg"
          alt="left half"
          class="absolute hidden md:block bottom-10 right-0"
        />
        <div
          class="w-full max-w-[1312px] mx-auto flex flex-col items-center justify-center"
        >
          <div
            class="w-full flex flex-col gap-6 md:ml-4 max-w-[768px] text-center"
          >
            <h2
              class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
            >
              Streamline Your Operations with TGPC's Services
            </h2>

            <p class="leading-[150%] md:text-lg md:leading-[150%]">
              Discover how TGPC can help your company by providing offshoring
              and matching services. Our bespoke solutions allow you to
              outsource and offshore specific departments, reducing costs and
              improving efficiency.
            </p>
          </div>
          <div class="flex flex-col md:flex-row gap-4 md:gap-5 mt-10 w-full md:w-auto">
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
              class="border border-grey-3 bg-white flex items-center justify-center w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded leading-none text-black"
              >Learn more
            </nuxt-link>
          </div>
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
