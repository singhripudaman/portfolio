<template>
  <div class="bg-[#111] font-roboto relative scroll-smooth">
    <!-- Navigation -->
    <nav
      :class="[
        'text-white flex justify-center items-center gap-4 py-4 fixed top-0 left-0 w-full z-30 transition-all duration-300',
        // Large screens: text-xl
        'text-base md:text-lg lg:text-xl',
        // Responsive padding
        'px-4 md:px-6 lg:px-8',
        // Background based on scroll
        isScrolled ? 'bg-[#111] backdrop-blur-sm shadow-lg' : 'bg-transparent',
      ]"
    >
      <a class="hover:text-sky-300 transition-colors" href="#about">About</a>
      <a class="nav-link hover:text-sky-300 transition-colors" href="#skills">Skills</a>
      <a class="nav-link hover:text-sky-300 transition-colors" href="#projects">Projects</a>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen">
      <!-- Particles Background -->
      <vue-particles id="tsparticles" :options="amongUs" class="inset-0 z-10" />

      <!-- Main Content -->
      <div class="relative z-20 flex justify-center items-center h-screen px-4">
        <div class="text-white flex flex-col text-center">
          <h1 class="text-lg sm:text-xl md:text-2xl mb-2">Hello, I am</h1>
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Ripudaman Singh</h1>
        </div>
      </div>
    </section>

    <!-- Additional Content for Scrolling -->
    <section
      class="bg-[#111] min-h-screen p-4 sm:p-6 md:p-8 absolute top-screen w-full flex flex-col gap-14"
    >
      <!-- About Section -->
      <AboutSection />

      <!-- Skills Section -->
      <SkillsSection />

      <!-- Projects Section -->
      <ProjectsSection />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { amongUs } from './assets/js/among_us'
import AboutSection from './components/About.vue'
import SkillsSection from './components/Skills.vue'
import ProjectsSection from './components/Projects.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
