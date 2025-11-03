<template>
  <div class="bio-profile-container">
    <!-- Top Section with Profile Info -->
    <div class="profile-header">
      <div class="container">
        <div class="row align-items-center">
          <!-- Profile Image -->
          <div class="col-md-4 col-12 mb-4 mb-md-0">
            <div class="profile-image-wrapper">
              <img 
                :src="bioData.profile.image" 
                :alt="bioData.profile.name"
                class="profile-image"
              >
            </div>
          </div>
          
          <!-- Profile Info -->
          <div class="col-md-8 col-12">
            <h1 class="profile-name">{{ bioData.profile.name }}</h1>
            <div class="profile-details">
              <p><span class="label">{{ $t('bio.age') }}</span> {{ bioData.profile.age }}</p>
              <p><span class="label">{{ $t('bio.country') }}</span> {{ bioData.profile.country }}</p>
              <p><span class="label">{{ $t('bio.job') }}</span> {{ bioData.profile.job }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Me Section -->
    <div class="about-section">
      <div class="container">
        <div class="about-card">
          <h2 class="section-title">{{ $t('bio.aboutMe') }}</h2>
          <p class="about-text">{{ bioData.aboutMe }}</p>
        </div>
      </div>
    </div>

    <!-- Bottom Section: Favorites, Fun Facts, Quote -->
    <div class="profile-bottom">
      <div class="container">
        <div class="row">
          <!-- My Favorites -->
          <div class="col-md-4 col-12 mb-4 mb-md-0">
            <div class="info-card">
              <h3 class="card-title">{{ $t('bio.myFavorites') }}</h3>
              <div class="favorites-grid">
                <div 
                  v-for="(favorite, index) in bioData.favorites" 
                  :key="index"
                  class="favorite-item"
                >
                  <i :class="favorite.icon"></i>
                  <span>{{ favorite.label }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Fun Facts -->
          <div class="col-md-4 col-12 mb-4 mb-md-0">
            <div class="info-card">
              <h3 class="card-title">{{ $t('bio.funFacts') }}</h3>
              <ul class="fun-facts-list">
                <li v-for="(fact, index) in bioData.funFacts" :key="index">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ fact }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Quote -->
          <div class="col-md-4 col-12">
            <div class="info-card quote-card">
              <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
              </div>
              <p class="quote-text">{{ bioData.quote.text }}</p>
              <p class="quote-source">— {{ bioData.quote.source }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import bioDataJson from '../data/bio.json'

const bioData = ref(bioDataJson)
</script>

<style scoped>
.bio-profile-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 3rem 0;
  color: white;
}

/* Profile Header */
.profile-header {
  padding: 2rem 0;
}

.profile-image-wrapper {
  position: relative;
}

.profile-image {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  object-fit: cover;
}

.profile-name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.profile-details {
  font-size: 1.1rem;
}

.profile-details p {
  margin-bottom: 0.75rem;
}

.profile-details .label {
  font-weight: 600;
  margin-right: 0.5rem;
}

/* About Section */
.about-section {
  padding: 2rem 0;
}

.about-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
  text-align: center;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  text-align: justify;
}

/* Bottom Section */
.profile-bottom {
  padding: 2rem 0;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  height: 100%;
  color: #333;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1e3c72;
  text-align: center;
}

/* Favorites */
.favorites-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.favorite-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.favorite-item i {
  font-size: 2.5rem;
  color: #1e3c72;
}

.favorite-item span {
  font-weight: 500;
  color: #333;
}

/* Fun Facts */
.fun-facts-list {
  list-style: none;
  padding: 0;
}

.fun-facts-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.fun-facts-list li i {
  color: #1e3c72;
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.fun-facts-list li span {
  color: #333;
  line-height: 1.6;
}

/* Quote */
.quote-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.quote-icon {
  font-size: 3rem;
  color: #1e3c72;
  margin-bottom: 1rem;
}

.quote-text {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
}

.quote-source {
  font-size: 0.9rem;
  color: #888;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 767.98px) {
  .profile-name {
    font-size: 2rem;
    text-align: center;
  }
  
  .profile-details {
    text-align: center;
  }
  
  .profile-image {
    max-width: 250px;
    margin: 0 auto;
    display: block;
  }
  
  .about-card {
    padding: 1.5rem;
  }
  
  .info-card {
    margin-bottom: 1.5rem;
  }
  
  .favorites-grid {
    flex-direction: row;
    justify-content: space-around;
  }
}

@media (max-width: 575.98px) {
  .bio-profile-container {
    padding: 2rem 0;
  }
  
  .profile-name {
    font-size: 1.75rem;
  }
  
  .about-text {
    font-size: 1rem;
  }
  
  .profile-image {
    max-width: 200px;
  }
  
  .info-card {
    padding: 1.5rem;
  }
  
  .favorite-item i {
    font-size: 2rem;
  }
  
  .quote-icon {
    font-size: 2rem;
  }
}
</style>
