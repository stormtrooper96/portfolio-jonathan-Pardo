import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/variables.css'
import './assets/css/template.css'
import './assets/css/responsive.css'
import './assets/css/home.css'
import './assets/css/bio.css'
import './assets/css/contact.css'
import './assets/css/portfolio.css'
import './assets/css/footer.css'

createApp(App).use(router).mount('#app')
