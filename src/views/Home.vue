<template>
  <div>
    <section class="section">
      <div class="row">
        <div class="container-fluid">
          <div class="jumbotron" id="img-portada">
            <h1 class="display-4">{{ $t('home.greeting') }}</h1>
            <p class="lead">
              {{ $t('home.intro') }}
            </p>
            <hr class="my-4">
            <p class="lead">
              <router-link class="btn btn-primary btn-lg" to="/portafolio" role="button">{{ $t('home.checkMore') }}</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-language">
      <div class="container section-language">
        <div class="row">
          <h1>{{ $t('home.skillsTitle') }}</h1>
        </div>

        <div class="row">
          <!-- QA Automation -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fas fa-robot fa-7x"></i>
            <h5 class="">{{ $t('home.skills.qa.title') }}</h5>
            <p class="">
              {{ $t('home.skills.qa.description') }}
            </p>
          </div>
          
          <!-- JavaScript & Frameworks -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fab fa-js-square fa-7x"></i>
            <h5 class="">{{ $t('home.skills.javascript.title') }}</h5>
            <p class="">
              {{ $t('home.skills.javascript.description') }}
            </p>
          </div>

          <!-- Python -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fab fa-python fa-7x"></i>
            <h5 class="">{{ $t('home.skills.python.title') }}</h5>
            <p class="">
              {{ $t('home.skills.python.description') }}
            </p>
          </div>

          <!-- Bases de Datos -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fas fa-database fa-7x"></i>
            <h5 class="">{{ $t('home.skills.databases.title') }}</h5>
            <p class="">
              {{ $t('home.skills.databases.description') }}
            </p>
          </div>

          <!-- DevOps & CI/CD -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fas fa-server fa-7x"></i>
            <h5 class="">{{ $t('home.skills.devops.title') }}</h5>
            <p class="">
              {{ $t('home.skills.devops.description') }}
            </p>
          </div>

          <!-- Ruby on Rails & Java -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fas fa-gem fa-7x"></i>
            <h5 class="">{{ $t('home.skills.railsJava.title') }}</h5>
            <p class="">
              {{ $t('home.skills.railsJava.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Los estilos están en home.css */
</style>

