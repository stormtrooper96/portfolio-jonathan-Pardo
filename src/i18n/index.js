import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import es from '../locales/es.json'

// Obtener idioma guardado en localStorage o usar inglés por defecto
const savedLocale = localStorage.getItem('locale') || 'en'
const defaultLocale = savedLocale === 'es' ? 'es' : 'en'

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})

export default i18n

