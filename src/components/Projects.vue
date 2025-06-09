<template>
  <div id="projects" class="max-w-4xl mx-auto text-white">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div
        v-for="project in projects"
        :key="project.name"
        class="bg-[#222] p-4 md:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 flex flex-col"
      >
        <div class="w-full h-40 rounded-lg mb-4 bg-gray-700 overflow-hidden">
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-full object-cover"
            @error="$event.target.style.display = 'none'"
          />
        </div>
        <h3 class="text-lg md:text-xl font-semibold mb-3 md:mb-4">{{ project.name }}</h3>
        <p class="text-sm md:text-base flex-grow">{{ project.description }}</p>
        <div class="mt-auto pt-4">
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-2 py-1 text-xs md:text-sm bg-sky-800 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
          <div class="flex flex-col gap-3">
            <a
              v-if="project.links?.github && project.links.github.trim()"
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-3 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
            >
              <font-awesome-icon :icon="['fab', 'github']" class="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a
              v-if="project.links?.demo && project.links.demo.trim()"
              :href="project.links.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full px-3 py-2 text-sm bg-sky-800 hover:bg-sky-700 rounded-lg transition-colors duration-200"
            >
              <font-awesome-icon :icon="['fas', 'eye']" class="w-4 h-4 mr-2" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from '../assets/projects'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faGithub, faEye)

defineOptions({
  name: 'ProjectsSection',
})
</script>
