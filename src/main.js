import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/css/styles.css'
import './assets/fonts/material-design-iconic-font.css'

import axios from 'axios'
import VueAxios from 'vue-axios'



createApp(App).use(router,axios).mount('#app')


