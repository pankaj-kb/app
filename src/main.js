// CSS.
import 'https://github.com/pankaj-kb/app/blob/f1e26813a729e255c5d459de581dae6a30cbe00f/src/assets/styles.css'
import './main.css'

//Day.js
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

// Routing.
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Create the app.
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).use(router).mount('#app')