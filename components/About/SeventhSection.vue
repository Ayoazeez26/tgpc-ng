<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();
const container = ref(null);
const pinnedElement = ref(null);

// const mm = $gsap.matchMedia();

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
    // mm.add("(min-width: 1024px)", () => {
      $gsap.set(".wrapper", { xPercent: -50, yPercent: -50 });
      const boxWidth = 200,
        totalWidth = boxWidth * 16 + 200,
        time = 20,
        noO1 = document.querySelectorAll(".image"),
        dirFromLeft = "+=" + totalWidth,
        dirFromRight = "-=" + totalWidth;

      const mod = $gsap.utils.wrap(0, totalWidth);

      $gsap.set(noO1, {
        x: function (i) {
          return i * boxWidth;
        },
      });

      const action = $gsap.timeline().to(noO1, {
        x: dirFromRight,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: time,
        ease: "none",
        repeat: -1,
      });
    // });
  });
});
</script>
<template>
  <div class="py-[40px] lg:py-[80px] bg-white w-full overflow-hidden relative">
    <div
      class="flex flex-col px-5 xl:px-0 items-center justify-center mx-auto w-full"
    >
      <div class="w-full flex flex-col gap-6 md:ml-4 max-w-[768px] md:text-center">
        <p class="leading-[150%] text-black font-bold md:text-lg md:leading-[150%]">
          Empowering businesses to achieve extraordinary growth
        </p>
        <div
          class="wrapper w-[400%] h-12 left-1/2 top-[40%] overflow-hidden mt-12"
        >
          <div class="images">
            <div class="image absolute w-[200px] h-12 mx-6">
              <img class="w-[200px] h-12" src="/svg/relume.svg" alt="relume" />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img
                class="w-[200px] h-12"
                src="/svg/webflow.svg"
                alt="webflow"
              />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img class="w-[200px] h-12" src="/svg/relume.svg" alt="relume" />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img
                class="w-[200px] h-12"
                src="/svg/webflow.svg"
                alt="webflow"
              />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img class="w-[200px] h-12" src="/svg/relume.svg" alt="relume" />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img
                class="w-[200px] h-12"
                src="/svg/webflow.svg"
                alt="webflow"
              />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img class="w-[200px] h-12" src="/svg/relume.svg" alt="relume" />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img
                class="w-[200px] h-12"
                src="/svg/webflow.svg"
                alt="webflow"
              />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img class="w-[200px] h-12" src="/svg/relume.svg" alt="relume" />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img
                class="w-[200px] h-12"
                src="/svg/webflow.svg"
                alt="webflow"
              />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img class="w-[200px] h-12" src="/svg/relume.svg" alt="relume" />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img
                class="w-[200px] h-12"
                src="/svg/webflow.svg"
                alt="webflow"
              />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img class="w-[200px] h-12" src="/svg/relume.svg" alt="relume" />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img
                class="w-[200px] h-12"
                src="/svg/webflow.svg"
                alt="webflow"
              />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img class="w-[200px] h-12" src="/svg/relume.svg" alt="relume" />
            </div>
            <div class="image absolute w-[200px] h-12 mx-6">
              <img
                class="w-[200px] h-12"
                src="/svg/webflow.svg"
                alt="webflow"
              />
            </div>
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
