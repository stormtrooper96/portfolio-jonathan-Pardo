<template>
  <button 
    @click="toggleLanguage"
    class="language-toggle"
    :aria-label="currentLocale === 'en' ? 'Cambiar a español' : 'Switch to English'"
    :title="currentLocale === 'en' ? 'Switch to English' : 'Cambiar a español'"
  >
    <i class="fas fa-globe toggle-icon"></i>
    <span class="language-code">{{ currentLocale.toUpperCase() }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'es' : 'en'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>

<style scoped>
.language-toggle {
  background: transparent;
  border: 2px solid var(--text-secondary, #6c757d);
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--text-primary, #ffffff);
  transition: all 0.3s ease;
  margin-left: 10px;
  font-size: 0.85rem;
}

.language-toggle:hover {
  background: var(--bg-secondary, rgba(255, 255, 255, 0.1));
  border-color: var(--accent-primary, #007bff);
  transform: scale(1.05);
}

[data-theme="dark"] .language-toggle {
  border-color: var(--text-secondary, #b0b0b0);
  color: var(--text-primary, #ffffff);
}

[data-theme="dark"] .language-toggle:hover {
  background: var(--bg-secondary, #2d2d2d);
  border-color: var(--accent-primary, #4dabf7);
}

.toggle-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.language-code {
  font-weight: 600;
  font-size: 0.8rem;
}

.language-toggle:hover .toggle-icon {
  transform: rotate(15deg);
}

/* Ajustes para móviles */
@media (max-width: 575.98px) {
  .language-toggle {
    padding: 0.3rem 0.6rem;
    margin-left: 5px;
    font-size: 0.75rem;
  }
  
  .toggle-icon {
    font-size: 0.9rem;
  }
  
  .language-code {
    font-size: 0.7rem;
  }
}
</style>

