<script setup lang="ts">
import gsap from 'gsap';

const contactIcons = [
  {
    name: 'ri-github-line',
    link: 'https://github.com/arnavp103',
    text: 'Github',
  },
  {
    name: 'ri-linkedin-line',
    link: 'https://www.linkedin.com/in/arnav-priyadarshi-82a81b1bb/',
    text: 'LinkedIn',
  },
  {
    name: 'ri-mail-line',
    link: 'mailto:arnavp103@gmail.com',
    text: 'Email',
  },
  {
    name: 'ri-file-download-line',
    link: '/Resume.pdf',
    text: 'Resume',
  }
]

const beforeEnter = (el: Element) => {
  const elem = el as HTMLElement
  elem.style.opacity = '0';
  elem.style.transform = 'translateY(100%)';
};

const enter = (el: Element, done: () => void) => {
  const elem = el as HTMLElement
  gsap.to(elem, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    onComplete: done,
    delay: (elem.dataset.index as unknown as number) * 0.2 + 0.6
  })

};

</script>

<template>
  <main class="w-full flex flex-col justify-center items-center">
    <div class="w-content flex flex-col items-center">
      <Transition name="rise" appear>
        <section class="greeting text-4xl md:text-6xl font-mono w-full m-4">
          <h1 class="py-2">
            <div class="hover:motion-safe:animate-[wiggle_1s_ease-in-out_infinite] inline-block">✋</div>
            Hi!
          </h1>
          <h1>
            I'm Arnav Priyadarshi
          </h1>

          <h3 class="px-2 text-3xl pt-4 my-2 border-b-4 border-double border-cyan-600">About me</h3>
          <p class="text-2xl font-mono">- I'm currently studying for a computer science degree in Toronto,
            <span class="text-3xl">🇨🇦</span>
          </p>

          <p class="text-2xl font-mono">- I'm an inquiring mind whose interests encompass hundreds of subjects from AI
            alignment to Zombie Movies
            <span class="text-3xl">🧠</span>
          </p>

          <p class="text-2xl font-mono">- I'm aspiring to be a software engineer who builds things that make people's
            lives easier
            <span class="text-3xl">👨‍💻</span>
          </p>

        </section>
      </Transition>

      <Transition name="rise" appear>
        <section class="get-in-touch text-6xl font-mono w-full m-4">
          <h3 class="px-2 text-3xl pt-4 my-2 border-b-4 border-double border-cyan-600">Get in Touch</h3>
          <TransitionGroup appear tag="ul" @before-enter="beforeEnter" @enter="enter"
            class="text-lg flex flex-row items-center flex-wrap justify-between w-full">
            <li v-for="(icon, index) in contactIcons" :key="icon.name" :data-index="index"
              class="list-none rounded-md bg-blue-100 md:w-1/5 w-2/5 h-12 flex flex-col justify-center py-12 m-4">
              <a :href="icon.link" class="flex flex-col items-center justify-center ">
                <i :class="icon.name" class="ri-2x mb-2"></i>
                <div class="font-sans text-center text-lg">{{ icon.text }}</div>
              </a>
            </li>
          </TransitionGroup>

        </section>
      </Transition>
    </div>
  </main>
</template>

<style scoped>
.rise-enter-from,
.rise-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.rise-enter-active {
  transition: all 0.4s ease;
}
</style>