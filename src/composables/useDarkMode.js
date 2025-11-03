import { ref, onMounted } from 'vue'

const isDark = ref(false)

const applyTheme = () => {
  const root = document.documentElement
  if (isDark.value) {
    root.setAttribute('data-theme', 'dark')
  } else {
    root.setAttribute('data-theme', 'light')
  }
}

const initTheme = () => {
  // Intentar cargar desde LocalStorage
  const stored = localStorage.getItem('dark-mode')
  
  if (stored !== null) {
    isDark.value = stored === 'true'
  } else {
    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
  }
  
  applyTheme()
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('dark-mode', isDark.value.toString())
  applyTheme()
}

export const useDarkMode = () => {
  // Inicializar tema al cargar
  if (typeof window !== 'undefined') {
    initTheme()
    
    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      // Solo aplicar si no hay preferencia guardada
      if (localStorage.getItem('dark-mode') === null) {
        isDark.value = e.matches
        applyTheme()
      }
    }
    mediaQuery.addEventListener('change', handleChange)
  }

  return {
    isDark,
    toggleTheme
  }
}

