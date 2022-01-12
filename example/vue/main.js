import { createApp } from 'vue'
import Counter from './Counter.vue'
import App from './App.vue'

const app = createApp(App)

app.component('Counter', Counter)

app.mount('#app')
