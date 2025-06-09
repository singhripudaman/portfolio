<template>
  <div id="skills" class="max-w-4xl mx-auto text-white">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Skills</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      <div
        v-for="skillCategory in skills"
        :key="skillCategory.category"
        class="bg-[#222] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
      >
        <h3 class="text-lg md:text-xl font-semibold mb-4 text-sky-300">
          {{ skillCategory.category }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in skillCategory.items"
            :key="skill"
            class="px-3 py-1 bg-[#333] rounded-full text-sm"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import skills from '../assets/skills'

defineOptions({
  name: 'SkillsSection',
})
</script>
