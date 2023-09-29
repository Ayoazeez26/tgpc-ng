<script setup lang="ts"></script>
<template>
  <div class="py-16 lg:py-[112px] mx-auto w-full max-w-[1312px]">
    <div
      class="flex flex-col md:flex-row px-5 xl:px-0 items-center justify-between w-full"
    >
      <div class="w-full md:ml-4 max-w-[616px]">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-[32px] lg:text-[40px] text-black dark:text-white"
        >
          Discover the Benefits of Outsourcing and Offshoring with TGPC
        </h2>

        <p class="mt-5 leading-[150%] md:text-lg md:leading-[150%] md:mt-6">
          Explore the advantages of partnering with TGPC for your outsourcing
          and offshoring needs. Our services can help reduce expenses and
          improve efficiency, allowing you to focus on your core business.
        </p>
        <ul class="check-list list-inside flex flex-col gap-4 px-4 py-2 mt-8">
          <li>Cost-effective Offshoring Solutions</li>
          <li>Enhanced Operational Efficiency</li>
          <li>Expertise at Affordable Rates</li>
        </ul>
      </div>
      <div
        class="mt-12 md:mt-0 flex justify-center w-full max-w-[616px] relative"
      >
        <img
          class="w-full relative"
          src="/img/discover-img.png"
          alt="hero image"
        />
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
