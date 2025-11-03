import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bio from '../views/Bio.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import CV from '../views/CV.vue'
import ProjectsManager from '../views/ProjectsManager.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/biografia',
    name: 'Bio',
    component: Bio
  },
  {
    path: '/portafolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
  {
    path: '/proyectos',
    name: 'ProjectsManager',
    component: ProjectsManager
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

