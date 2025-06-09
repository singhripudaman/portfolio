import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'

/* Import Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* Add icons to the library */
library.add(faGithub, faLinkedin, faEnvelope)

const app = createApp(App)

/* Register Font Awesome component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine)
  },
})

app.mount('#app')
