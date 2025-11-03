<template>
  <div class="cv-container">
    <div class="container">
      <!-- Header ATS-Friendly -->
      <div class="row mb-4">
        <div class="col-12 text-center">
          <h1>{{ cvData.personalInfo.name }}</h1>
          <h2 class="h4 text-muted">{{ cvData.personalInfo.jobTitle }}</h2>
          <p class="mb-0">{{ cvData.personalInfo.location }}</p>
          <p>{{ cvData.personalInfo.email }}</p>
        </div>
      </div>

      <!-- Professional Summary -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="cv-section">
            <h2>{{ $t('cv.professionalSummary.title') }}</h2>
            <hr>
            <p>{{ cvData.professionalSummary }}</p>
          </div>
        </div>
      </div>

      <!-- Experience - Each Experience Separated -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="cv-section">
            <h2>{{ $t('cv.workExperience.title') }}</h2>
            <hr>
            <div v-for="exp in cvData.experience" :key="exp.id" class="experience-item mb-4">
              <div class="experience-header">
                <h3>{{ exp.position }}</h3>
                <div class="experience-meta">
                  <span class="sector-badge">{{ exp.sector }}</span>
                  <span class="duration-badge">{{ exp.duration }}</span>
                  <span class="period-text">{{ getPeriodTranslation(exp.period) }}</span>
                </div>
              </div>
              <p class="experience-description">{{ exp.description }}</p>
              <div v-if="exp.responsibilities && exp.responsibilities.length > 0" class="responsibilities mt-3">
                <h4 class="responsibilities-title">{{ $t('cv.keyResponsibilities') }}</h4>
                <ul class="responsibilities-list">
                  <li v-for="(responsibility, idx) in exp.responsibilities" :key="idx">
                    {{ responsibility }}
                  </li>
                </ul>
              </div>
              <div class="experience-skills mt-3">
                <span 
                  v-for="skill in exp.skills" 
                  :key="skill" 
                  class="badge badge-secondary mr-2 mb-2"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Skills - Separated by Category -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="cv-section">
            <h2>{{ $t('cv.technicalSkills.title') }}</h2>
            <hr>
            
            <!-- QA Skills -->
            <div class="skills-category mb-4">
              <h3 class="skills-category-title">
                <i class="fas fa-check-circle mr-2"></i>
                {{ cvData.skillsByCategory.qa.title }}
              </h3>
              <div class="skills-tags">
                <span 
                  v-for="skill in cvData.skillsByCategory.qa.skills" 
                  :key="skill" 
                  class="badge badge-info mr-2 mb-2"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- QA Automation Skills -->
            <div class="skills-category mb-4">
              <h3 class="skills-category-title">
                <i class="fas fa-robot mr-2"></i>
                {{ cvData.skillsByCategory.qaAutomation.title }}
              </h3>
              <div class="skills-tags">
                <span 
                  v-for="skill in cvData.skillsByCategory.qaAutomation.skills" 
                  :key="skill" 
                  class="badge badge-info mr-2 mb-2"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- DevOps Skills -->
            <div class="skills-category mb-4">
              <h3 class="skills-category-title">
                <i class="fas fa-server mr-2"></i>
                {{ cvData.skillsByCategory.devops.title }}
              </h3>
              <div class="skills-tags">
                <span 
                  v-for="skill in cvData.skillsByCategory.devops.skills" 
                  :key="skill" 
                  class="badge badge-info mr-2 mb-2"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Programming Languages - Emphasis -->
            <div class="skills-category mb-4 emphasis-section">
              <h3 class="skills-category-title emphasis-title">
                <i class="fas fa-code mr-2"></i>
                {{ cvData.skillsByCategory.programmingLanguages.title }}
              </h3>
              <div class="skills-tags">
                <span 
                  v-for="skill in cvData.skillsByCategory.programmingLanguages.skills" 
                  :key="skill" 
                  class="badge badge-primary mr-2 mb-2 emphasis-badge"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Tools & Technologies - Emphasis -->
            <div class="skills-category mb-4 emphasis-section">
              <h3 class="skills-category-title emphasis-title">
                <i class="fas fa-tools mr-2"></i>
                {{ cvData.skillsByCategory.tools.title }}
              </h3>
              <div class="skills-tags">
                <span 
                  v-for="skill in cvData.skillsByCategory.tools.skills" 
                  :key="skill" 
                  class="badge badge-primary mr-2 mb-2 emphasis-badge"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="cv-section">
            <h2>{{ $t('cv.education.title') }}</h2>
            <hr>
            <div v-for="edu in cvData.education" :key="edu.degree" class="education-item mb-4">
              <div class="education-date">
                <strong>{{ edu.date }}</strong>
              </div>
              <div class="education-content">
                <h3>{{ edu.degree }}</h3>
                <p class="text-muted institution-name">{{ edu.institution }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Languages -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="cv-section">
            <h2>{{ $t('cv.languages.title') }}</h2>
            <hr>
            <ul class="languages-list">
              <li v-for="lang in cvData.languages" :key="lang.language" class="language-item mb-2">
                <strong>{{ lang.language }}</strong> – {{ lang.level }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="cv-section">
            <h2>{{ $t('cv.certifications.title') }}</h2>
            <hr>
            <ul class="list-unstyled">
              <li v-for="cert in cvData.certifications" :key="cert.name" class="mb-3 certification-item">
                <div class="d-flex align-items-center">
                  <i v-if="cert.importance === 'high'" class="fas fa-star text-warning mr-2"></i>
                  <div>
                    <strong>{{ cert.name }}</strong> - {{ cert.institution }}
                    <span v-if="cert.importance === 'high'" class="badge badge-warning ml-2">{{ $t('cv.keyCertification') }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import cvDataEn from '../data/cv-en.json'
import cvDataEs from '../data/cv-es.json'
import cvDataCommon from '../data/cv.json'

const { locale, t } = useI18n()

// Datos comunes que no cambian (educación, idiomas, certificaciones, imágenes)
const commonData = ref(cvDataCommon)

// Datos traducibles según el idioma
const translatedData = computed(() => {
  return locale.value === 'es' ? cvDataEs : cvDataEn
})

// Función para traducir el periodo
const getPeriodTranslation = (period) => {
  if (period === 'Current Position' || period === 'Posición Actual') {
    return t('cv.currentPosition')
  } else if (period === 'Previous Position' || period === 'Posición Anterior') {
    return t('cv.previousPosition')
  }
  return period
}

// Datos combinados del CV
const cvData = computed(() => {
  return {
    personalInfo: {
      ...translatedData.value.personalInfo,
      email: translatedData.value.personalInfo.email === "Available upon request" 
        ? (locale.value === 'es' ? 'Disponible bajo solicitud' : 'Available upon request')
        : translatedData.value.personalInfo.email
    },
    professionalSummary: translatedData.value.professionalSummary,
    experience: translatedData.value.experience.map(exp => ({
      ...exp,
      image: commonData.value.experience.find(e => e.id === exp.id)?.image || exp.image
    })),
    skillsByCategory: translatedData.value.skillsByCategory,
    education: commonData.value.education,
    languages: commonData.value.languages,
    certifications: commonData.value.certifications
  }
})
</script>

<style scoped>
.cv-container {
  padding: 3rem 0 4rem 0;
  min-height: 100vh;
  background-color: var(--bg-primary, #ffffff);
  color: var(--text-primary, #212529);
}

.cv-section {
  margin-bottom: 2rem;
  padding: 2rem;
  background: var(--card-bg, #f8f9fa);
  border-radius: 8px;
  border: 1px solid var(--border-color, #dee2e6);
}

.cv-section h2 {
  color: var(--text-primary, #333);
  margin-bottom: 1rem;
  font-size: 1.75rem;
}

.cv-section h3 {
  color: var(--text-primary, #333);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.cv-section hr {
  margin-bottom: 1.5rem;
  border-color: var(--border-color, #dee2e6);
}

/* Experience Items */
.experience-item {
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--border-color-light, #e9ecef);
  margin-bottom: 2rem;
}

.experience-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.experience-header {
  margin-bottom: 1rem;
}

.experience-header h3 {
  margin-bottom: 0.75rem;
  color: var(--accent-primary, #007bff);
}

.experience-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1rem;
}

.sector-badge {
  background-color: var(--accent-secondary, #6c757d);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
}

.duration-badge {
  background-color: var(--accent-primary, #007bff);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
}

.period-text {
  color: var(--text-secondary, #6c757d);
  font-size: 0.9rem;
  font-style: italic;
}

.experience-description {
  color: var(--text-secondary, #6c757d);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.responsibilities {
  margin-top: 1.5rem;
}

.responsibilities-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary, #333);
  margin-bottom: 0.75rem;
}

.responsibilities-list {
  list-style: none;
  padding-left: 0;
}

.responsibilities-list li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
  color: var(--text-secondary, #6c757d);
  line-height: 1.6;
}

.responsibilities-list li:before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--accent-primary, #007bff);
  font-weight: bold;
}

.experience-skills .badge {
  background-color: var(--accent-secondary, #6c757d);
  color: white;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
}

/* Skills Categories */
.skills-category {
  padding: 1.5rem;
  background: var(--bg-secondary, #f8f9fa);
  border-radius: 6px;
  border-left: 4px solid var(--accent-primary, #007bff);
}

.skills-category-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary, #333);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.skills-category-title i {
  color: var(--accent-primary, #007bff);
}

.skills-tags .badge {
  padding: 0.5rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.skills-tags .badge-info {
  background-color: var(--accent-secondary, #6c757d);
  color: white;
}

/* Emphasis Sections (Programming Languages & Tools) */
.emphasis-section {
  background: linear-gradient(135deg, var(--bg-secondary, #f8f9fa) 0%, var(--card-bg, #ffffff) 100%);
  border-left: 4px solid var(--accent-primary, #007bff);
  border-left-width: 6px;
  box-shadow: var(--shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1));
}

.emphasis-title {
  color: var(--accent-primary, #007bff) !important;
  font-size: 1.4rem;
}

.emphasis-badge {
  background-color: var(--accent-primary, #007bff) !important;
  color: white;
  font-weight: 600;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
}

/* Education Styles */
.education-item {
  display: flex;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color-light, #e9ecef);
}

.education-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.education-date {
  min-width: 150px;
  color: var(--text-primary, #333);
  font-weight: 600;
}

.education-content h3 {
  margin-bottom: 0.5rem;
  color: var(--text-primary, #333);
}

.institution-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary, #6c757d);
}

/* Languages Styles */
.languages-list {
  list-style: none;
  padding: 0;
}

.language-item {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-primary, #333);
}

.language-item strong {
  color: var(--accent-primary, #007bff);
}

/* Certifications */
.certification-item {
  padding: 0.75rem;
  background: var(--bg-secondary, #f8f9fa);
  border-radius: 4px;
}

/* Responsive */
@media (max-width: 767.98px) {
  .cv-container {
    padding: 2rem 0 1.5rem 0;
  }
  
  .cv-section {
    padding: 1.5rem;
  }
  
  .cv-section h2 {
    font-size: 1.5rem;
  }
  
  .experience-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .skills-category {
    padding: 1rem;
  }
  
  .skills-tags .badge {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}

@media (max-width: 575.98px) {
  .cv-container {
    padding: 1.5rem 0;
  }
  
  .cv-section {
    padding: 1rem;
  }
  
  .cv-section h2 {
    font-size: 1.25rem;
  }
  
  .cv-section h3 {
    font-size: 1.1rem;
  }
  
  .experience-item {
    padding-bottom: 1.5rem;
  }
  
  .education-item {
    flex-direction: column;
    gap: 0.5rem;
  }

  .education-date {
    min-width: auto;
  }

  .language-item {
    font-size: 1rem;
  }
  
  .skills-category-title {
    font-size: 1.1rem;
  }
  
  .emphasis-title {
    font-size: 1.2rem;
  }
}
</style>
