<template>
  <div class="contact-page">
    <div class="container contact-con">
      <div class="row mb-4">
        <div class="col-12">
          <h1 class="contact-title">{{ $t('contact.title') }}</h1>
          <p class="contact-intro" id="intro">
            {{ $t('contact.intro') }}
          </p>
        </div>
      </div>

      <div class="row">
        <!-- Formulario -->
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <div class="row">
                <div class="col-md-6 col-12 mb-3">
                  <input 
                    type="text" 
                    class="form-control" 
                    :placeholder="$t('contact.form.name')" 
                    required 
                    v-model="form.name"
                  >
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <input 
                    type="email" 
                    class="form-control" 
                    :placeholder="$t('contact.form.email')" 
                    required 
                    v-model="form.email"
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control" 
                id="subject-form" 
                :placeholder="$t('contact.form.subject')" 
                required 
                v-model="form.subject"
              >
            </div>
            <div class="form-group">
              <textarea 
                :placeholder="$t('contact.form.message')" 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="5" 
                required 
                v-model="form.message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-info btn-block" id="btn-sendmesage">
              {{ $t('contact.form.submit') }}
            </button>
          </form>
        </div>

        <!-- Información de contacto -->
        <div class="col-lg-6 col-md-12">
          <div class="contact-info">
            <h3>{{ $t('contact.info.title') }}</h3>
            <div class="contact-detail">
              <strong>{{ $t('contact.info.phone') }}</strong>
              <p>
                <a href="tel:+573057230036">+57 3057230036</a><br>
                <a href="tel:+573132509721">+57 3132509721</a>
              </p>
            </div>

            <div class="contact-detail">
              <strong>{{ $t('contact.info.email') }}</strong>
              <p>
                <a href="mailto:jonathanandrespardo38@gmail.com">jonathanandrespardo38@gmail.com</a>
              </p>
            </div>

            <div class="contact-detail">
              <strong>{{ $t('contact.info.linkedin') }}</strong>
              <p>
                <a href="https://www.linkedin.com/in/japardos/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/japardos/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Crear mailto link para enviar correo
  const subject = encodeURIComponent(form.value.subject)
  const body = encodeURIComponent(
    `Nombre: ${form.value.name}\n` +
    `Email: ${form.value.email}\n\n` +
    `${form.value.message}`
  )
  const mailtoLink = `mailto:jonathanandrespardo38@gmail.com?subject=${subject}&body=${body}`
  
  window.location.href = mailtoLink
  
  // Limpiar formulario
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
  padding: 2rem 0 4rem 0;
  min-height: calc(100vh - 200px);
}

.contact-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary, #212529);
}

.contact-intro {
  font-size: 1.1rem;
  color: var(--text-secondary, #6c757d);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-form {
  background: var(--card-bg, #ffffff);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1));
}

.contact-info {
  background: var(--card-bg, #ffffff);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1));
  height: 100%;
}

.contact-info h3 {
  color: var(--text-primary, #212529);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.contact-detail {
  margin-bottom: 1.5rem;
}

.contact-detail strong {
  color: var(--text-primary, #212529);
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.contact-detail p {
  color: var(--text-secondary, #6c757d);
  margin: 0;
  line-height: 1.8;
}

.contact-detail a {
  color: var(--link-color, #007bff);
  text-decoration: none;
}

.contact-detail a:hover {
  color: var(--link-hover, #0056b3);
  text-decoration: underline;
}

.form-control {
  background-color: var(--bg-primary, #ffffff);
  border-color: var(--border-color, #dee2e6);
  color: var(--text-primary, #212529);
  padding: 0.75rem;
}

.form-control:focus {
  background-color: var(--bg-primary, #ffffff);
  border-color: var(--accent-primary, #007bff);
  color: var(--text-primary, #212529);
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control::placeholder {
  color: var(--text-muted, #adb5bd);
}

.btn-info {
  background-color: var(--accent-primary, #007bff);
  border-color: var(--accent-primary, #007bff);
  padding: 0.75rem 2rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-info:hover {
  background-color: var(--link-hover, #0056b3);
  border-color: var(--link-hover, #0056b3);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1));
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-form,
  .contact-info {
    padding: 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .contact-page {
    padding: 1.5rem 0 3rem 0;
  }
  
  .contact-title {
    font-size: 1.75rem;
    text-align: center;
  }
  
  .contact-intro {
    text-align: center;
    font-size: 1rem;
  }
  
  .contact-form,
  .contact-info {
    padding: 1.25rem;
    margin-bottom: 1.5rem;
  }
  
  .contact-info {
    margin-top: 1rem;
  }
}

@media (max-width: 575.98px) {
  .contact-page {
    padding: 1rem 0 2rem 0;
  }
  
  .contact-title {
    font-size: 1.5rem;
  }
  
  .contact-form,
  .contact-info {
    padding: 1rem;
  }
  
  .contact-info h3 {
    font-size: 1.25rem;
  }
}
</style>

