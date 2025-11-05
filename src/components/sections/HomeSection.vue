<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const images = [
  '/src/assets/homepics/homepic1.jpg',
  '/src/assets/homepics/homepic2.jpg',
  '/src/assets/homepics/homepic3.jpg',
  '/src/assets/homepics/homepic4.jpg',
  '/src/assets/homepics/homepic5.jpg',
  '/src/assets/homepics/homepic6.jpg'
]

let autoplayInterval: number | null = null
let touchStartX = 0
let touchEndX = 0

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const handleTouchStart = (e: TouchEvent) => {
  if (e.changedTouches[0]) {
    touchStartX = e.changedTouches[0].screenX
    stopAutoplay()
  }
}

const handleTouchEnd = (e: TouchEvent) => {
  if (e.changedTouches[0]) {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
    startAutoplay()
  }
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

const startAutoplay = () => {
  autoplayInterval = window.setInterval(nextSlide, 4000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section id="home" class="relative bg-gradient-to-br from-cream to-white-clay">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-0 items-center">
        <div class="fade-in-up">
          <h1 class="elms-sans-title mt-4">Cerámica Gres Artesanal</h1>
          <div class="accent-line"></div>
        </div>
        
        <div class="fade-in-up">
          <!-- Carousel Container -->
          <div 
            class="carousel-container"
            @mouseenter="stopAutoplay"
            @mouseleave="startAutoplay"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <!-- Images -->
            <div class="carousel-images">
              <div
                v-for="(image, index) in images"
                :key="index"
                class="carousel-slide"
                :class="{ active: index === currentIndex }"
              >
                <img :src="image" :alt="`Cerámica ${index + 1}`" />
              </div>
            </div>

            <!-- Navigation Arrows (Desktop only) -->
            <button 
              @click="prevSlide" 
              class="carousel-arrow carousel-arrow-left"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button 
              @click="nextSlide" 
              class="carousel-arrow carousel-arrow-right"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>

          <div class="button-group">
            <a 
              href="#tienda" 
              class="button elms-sans-button"
            >
              Ver Tienda
            </a>
            <a 
              href="#clases" 
              class="button elms-sans-button"
            >
              Clases
            </a>
            <a 
              href="#quien-soy" 
              class="button elms-sans-button"
            >
              Quién Soy
            </a>
            <a 
              href="#contacto" 
              class="button elms-sans-button"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.from-cream {
  --tw-gradient-from: var(--cream);
}

.to-white-clay {
  --tw-gradient-to: var(--white-clay);
}

/* Carousel Styles */
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 1rem;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  background: #f5f5f5;
}

.carousel-images {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
  pointer-events: none;
}

.carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Navigation Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 2.5rem;
  line-height: 1;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  color: var(--terracotta);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-arrow:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.carousel-arrow-left {
  left: 0.75rem;
}

.carousel-arrow-right {
  right: 0.75rem;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .carousel-container {
    max-width: 100%;
    border-radius: 0.75rem;
    aspect-ratio: 1;
    touch-action: pan-y;
  }

  /* Hide arrows on mobile */
  .carousel-arrow {
    display: none;
  }
}


.button {
  display: inline-block;
  padding: 0.8rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 1rem;
  margin-right: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, var(--terracotta), var(--clay-warm));
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
