import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
import router from './router/router'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
