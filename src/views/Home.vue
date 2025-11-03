<template>
  <div>
    <section class="section">
      <div class="row">
        <div class="container-fluid">
          <div class="jumbotron" id="img-portada">
            <h1 class="display-4">Hola,</h1>
            <p class="lead">
              System Engineer con más de 5 años de experiencia en QA Automation, QA Manual, DevOps y desarrollo Fullstack.
              Especializado en automatización de pruebas, desarrollo de frameworks de testing, integración CI/CD,
              manejo avanzado de bases de datos y desarrollo web con JavaScript, Python, Ruby on Rails y Java.
            </p>
            <hr class="my-4">
            <p class="lead">
              <router-link class="btn btn-primary btn-lg" to="/portafolio" role="button">Revisa Más</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-language">
      <div class="container section-language">
        <div class="row">
          <h1>Cuento con conocimiento en...</h1>
        </div>

        <div class="row">
          <!-- QA Automation -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fas fa-robot fa-7x"></i>
            <h5 class="">QA Automation & Testing</h5>
            <p class="">
              Amplia experiencia en automatización de pruebas con Selenium WebDriver, desarrollo de frameworks de automatización,
              integración con CI/CD, pruebas de API, y ejecución de suites de regresión automatizadas.
              Más de 3 años en automatización de pruebas.
            </p>
          </div>
          
          <!-- JavaScript & Frameworks -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fab fa-js-square fa-7x"></i>
            <h5 class="">JavaScript & Frameworks Modernos</h5>
            <p class="">
              Experto en JavaScript (ES6+), TypeScript, Vue.js, React, Angular y Node.js.
              Desarrollo Fullstack de aplicaciones web modernas y APIs REST.
              Experiencia sólida en desarrollo frontend y backend.
            </p>
          </div>

          <!-- Python -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fab fa-python fa-7x"></i>
            <h5 class="">Python & ETL</h5>
            <p class="">
              Conocimiento avanzado en Python para automatización de pruebas, ETL, análisis de datos y procesamiento de información.
              Experiencia con librerías como Airflow para automatización de tareas y pipelines de datos.
            </p>
          </div>

          <!-- Bases de Datos -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fas fa-database fa-7x"></i>
            <h5 class="">Bases de Datos Relacionales</h5>
            <p class="">
              Más de 2 años de experiencia en manejo avanzado de bases de datos. Desarrollo de consultas SQL complejas,
              modelamiento de datos, optimización y gestión de bases de datos relacionales
              (PostgreSQL, MySQL, SQL Server, Oracle, PL/SQL).
            </p>
          </div>

          <!-- DevOps & CI/CD -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fas fa-server fa-7x"></i>
            <h5 class="">DevOps & CI/CD</h5>
            <p class="">
              Experiencia en configuración de pipelines CI/CD, Jenkins, GitLab CI, Docker, containerización,
              despliegues automatizados e infraestructura como código.
              Integración de pruebas automatizadas en pipelines de entrega continua.
            </p>
          </div>

          <!-- Ruby on Rails & Java -->
          <div class="item col-md-4 col-sm-4 margin-top">
            <i class="fas fa-gem fa-7x"></i>
            <h5 class="">Ruby on Rails & Java</h5>
            <p class="">
              Desarrollo de APIs REST con Ruby on Rails, enrutamiento, manejo de mensajes HTTP y arquitectura MVC.
              Conocimiento en Java para aplicaciones empresariales y desarrollo de aplicaciones de escritorio.
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

