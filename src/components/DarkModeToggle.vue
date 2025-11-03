<template>
  <button 
    @click="toggleTheme"
    class="dark-mode-toggle"
    :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    title="${isDark ? 'Light Mode' : 'Dark Mode'}"
  >
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'" class="toggle-icon"></i>
  </button>
</template>

<script setup>
import { useDarkMode } from '../composables/useDarkMode'

const { isDark, toggleTheme } = useDarkMode()
</script>

<style scoped>
.dark-mode-toggle {
  background: transparent;
  border: 2px solid var(--text-secondary, #6c757d);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary, #212529);
  transition: all 0.3s ease;
  padding: 0;
  margin-left: 15px;
}

.dark-mode-toggle:hover {
  background: var(--bg-secondary, #f8f9fa);
  border-color: var(--accent-primary, #007bff);
  transform: scale(1.1);
}

[data-theme="dark"] .dark-mode-toggle {
  border-color: var(--text-secondary, #b0b0b0);
  color: var(--text-primary, #ffffff);
}

[data-theme="dark"] .dark-mode-toggle:hover {
  background: var(--bg-secondary, #2d2d2d);
  border-color: var(--accent-primary, #4dabf7);
}

.toggle-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.dark-mode-toggle:hover .toggle-icon {
  transform: rotate(15deg);
}

/* Ajustes para móviles */
@media (max-width: 575.98px) {
  .dark-mode-toggle {
    width: 36px;
    height: 36px;
    margin-left: 10px;
  }
  
  .toggle-icon {
    font-size: 1rem;
  }
}
</style>

