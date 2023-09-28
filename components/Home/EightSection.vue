<script setup lang="ts"></script>
<template>
  <div class="py-[140px] lg:py-[112px] mx-auto w-full max-w-[1312px]">
    <div class="flex flex-col px-4 lg:px-0 items-center justify-center w-full">
      <div class="w-full flex flex-col gap-6 md:ml-4 max-w-[768px] text-center">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-3xl lg:text-[48px] text-black dark:text-white"
        >
          We'd love to hear from you
        </h2>

        <p class="leading-7 md:text-lg md:leading-[150%]">
          Chat to our friendly team.
        </p>
      </div>
      <img class="rounded-2xl" src="/img/hear-img.png" alt="hear img" />
      <div class="mt-24 gap-8 flex justify-center flex-wrap w-full">
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-16 flex flex-col p-6"
        >
          <img class="w-12" src="/img/chat.png" alt="cost" />
          <div class="flex flex-col">
            <h3 class="text-xl font-bold leading-[140%]">Chat to sales</h3>
            <p class="leading-[150%]">Speak to our friendly team.</p>
            <a href="mailto:ssales@untitledui.com" class="mt-5 underline">sales@untitledui.com</a>
          </div>
        </div>
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-16 flex flex-col p-6"
        >
          <img class="w-12" src="/img/location.png" alt="cost" />
          <div class="flex flex-col">
            <h3 class="text-xl font-bold leading-[140%]">Chat to sales</h3>
            <p class="leading-[150%]">Speak to our friendly team.</p>
            <p class="mt-5 underline">100 Smith Street <br> Collingwood VIC 3066 AU</p>
          </div>
        </div>
        <div
          class="border border-grey-3 bg-white rounded-2xl w-full md:max-w-[384px] gap-16 flex flex-col p-6"
        >
          <img class="w-12" src="/img/phone.png" alt="cost" />
          <div class="flex flex-col">
            <h3 class="text-xl font-bold leading-[140%]">Visit us</h3>
            <p class="leading-[150%]">Visit our office HQ.</p>
            <p class="mt-5 underline">+1 (555) 000-0000</p>
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
