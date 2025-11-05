<template>
  <section id="clases" class="bg-white">
    <div class="container">
      <h2 class="text-center elms-sans-title">Clases de Cerámica</h2>
      <div class="accent-line mx-auto"></div>
      <p class="text-center max-w-2xl mx-auto mb-12 elms-sans-text">
        Este año hemos completado todos los cupos, pero los invitamos cordialmente a visitar nuestro taller.
      </p>

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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const images = [
  '/src/assets/clases/classes1.jpg',
  '/src/assets/clases/classes2.jpg'
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

<style scoped>
.from-clay-warm {
  --tw-gradient-from: var(--clay-warm);
}

.to-clay-dark {
  --tw-gradient-to: var(--clay-dark);
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
</style>
