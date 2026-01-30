<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const images = [
  '/homepics/homepic1.jpg',
  '/homepics/homepic2.jpg',
  '/homepics/homepic3.jpg',
  '/homepics/homepic4.jpg',
  '/homepics/homepic5.jpg',
  '/homepics/homepic6.jpg'
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
  <section id="home" class="brutal-home">
    <div class="home-layout">
      <!-- Rotated side text -->
      <div class="side-label rotate-text">
        ARTESANAL
      </div>
      
      <!-- Main content area - asymmetric -->
      <div class="content-main">
        <div class="title-stack">
          <h1 class="title-line-1">CERÁMICA</h1>
          <h1 class="title-line-2">GRES</h1>
          <div class="accent-line"></div>
        </div>
        
        <!-- Image with harsh border -->
        <div class="image-brutal-container">
          <div 
            class="carousel-brutal"
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

            <!-- Image index counter overlay (moved inside carousel to avoid page overflow) -->
            <div class="image-counter">
              {{ currentIndex + 1 }}/{{ images.length }}
            </div>
          </div>
        </div>
      </div>

      <!-- Stacked buttons - unconventional placement -->
      <div class="button-stack-brutal">
        <a href="#tienda" class="btn-brutal btn-terracotta">
          <span>TIENDA</span>
        </a>
        <a href="#clases" class="btn-brutal btn-clay">
          <span>CLASES</span>
        </a>
        <a href="#quien-soy" class="btn-brutal btn-black">
          <span>QUIÉN SOY</span>
        </a>
        <a href="#contacto" class="btn-brutal btn-earth">
          <span>CONTACTO</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brutal-home {
  background: var(--cream);
  position: relative;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow-x: hidden;
}

.home-layout {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 3rem;
  align-items: start;
  position: relative;
  overflow-x: hidden;
}

@media (max-width: 1024px) {
  .home-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .button-stack-brutal {
    position: relative;
    top: 0;
  }
}

@media (max-width: 640px) {
  .brutal-home {
    padding: 2rem 1rem;
  }
  
  .home-layout {
    gap: 1.5rem;
  }
  
  .btn-brutal {
    padding: 1rem 1.5rem;
    font-size: 0.85rem;
  }
}

.side-label {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  background: var(--brutal-black);
  color: var(--cream);
  padding: 2rem 0.5rem;
  position: sticky;
  top: 100px;
  height: fit-content;
}

@media (max-width: 1024px) {
  .side-label {
    writing-mode: horizontal-tb;
    transform: none;
    width: fit-content;
    padding: 0.75rem 2rem;
    position: relative;
    top: 0;
  }
}

@media (max-width: 640px) {
  .side-label {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
}

.content-main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.title-stack {
  position: relative;
}

.title-line-1,
.title-line-2 {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(3.5rem, 12vw, 10rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin: 0;
}

@media (max-width: 640px) {
  .title-line-1,
  .title-line-2 {
    font-size: clamp(2.2rem, 9vw, 4rem);
    line-height: 0.9;
  }
}

.title-line-1 {
  color: var(--brutal-black);
}

.title-line-2 {
  color: var(--terracotta);
  margin-left: 2rem;
}

@media (max-width: 768px) {
  .title-line-2 {
    margin-left: 1rem;
  }
}

/* Brutalist carousel */
.image-brutal-container {
  position: relative;
  width: 100%;
  max-width: 700px;
}

.carousel-brutal {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border: 6px solid var(--brutal-black);
  background: var(--brutal-black);
  overflow: hidden;
  box-shadow: 16px 16px 0 var(--terracotta);
}

@media (max-width: 768px) {
  .carousel-brutal {
    aspect-ratio: 1;
    border: 4px solid var(--brutal-black);
    box-shadow: 10px 10px 0 var(--terracotta);
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

/* Brutalist arrows */
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

.brutal-arrow:active {
  transform: translateY(-50%) scale(0.95);
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
  bottom: 1rem;
  right: 1rem;
  background: var(--brutal-black);
  color: var(--cream);
  padding: 0.5rem 1rem;
  font-weight: 900;
  font-size: 1.25rem;
  font-family: "Elms Sans", sans-serif;
  z-index: 20;
}

@media (max-width: 640px) {
  .image-counter {
    bottom: 1rem;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: auto;
    text-align: center;
    padding: 0.5rem;
    font-size: 1rem;
  }
}

/* Stacked buttons - unusual vertical layout */
.button-stack-brutal {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 200px;
  position: sticky;
  top: 120px;
  height: fit-content;
}

@media (max-width: 1024px) {
  .button-stack-brutal {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    top: 0;
  }
}

@media (max-width: 640px) {
  .button-stack-brutal {
    gap: 0.5rem;
  }
  
  .btn-brutal {
    flex: 1 1 calc(50% - 0.25rem);
    min-width: 0;
  }
}

.btn-brutal {
  padding: 1.5rem 2rem;
  text-decoration: none;
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 4px solid var(--brutal-black);
  transition: none;
  display: block;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.btn-brutal:hover {
  transform: translate(4px, 4px);
}

.btn-brutal:active {
  transform: translate(8px, 8px);
}

.btn-terracotta {
  background: var(--terracotta);
  color: var(--brutal-black);
  border-bottom: none;
}

.btn-clay {
  background: var(--clay-warm);
  color: var(--brutal-black);
  border-bottom: none;
}

.btn-black {
  background: var(--brutal-black);
  color: var(--cream);
  border-bottom: none;
}

.btn-earth {
  background: var(--earth-brown);
  color: var(--cream);
}

@media (max-width: 1024px) {
  .btn-brutal {
    flex: 1 1 calc(50% - 0.5rem);
    border: 4px solid var(--brutal-black);
  }
}
</style>
