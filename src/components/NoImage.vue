<template>
  <div class="w-full h-full flex items-center justify-center bg-gray-800 rounded-lg">
    <div class="text-center text-gray-400">
      <font-awesome-icon :icon="['fas', 'image']" class="text-4xl mb-2" />
      <p class="text-sm">No Image Available</p>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faImage)

defineOptions({
  name: 'NoImage',
})
</script>
