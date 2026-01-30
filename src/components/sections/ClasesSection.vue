<template>
  <section id="clases" class="brutal-clases">
    <div class="clases-container">
      <div class="header-block">
        <h2 class="brutal-title-clases">CLASES</h2>
        <div class="subtitle-block">
          <p class="elms-sans-text">
            Este año hemos completado todos los cupos, pero los invitamos cordialmente a visitar nuestro taller.
          </p>
        </div>
      </div>

      <div class="carousel-wrapper">
        <div 
          class="carousel-brutal-clases"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
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

          <button 
            @click="prevSlide" 
            class="brutal-arrow brutal-arrow-left"
            aria-label="Anterior"
          >
            ←
          </button>
          <button 
            @click="nextSlide" 
            class="brutal-arrow brutal-arrow-right"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
        <div class="image-counter">{{ currentIndex + 1 }}/{{ images.length }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const images = [
  '/clases/classes1.jpg',
  '/clases/classes2.jpg'
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
.brutal-clases {
  background: var(--brutal-white);
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  border-top: 8px solid var(--brutal-black);
  border-bottom: 8px solid var(--brutal-black);
  overflow-x: hidden;
}

@media (max-width: 640px) {
  .brutal-clases {
    padding: 4rem 1rem 3rem;
    border-top: 6px solid var(--brutal-black);
    border-bottom: 6px solid var(--brutal-black);
  }
}

.clases-container {
  max-width: 1200px;
  margin: 0 auto;
}

.header-block {
  margin-bottom: 4rem;
}

@media (max-width: 640px) {
  .header-block {
    margin-bottom: 2.5rem;
  }
}

.brutal-title-clases {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(3.5rem, 11vw, 12rem);
  line-height: 0.85;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 4px var(--brutal-black);
  text-stroke: 4px var(--brutal-black);
  margin-bottom: 2rem;
}

@media (max-width: 640px) {
  .brutal-title-clases {
    font-size: clamp(2.3rem, 9vw, 5rem);
    -webkit-text-stroke: 3px var(--brutal-black);
    text-stroke: 3px var(--brutal-black);
  }
}

.subtitle-block {
  background: var(--terracotta);
  padding: 2rem;
  border: 4px solid var(--brutal-black);
  max-width: 600px;
  margin-left: auto;
}

@media (max-width: 640px) {
  .subtitle-block {
    padding: 1.5rem;
    margin-left: 0;
    border: 3px solid var(--brutal-black);
  }
  
  .subtitle-block p {
    font-size: 1rem;
  }
}

.subtitle-block p {
  font-size: 1.1rem;
  color: var(--brutal-black);
  font-weight: 500;
  margin: 0;
}

.carousel-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.carousel-brutal-clases {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border: 6px solid var(--brutal-black);
  background: var(--brutal-black);
  overflow: hidden;
  box-shadow: -16px 16px 0 var(--clay-dark);
}

@media (max-width: 768px) {
  .carousel-brutal-clases {
    aspect-ratio: 1;
    box-shadow: -10px 10px 0 var(--clay-dark);
  }
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
  transition: opacity 0.1s linear;
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

.brutal-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--brutal-black);
  color: var(--cream);
  border: none;
  font-size: 2rem;
  font-weight: 900;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: none;
  z-index: 10;
  font-family: monospace;
}

.brutal-arrow:hover {
  background: var(--terracotta);
  color: var(--brutal-black);
}

.brutal-arrow-left {
  left: 0;
}

.brutal-arrow-right {
  right: 0;
}

@media (max-width: 768px) {
  .brutal-arrow {
    display: none;
  }
}

.image-counter {
  position: absolute;
  top: -50px;
  left: 0;
  background: var(--brutal-black);
  color: var(--cream);
  padding: 0.75rem 1.5rem;
  font-weight: 900;
  font-size: 1.5rem;
  font-family: "Elms Sans", sans-serif;
}

@media (max-width: 640px) {
  .carousel-wrapper {
    margin-bottom: 3rem;
  }
  
  .image-counter {
    top: -40px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
  }
}
</style>
