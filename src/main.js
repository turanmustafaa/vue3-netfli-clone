import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalHeader from "@/components/globalHeader"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import store from './store'
import "@/assets/style.css"
const app = createApp(App)
library.add(faMagnifyingGlass)
library.add(faUserSecret)
library.add(faPlay)
library.add(faCircleInfo)
library.add(faCirclePlay)
library.add(faThumbsUp)
library.add(faCheck)
library.add(faAngleDown)
library.add(faXmark)
app.use(store)
app.component("GlobalHeader",GlobalHeader)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
