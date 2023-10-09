<script setup lang="ts"></script>
<template>
  <div class="bg-white py-16 lg:py-[112px] w-full">
    <div
      class="flex flex-col md:flex-row px-5 xl:px-0 items-center justify-between w-full mx-auto max-w-[1312px]"
    >
      <div class="w-full md:ml-4 max-w-[616px]">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-[32px] lg:text-[40px] text-black dark:text-white"
        >
          Tailored Solutions for Outsourcing and Offshoring Specific Departments
        </h2>

        <p class="mt-5 leading-[150%] md:text-lg md:leading-[150%] md:mt-6">
          At TGPC, we offer tailored solutions for outsourcing and offshoring
          specific departments that may be outside of your core service or too
          expensive to handle in-house. Our international clientele benefits
          from our professional and committed offshoring service.
        </p>
        <p class=" mt-5 md:mt-8 mb-2">List of industries we outsource to:</p>
        <ul class="check-list list-inside flex flex-col gap-4 px-4 py-2">
          <li>Agribusiness</li>
          <li>Health and Social Care</li>
          <li>Transportation</li>
        </ul>
      </div>
      <div
        class="mt-12 md:mt-0 flex justify-center w-full max-w-[616px] relative"
      >
        <img
          class="w-full relative"
          src="/img/tailored.png"
          alt="tailored image"
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
