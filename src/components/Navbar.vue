<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/" @click="closeMenu">Jonathan Andres Pardo</router-link>
    <button 
      class="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/portafolio" @click="closeMenu">Portafolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/proyectos" @click="closeMenu">Proyectos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/biografia" @click="closeMenu">Biografia</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cv" @click="closeMenu">CV</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacto" @click="closeMenu">Contacto</router-link>
        </li>
      </ul>
      <div class="navbar-nav ml-auto">
        <DarkModeToggle />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import DarkModeToggle from './DarkModeToggle.vue'

const navbarCollapse = ref(null)
const router = useRouter()

const closeMenu = () => {
  // Esperar a que el DOM se actualice
  nextTick(() => {
    if (window.innerWidth < 992) {
      // Método 1: Usar jQuery con Bootstrap 4 (si está disponible)
      if (window.$ && navbarCollapse.value && window.$(navbarCollapse.value).length) {
        window.$(navbarCollapse.value).collapse('hide')
      }
      
      // Método 2: Alternativa directa manipulando clases y atributos
      const collapseElement = document.getElementById('navbarNav')
      if (collapseElement) {
        collapseElement.classList.remove('show')
        // Actualizar el estado del botón toggler
        const toggler = document.querySelector('.navbar-toggler')
        if (toggler) {
          toggler.setAttribute('aria-expanded', 'false')
          toggler.classList.add('collapsed')
        }
      }
    }
  })
}

// Cerrar el menú cuando cambia la ruta
onMounted(() => {
  // Escuchar cambios de ruta inmediatamente
  router.afterEach(() => {
    // Pequeño delay para asegurar que la navegación haya ocurrido
    setTimeout(() => {
      closeMenu()
    }, 100)
  })
  
  // También cerrar el menú cuando se hace clic fuera de él
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 992) {
      const nav = document.querySelector('.navbar')
      const collapse = document.getElementById('navbarNav')
      const toggler = document.querySelector('.navbar-toggler')
      
      if (nav && collapse && collapse.classList.contains('show')) {
        // Si el clic no fue en el navbar ni en el menú, cerrarlo
        if (!nav.contains(e.target) && e.target !== toggler) {
          closeMenu()
        }
      }
    }
  })
})
</script>

<style scoped>
/* Asegurar que el toggler se oculte en pantallas grandes */
@media (min-width: 992px) {
  .navbar-toggler {
    display: none !important;
  }
  
  .navbar-collapse {
    display: flex !important;
  }
}

/* Estilos responsive para navbar */
@media (max-width: 991.98px) {
  .navbar-brand {
    font-size: 1rem;
  }
  
  .navbar-nav {
    margin-top: 1rem;
  }
  
  .navbar-nav.ml-auto {
    margin-left: 0 !important;
    margin-top: 0.5rem;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  /* Asegurar que el menú colapsado funcione correctamente */
  .navbar-collapse {
    background-color: rgba(52, 58, 64, 0.98);
    padding: 1rem;
    margin-top: 0.5rem;
    border-radius: 4px;
  }
}

@media (max-width: 575.98px) {
  .navbar-brand {
    font-size: 0.9rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.75rem;
  }
  
  .navbar-toggler {
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
  }
}
</style>

