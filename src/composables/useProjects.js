import { ref } from 'vue'
import projectsData from '../data/projects.json'

const projects = ref([...projectsData])

const getProjects = () => {
  // Intentar cargar desde LocalStorage primero
  const stored = localStorage.getItem('portfolio-projects')
  if (stored) {
    try {
      projects.value = JSON.parse(stored)
    } catch (e) {
      console.error('Error parsing stored projects:', e)
    }
  }
  return projects.value
}

const saveProjects = () => {
  // Guardar en LocalStorage
  localStorage.setItem('portfolio-projects', JSON.stringify(projects.value))
}

const addProject = (project) => {
  const newProject = {
    id: Date.now(), // Usar timestamp como ID único
    title: project.title,
    description: project.description,
    markdown: project.markdown,
    githubUrl: project.githubUrl,
    image: project.image || '',
    date: project.date || new Date().toISOString().split('T')[0]
  }
  projects.value.push(newProject)
  saveProjects()
  return newProject
}

const updateProject = (id, updatedProject) => {
  const index = projects.value.findIndex(p => p.id === id)
  if (index !== -1) {
    projects.value[index] = { ...projects.value[index], ...updatedProject }
    saveProjects()
    return projects.value[index]
  }
  return null
}

const deleteProject = (id) => {
  const index = projects.value.findIndex(p => p.id === id)
  if (index !== -1) {
    projects.value.splice(index, 1)
    saveProjects()
    return true
  }
  return false
}

const getProjectById = (id) => {
  return projects.value.find(p => p.id === id)
}

export const useProjects = () => {
  return {
    projects,
    getProjects,
    saveProjects,
    addProject,
    updateProject,
    deleteProject,
    getProjectById
  }
}

