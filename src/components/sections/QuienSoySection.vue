<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const images = [
  '/QuienSoy/quiensoy1.jpg',
  '/QuienSoy/quiensoy2.jpg',
  '/QuienSoy/quiensoy3.jpg'
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
  <section id="quien-soy" class="bg-white" style="font-family: 'Elms Sans', sans-serif;">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-center">Quién soy</h2>
        <div class="accent-line mx-auto"></div>
        
        <div class="grid md:grid-cols-2 gap-8 mb-8">
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
                <img :src="image" :alt="`Catherine Huber ${index + 1}`" />
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
          
          <div class="flex flex-col justify-center">
            <h3 class="mb-4">Catherine Huber</h3>
            <p class="mb-4">
              Catherine Huber se formó en cerámica en el taller Mugi y en el Hunter College en New York entre 1997 y 1998. Siguió su formación en el taller del Mestre Lele en Sao Paolo, Brasil en 1999.
            </p>
            <p class="mb-4">
              Con formación de base en torno hoy su cerámica mezcla torno, modelado y escultura.
            </p>
            <p class="mb-4">
              Nativa de Lausanne, Suiza, Catherine es enfermera de formación. Ha trabajado 15 años en los hospitales de Lausanne antes de alistarse al Comité Internacional de la Cruz Roja. Trabajo en Mozambique (África) para operar centros de salud perdidos en las selvas, luego a México (Chiapas), Angola y en Guatemala.
            </p>
            <p class="mb-4">
              En 1999 abrió su primer taller en Sao Paolo, Brasil.
            </p>
            <p>
              Desde 2001 trabaja en su taller AKU NEKO en Talca (Chile) y finalmente en 2005 inicia clases. Hoy da clases 4 días la semana, y produce piezas para vender.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Carousel Styles */
.carousel-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
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
    border-radius: 0.75rem;
    touch-action: pan-y;
  }

  /* Hide arrows on mobile */
  .carousel-arrow {
    display: none;
  }
}
</style>
