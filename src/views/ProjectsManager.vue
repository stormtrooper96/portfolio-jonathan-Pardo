<template>
  <div class="projects-manager-container">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12">
          <h1 class="display-4">{{ $t('projects.title') }}</h1>
          <p class="lead">{{ $t('projects.subtitle') }}</p>
        </div>
      </div>

      <!-- Lista de Proyectos (Solo Lectura) -->
      <div class="row">
        <div class="col-12">
            <div v-if="projects.length === 0" class="alert alert-info">
              {{ $t('projects.noProjects') }}
            </div>
          <div v-else>
            <div v-for="project in projects" :key="project.id" class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <h4 class="card-title">{{ project.title }}</h4>
                    <p class="card-text lead">{{ project.description }}</p>
                    <p class="card-text">
                      <small class="text-muted">{{ $t('projects.date') }} {{ project.date }}</small>
                    </p>
                    <div class="markdown-preview mb-3" v-html="renderMarkdown(project.markdown)"></div>
                  </div>
                  <div class="col-md-4">
                    <div v-if="project.image" class="mb-3">
                      <img :src="project.image" :alt="project.title" class="img-fluid rounded">
                    </div>
                    <div class="mb-3">
                      <a :href="project.githubUrl" target="_blank" class="btn btn-primary btn-block">
                        <i class="fab fa-github"></i> {{ $t('projects.viewGitHub') }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProjects } from '../composables/useProjects'
import { marked } from 'marked'

const { projects, getProjects } = useProjects()

onMounted(() => {
  getProjects()
})

const renderMarkdown = (markdown) => {
  return marked(markdown)
}
</script>

<style scoped>
.projects-manager-container {
  padding: 3rem 0 4rem 0;
  min-height: 100vh;
  background-color: var(--bg-primary, #ffffff);
  color: var(--text-primary, #212529);
}

.projects-manager-container h1,
.projects-manager-container h2 {
  color: var(--text-primary, #212529);
}

.projects-manager-container .card {
  background-color: var(--card-bg, #ffffff);
  border-color: var(--border-color, #dee2e6);
  color: var(--text-primary, #212529);
}

.projects-manager-container .card-title {
  color: var(--text-primary, #212529);
}

.projects-manager-container .card-text {
  color: var(--text-secondary, #6c757d);
}

.markdown-preview {
  padding: 1rem;
  background: var(--bg-secondary, #f8f9fa);
  border-radius: 5px;
  border-left: 3px solid var(--accent-primary, #007bff);
  color: var(--text-primary, #212529) !important;
}
</style>

<style>
/* Estilos globales para el contenido markdown renderizado - Deben ser globales para afectar v-html */
.markdown-preview,
.markdown-preview * {
  color: var(--text-primary) !important;
}

.markdown-preview p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--text-primary) !important;
}

.markdown-preview h1,
.markdown-preview h2,
.markdown-preview h3,
.markdown-preview h4,
.markdown-preview h5,
.markdown-preview h6 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary) !important;
  font-weight: 600;
}

.markdown-preview h1 {
  font-size: 1.75rem;
  color: var(--text-primary) !important;
}

.markdown-preview h2 {
  font-size: 1.5rem;
  color: var(--text-primary) !important;
}

.markdown-preview h3 {
  font-size: 1.25rem;
  color: var(--text-primary) !important;
}

.markdown-preview ul,
.markdown-preview ol {
  padding-left: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary) !important;
}

.markdown-preview li {
  color: var(--text-primary) !important;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.markdown-preview strong {
  color: var(--text-primary) !important;
  font-weight: 600;
}

.markdown-preview em {
  color: var(--text-secondary) !important;
}

.markdown-preview a {
  color: var(--link-color) !important;
  text-decoration: none;
}

.markdown-preview a:hover {
  color: var(--link-hover) !important;
  text-decoration: underline;
}

.markdown-preview code {
  background: var(--bg-tertiary) !important;
  color: var(--text-primary) !important;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: 'Courier New', monospace;
}

.markdown-preview pre {
  background: var(--bg-tertiary) !important;
  color: var(--text-primary) !important;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  border: 1px solid var(--border-color) !important;
}

.markdown-preview pre code {
  background: transparent !important;
  padding: 0;
  color: inherit !important;
}

.markdown-preview blockquote {
  border-left: 4px solid var(--accent-primary) !important;
  padding: 1rem;
  margin: 1rem 0;
  color: var(--text-secondary) !important;
  font-style: italic;
  background: var(--bg-tertiary) !important;
  border-radius: 3px;
}
</style>

