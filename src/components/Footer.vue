<template>
  <footer class="section footer-classic context-dark bg-image">
    <div class="container">
      <div class="row row-30">
        <div class="col-md-4 col-xl-5">
          <div class="pr-xl-4">
            <p class="rights">
              <span>© </span>
              <span class="copyright-year">{{ currentYear }}</span>
              <br/>
              <span>Jonathan Pardo</span>
              <span>. </span>
              <span> {{ $t('footer.allRightsReserved') }}</span>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <h5>{{ $t('footer.contact') }}</h5>
          <dl class="contact-list">
            <dt>{{ $t('footer.email') }}</dt>
            <dd>
              <a href="mailto:jonathanandrespardo38@gmail.com">jonathanandrespardo38@gmail.com</a>
            </dd>
          </dl>
          <dl class="contact-list">
            <dt>{{ $t('footer.phone') }}</dt>
            <dd>
              <a href="tel:+573057230036">+57 3057230036</a>
            </dd>
          </dl>
        </div>
        <div class="col-md-4 col-xl-3">
          <h5>{{ $t('footer.links') }}</h5>
          <ul class="nav-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/biografia">Biografia</router-link></li>
            <li><router-link to="/portafolio">Portafolio</router-link></li>
            <li><router-link to="/contacto">Contacto</router-link></li>
            <li><router-link to="/cv">CV</router-link></li>
            <li><router-link to="/proyectos">Proyectos</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row no-gutters social-container">
      <div class="col">
        <a class="social-inner" href="https://www.linkedin.com/in/japardos/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin-in fa-3x"></i>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
footer {
  margin-top: 4rem;
  padding-top: 3rem;
}

@media (max-width: 767.98px) {
  footer {
    margin-top: 3rem;
    padding-top: 2rem;
  }
}

@media (max-width: 575.98px) {
  footer {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
}
</style>

