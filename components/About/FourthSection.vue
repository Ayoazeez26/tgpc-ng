<script setup lang="ts">
const team = ref([
  {
    img: "john-lg",
    name: "John Doe",
    position: "Marketing Manager",
    desc: "John is responsible for developing and implementing marketing strategies.",
    linkedIn: "#",
    twitter: "#",
    dribble: "#",
  },
  {
    img: "jane-lg",
    name: "Jane Smith",
    position: "Social Media Manager",
    desc: "Jane oversees our social media prescence and engagement.",
    linkedIn: "#",
    twitter: "#",
    dribble: "#",
  },
  {
    img: "mike-lg",
    name: "Michael Johnson",
    position: "Bid Writer",
    desc: "Michael is responsible for writing compelling bids and proposals.",
    linkedIn: "#",
    twitter: "#",
    dribble: "#",
  },
  {
    img: "emily-lg",
    name: "Emily Brown",
    position: "Care Plan Writer",
    desc: "Emily creates detailed care plans for our health and social care clients.",
    linkedIn: "#",
    twitter: "#",
    dribble: "#",
  },
  {
    img: "david-lg",
    name: "David Wilson",
    position: "Branding Specialist",
    desc: "David develops and maintains our brand identity and visual assets.",
    linkedIn: "#",
    twitter: "#",
    dribble: "#",
  },
  {
    img: "sarah-lg",
    name: "Sarah Thompson",
    position: "Tender Writer",
    desc: "Sarah specializes in writing persuasive and winning tender proposals",
    linkedIn: "#",
    twitter: "#",
    dribble: "#",
  },
]);
</script>
<template>
  <div class="bg-white py-[60px] lg:py-[112px] w-full">
    <div
      class="flex flex-col px-5 xl:px-0 items-start justify-center mx-auto w-full max-w-[1312px]"
    >
      <div class="w-full flex flex-col gap-6 max-w-[768px] self-start">
        <h2
          class="font-bold leading-snug lg:leading-[120%] text-[36px] lg:text-[48px] text-black dark:text-white"
        >
          Meet Our Team
        </h2>

        <p class="leading-[150%] md:text-lg md:leading-[150%]">
          Get to know the dedicated professionals behind TGPC's success
        </p>
      </div>
      <div class="mt-20 gap-x-8 gap-y-16 flex justify-center flex-wrap w-full">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="bg-transparent w-full md:max-w-[304px] gap-6 flex flex-col items-start"
        >
          <img
            class="w-full sm:w-[304px]"
            :src="`/img/${member.img}.png`"
            alt="john"
          />
          <div class="flex flex-col">
            <p class="text-xl font-medium leading-[150%]">{{ member.name }}</p>
            <p class="text-lg leading-[150%]">{{ member.position }}</p>
            <p class="leading-[150%] mt-4">
              {{ member.desc }}
            </p>
          </div>
          <div class="flex gap-[14px]">
            <a :herf="member.linkedIn">
              <img src="/svg/linkedin.svg" alt="linkedin" />
            </a>
            <a :herf="member.twitter">
              <img src="/svg/x.svg" alt="x" />
            </a>
            <a :herf="member.dribble">
              <img src="/svg/dribble.svg" alt="dribble" />
            </a>
          </div>
        </div>
      </div>
      <div class="mt-24">
        <h3 class="text-[32px] font-bold leading-[130%]">We're hiring!</h3>
        <p class="leading-[150%] md:text-lg mt-4 md:leading-[150%]">
          We're always on the look out for passionate, dynamic and talented
          individuals.
        </p>
      </div>
      <div class="flex w-full gap-6 md:w-auto mt-6">
        <nuxt-link
          to="#contact"
          class="border border-grey-3 bg-white w-full md:w-auto text-center text-sm font-semibold py-4 px-8 rounded text-black/50"
          >Open Positions
          <Icon
            name="mdi:arrow-right"
            color="#0A0A0A77"
            size="20"
            class="ml-1 mb-0.5"
          />
        </nuxt-link>
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
