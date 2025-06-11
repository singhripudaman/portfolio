<template>
  <div id="about" class="max-w-[90rem] mx-auto text-white scroll-mt-24">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">About Me</h2>
    <div class="space-y-4 md:space-y-6">
      <p class="text-sm sm:text-base md:text-lg leading-relaxed">
        Recent graduate with a strong academic record and experience in research, software
        development, and data analysis. Skilled in Python, C++ and web development. Passionate about
        creating innovative solutions to solve complex problems.
      </p>
      <div class="flex flex-col items-center gap-4">
        <div class="flex justify-center gap-6">
          <a
            href="https://github.com/singhripudaman"
            target="_blank"
            class="text-2xl hover:text-sky-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            href="https://linkedin.com/in/singh-ripudaman"
            target="_blank"
            class="text-2xl hover:text-sky-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            href="mailto:ripudamans@mun.ca"
            class="text-2xl hover:text-sky-300 transition-colors"
            aria-label="Email Contact"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
        </div>
        <a
          href="/Ripudaman_Singh_Resume.pdf"
          download
          class="text-center text-base px-5 py-3 bg-sky-800 rounded-full hover:bg-sky-700 transition-colors"
          aria-label="Download Resume"
        >
          Download Resume
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'AboutSection',
})
</script>
