<template>
  <div class="sectionresume">
    <div class="container-fluid p-0 sectionresume">
      <!-- Intro Section -->
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">
            {{ $t('portfolio.iam') }}
            <TextRotate 
              :to-rotate="rotatedTexts"
              :period="1000"
            />
          </h1>
          <div class="subheading mb-5">
            <p>
              <i class="fas fa-heart text-danger mr-2"></i>
              {{ $t('portfolio.fromBogota') }}
            </p>
            <a href="mailto:jonathanandrespardo38@gmail.com">jonathanandrespardo38@gmail.com</a>
          </div>
          <p class="lead mb-5">
            {{ $t('portfolio.intro') }}
          </p>
          <div class="row">
            <div class="social-icons col-md-4">
              <a href="https://www.linkedin.com/in/japardos/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="resume-section p-3 p-lg-5 d-flex flex-colum" id="experiencie">
        <div class="my-auto">
          <h2 class="mb-5">{{ $t('portfolio.experience') }}</h2>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="row col-md-10">
              <div 
                v-for="exp in experience" 
                :key="exp.id" 
                class="col-lg-6 portfolio-item mb-4"
              >
                <div class="card h-100">
                  <img 
                    class="card-img-top" 
                    :src="exp.image"
                    :alt="exp.position"
                  >
                  <div class="card-body">
                    <div class="experience-badges mb-2">
                      <span class="badge badge-primary mr-2">{{ exp.duration }}</span>
                      <span class="badge badge-secondary">{{ exp.sector }}</span>
                    </div>
                    <h4 class="card-title">{{ exp.position }}</h4>
                    <p class="card-text">
                      {{ exp.description }}
                    </p>
                    <div v-if="exp.responsibilities && exp.responsibilities.length > 0" class="mt-3">
                      <strong>{{ $t('cv.keyResponsibilities') }}</strong>
                      <ul class="mt-2 pl-3">
                        <li v-for="(resp, idx) in exp.responsibilities.slice(0, 3)" :key="idx" class="small">
                          {{ resp }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">{{ $t('portfolio.skills') }}</h2>
            <div class="subheading mb-3">
              {{ $t('portfolio.skillsIntro') }}
            </div>
          <ul class="list-inline dev-icons text-center">
            <li class="list-inline-item">
              <i class="fab fa-html5 fa-5x"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-css3-alt fa-5x"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-js-square fa-5x"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-react fa-5x"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-python fa-5x"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-java fa-5x"></i>
            </li>
          </ul>
        </div>
      </section>

      <!-- Certifications Section -->
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">{{ $t('portfolio.certifications') }}</h2>
          <ul class="fa-ul mb-0">
            <li v-for="cert in certifications" :key="cert.name">
              <i 
                :class="cert.importance === 'high' ? 'fa-li fa fa-star text-warning' : 'fa-li fa fa-trophy text-warning'"
              ></i>
              <strong>{{ cert.name }}</strong> - {{ cert.institution }}
              <span v-if="cert.importance === 'high'" class="badge badge-warning ml-2">Importante</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="tech-stack">
        <div class="my-auto">
          <h2 class="mb-5">{{ $t('portfolio.techStack') }}</h2>
            
            <!-- Programming Languages -->
            <div class="mb-4">
              <h4 class="mb-3">
                <i class="fas fa-code mr-2 text-primary"></i>
                {{ $t('portfolio.programmingLanguages') }}
              </h4>
            <div class="tech-stack-tags">
              <span 
                v-for="lang in techStack.programmingLanguages.skills" 
                :key="lang"
                class="badge badge-primary badge-lg mr-2 mb-2"
              >
                {{ lang }}
              </span>
            </div>
          </div>

            <!-- Tools & Technologies -->
            <div class="mb-4">
              <h4 class="mb-3">
                <i class="fas fa-tools mr-2 text-primary"></i>
                {{ $t('portfolio.tools') }}
              </h4>
            <div class="tech-stack-tags">
              <span 
                v-for="tool in techStack.tools.skills" 
                :key="tool"
                class="badge badge-success badge-lg mr-2 mb-2"
              >
                {{ tool }}
              </span>
            </div>
          </div>

            <!-- QA Skills -->
            <div class="mb-4">
              <h4 class="mb-3">
                <i class="fas fa-check-circle mr-2 text-primary"></i>
                {{ $t('portfolio.qa') }}
              </h4>
            <div class="tech-stack-tags">
              <span 
                v-for="skill in techStack.qa.skills.slice(0, 6)" 
                :key="skill"
                class="badge badge-info badge-lg mr-2 mb-2"
              >
                {{ skill }}
              </span>
            </div>
          </div>

            <!-- QA Automation -->
            <div class="mb-4">
              <h4 class="mb-3">
                <i class="fas fa-robot mr-2 text-primary"></i>
                {{ $t('portfolio.qaAutomation') }}
              </h4>
            <div class="tech-stack-tags">
              <span 
                v-for="skill in techStack.qaAutomation.skills.slice(0, 6)" 
                :key="skill"
                class="badge badge-warning badge-lg mr-2 mb-2"
              >
                {{ skill }}
              </span>
            </div>
          </div>

            <!-- DevOps -->
            <div>
              <h4 class="mb-3">
                <i class="fas fa-server mr-2 text-primary"></i>
                {{ $t('portfolio.devops') }}
              </h4>
            <div class="tech-stack-tags">
              <span 
                v-for="skill in techStack.devops.skills" 
                :key="skill"
                class="badge badge-danger badge-lg mr-2 mb-2"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TextRotate from '../components/TextRotate.vue'
import cvDataJson from '../data/cv.json'

const { locale } = useI18n()

const experience = ref(cvDataJson.experience)
const certifications = ref(cvDataJson.certifications)
const techStack = ref(cvDataJson.skillsByCategory)

const rotatedTexts = computed(() => {
  if (locale.value === 'es') {
    return ['Tester', 'Desarrollador de software', 'Automatizador y QA Funcional', 'Jonathan Andres Pardo']
  } else {
    return ['Tester', 'Software Developer', 'QA Automation and QA functional', 'Jonathan Andres Pardo']
  }
})
</script>

<style scoped>
.experience-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.experience-badges .badge {
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
}

.tech-stack-tags {
  display: flex;
  flex-wrap: wrap;
}

.badge-lg {
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  font-weight: 500;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: var(--card-bg, #ffffff);
  border-color: var(--border-color, #dee2e6);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg, 0 10px 15px rgba(0, 0, 0, 0.1));
}

.card-img-top {
  height: 250px;
  object-fit: cover;
  background-color: var(--bg-secondary, #f8f9fa);
}

.card-title {
  color: var(--text-primary, #212529);
  margin-bottom: 1rem;
}

.card-text {
  color: var(--text-secondary, #6c757d);
  line-height: 1.7;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .card-img-top {
    height: 200px;
  }
  
  .tech-stack-tags .badge {
    font-size: 0.85rem;
    padding: 0.5rem 0.8rem;
  }
}

@media (max-width: 575.98px) {
  .card-img-top {
    height: 180px;
  }
  
  .badge-lg {
    font-size: 0.85rem;
    padding: 0.4rem 0.7rem;
  }
}
</style>

