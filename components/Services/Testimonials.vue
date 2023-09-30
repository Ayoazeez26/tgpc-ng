<script setup lang="ts">
const services = ref([
  {
    name: "Crystallize Care Services",
    title: "`",
    image: "impact1",
    desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  },
  {
    name: "Client's Name",
    title: "Position",
    image: "impact2",
    desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  },
  // {
  //   name: "Client's Name",
  //   title: "Position",
  //   image: "impact1",
  //   desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  // },
]);
</script>
<template>
  <div class="bg-white flex flex-col py-16 lg:py-[112px] px-5 xl:px-0 w-full">
    <div class="w-full mx-auto max-w-[1312px]">
      <div class="w-full max-w-[560px]">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
        >
          Client Stories
        </h2>

        <p class="leading-[150%] md:text-lg mt-6 md:leading-[150%]">
          Hear from our satisfied clients about their experiences
        </p>
      </div>
      <div
        class="flex flex-col lg:flex-row gap-y-12 justify-between mt-20 items-start"
      >
        <div
          class="flex flex-col justify-between relative rounded-2xl w-full md:max-w-[608px]"
        >
          <div class="flex gap-1">
            <img v-for="i in 5" :key="i" src="/svg/star.svg" alt="star" />
          </div>
          <h6 class="text-xl text-primary font-semibold leading-[140%] my-8">
            One of the most efficient and customer friendly consultants I have
            ever worked with... excelent to say the least!
          </h6>
          <div class="flex items-center gap-3">
            <div
              class="flex flex-col md:flex-row gap-4 md:gap-5 md:items-center"
            >
              <img class="w-14" src="/svg/icon-place.svg" alt="impact image" />
              <div class="flex flex-col">
                <p class="font-medium text-black">Raymond sho</p>
                <!-- <p class="">Marketing Director, XYZ Company</p> -->
              </div>
              <!-- <div class="w-px hidden md:block h-[60px] bg-black" />
              <img class="w-[120px]" src="/svg/webflow-sm.svg" alt="impact image" /> -->
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-between relative rounded-2xl w-full md:max-w-[608px]"
        >
          <div class="flex gap-1">
            <img v-for="i in 5" :key="i" src="/svg/star.svg" alt="star" />
          </div>
          <h6 class="text-xl text-primary font-semibold leading-[140%] my-8">
            Always quick to respond to tender writing and any questions you
            have. I highly recommend them
          </h6>
          <div class="flex items-center gap-3">
            <div
              class="flex flex-col md:flex-row gap-4 md:gap-5 md:items-center"
            >
              <img class="w-14" src="/svg/icon-place.svg" alt="impact image" />
              <div class="flex flex-col">
                <p class="font-medium text-black">Rose Care</p>
                <!-- <p class="">CEO, ABC Corporation</p> -->
              </div>
              <!-- <div class="w-px hidden md:block h-[60px] bg-black" />
              <img class="w-[120px]" src="/svg/webflow-sm.svg" alt="impact image" /> -->
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex justify-center w-full md:w-auto mt-6 md:mt-10">
        <a
          href="/contact"
          class="border border-black bg-black w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded text-white"
          >View all
          <Icon
            name="mdi:arrow-right"
            color="#FFF"
            size="20"
            class="ml-1 mb-0.5"
        /></a>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
