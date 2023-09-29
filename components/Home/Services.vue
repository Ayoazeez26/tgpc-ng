<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();
const container = ref(null);
const pinnedElement = ref(null);

const mm = $gsap.matchMedia();

const offsets = ref([262, 234, 234, 234, 234, 262, 262, 262]);
const spacer = ref(40);

const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
onMounted(() => {
  setTimeout(() => {
    console.log("mounted");
    $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    mm.add("(min-width: 1024px)", () => {
      const cards = document.querySelectorAll(".card");
      $gsap.utils.toArray(cards).forEach((card, index) => {
        $ScrollTrigger.create({
          trigger: card,
          start: `top top+=40%`,
          endTrigger: container.value,
          end: `bottom 40%+=262`,
          pin: true,
          pinSpacing: false,
          // markers: true,
          id: "pin",
          scale: () => 1 - (cards.length - index) * 0.025,
          invalidateOnRefresh: true,
        });
      });

      $ScrollTrigger.create({
        trigger: pinnedElement.value,
        start: "top top+=40%",
        end: (self) => self.previous().end,
        pin: true,
        // markers: true
      });
    });
  });
});
</script>
<template>
  <div class="bg-black-2 w-full mx-auto py-16 lg:pt-[120px] lg:pb-[220px]">
    <div
      ref="container"
      class="mb-8 px-5 xl:px-0 flex flex-col md:flex-row items-start mx-auto w-full max-w-[1312px]"
    >
      <div
        ref="pinnedElement"
        class="flex flex-col items-start mt-6 lg:mt-0 w-full"
      >
        <div class="w-full max-w-[616px]">
          <h2
            class="text-bg font-bold leading-snug text-[28px] lg:text-[48px] lg:leading-[56px]"
          >
            Streamline Your Operations with TGPC’s Offshoring Solutions
          </h2>
        </div>
        <img class="" src="/svg/mission-bg.svg" alt="mission line" />
      </div>
      <div class="flex flex-col mt-20 gap-y-10 lg:mt-0">
        <div
          class="card flex gap-10 card-1 bg-white border-2 border-black-2 rounded py-14 px-8 relative w-full md:w-[580px] -rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">01</h4>
          <div class="flex flex-col">
            <h4 class="text-xl text-black font-semibold">Discover More</h4>
            <p class="mt-1 leading-[150%]">
              Partner with TGPC to outsource essential departments, saving costs
              and increasing efficiency.
            </p>
          </div>
        </div>
        <div
          class="card flex gap-10 card-2 bg-white border-2 border-black-2 rounded py-14 px-8 relative w-full md:w-[580px] rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">02</h4>
          <div class="flex flex-col">
            <h4 class="text-xl text-black font-semibold">Efficient Process</h4>
            <p class="mt-1 leading-[150%]">
              Our streamlined process ensures a seamless transition and
              effective management of offshored departments.
            </p>
          </div>
        </div>
        <div
          class="card flex gap-10 card-3 bg-white border-2 border-black-2 rounded py-14 px-8 relative w-full md:w-[580px] -rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">03</h4>
          <div class="flex flex-col">
            <h4 class="text-xl text-black font-semibold">Expert Staff</h4>
            <p class="mt-1 leading-[150%]">
              Access our pool of expert staff to handle your offshored
              departments with professionalism and dedication.
            </p>
          </div>
        </div>
        <div
          class="card flex gap-10 card-4 bg-white border-2 border-black-2 rounded py-14 px-8 relative w-full md:w-[580px] rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">04</h4>
          <div class="flex flex-col">
            <h4 class="text-xl text-black font-semibold">Cost Savings</h4>
            <p class="mt-1 leading-[150%]">
              By offshoring with TGPC, you can reduce costs while maintaining
              high-quality services.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
