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
  <section id="quien-soy" class="brutal-quien-soy">
    <div class="quien-container">
      <div class="title-section">
        <h2 class="brutal-title">QUIÉN SOY</h2>
        <div class="accent-line"></div>
      </div>
      
      <div class="content-layout">
        <!-- Carousel -->
        <div class="image-side">
          <div 
            class="carousel-brutal-quien"
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
                <img :src="image" :alt="`Catherine Huber ${index + 1}`" />
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
        </div>
        
        <div class="text-side">
          <div class="name-block">
            <h3>CATHERINE<br>HUBER</h3>
          </div>
          <div class="bio-text">
            <p>
              Catherine Huber se formó en cerámica en el taller Mugi y en el Hunter College en New York entre 1997 y 1998. Siguió su formación en el taller del Mestre Lele en Sao Paolo, Brasil en 1999.
            </p>
            <p>
              Con formación de base en torno hoy su cerámica mezcla torno, modelado y escultura.
            </p>
            <p>
              Nativa de Lausanne, Suiza, Catherine es enfermera de formación. Ha trabajado 15 años en los hospitales de Lausanne antes de alistarse al Comité Internacional de la Cruz Roja. Trabajo en Mozambique (África) para operar centros de salud perdidos en las selvas, luego a México (Chiapas), Angola y en Guatemala.
            </p>
            <p>
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
.brutal-quien-soy {
  background: var(--cream);
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  overflow-x: hidden;
}

.quien-container {
  max-width: 1400px;
  margin: 0 auto;
}

.title-section {
  margin-bottom: 4rem;
}

.brutal-title {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(3rem, 10vw, 7rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--brutal-black);
}

@media (max-width: 640px) {
  .brutal-title {
    font-size: clamp(2rem, 8.5vw, 3.5rem);
  }
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 640px) {
  .brutal-quien-soy {
    padding: 4rem 1rem 3rem;
  }
  
  .title-section {
    margin-bottom: 2rem;
  }
  
  .content-layout {
    gap: 2rem;
  }
  
  .carousel-brutal-quien {
    box-shadow: 8px 8px 0 var(--clay-warm);
  }
  
  .name-block {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .bio-text p {
    margin-bottom: 1.25rem;
  }
}

.carousel-brutal-quien {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border: 6px solid var(--brutal-black);
  background: var(--brutal-black);
  overflow: hidden;
  box-shadow: 12px 12px 0 var(--clay-warm);
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
  background: var(--clay-warm);
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

.name-block {
  background: var(--brutal-black);
  color: var(--cream);
  padding: 2rem;
  margin-bottom: 2rem;
  border: 4px solid var(--brutal-black);
}

.name-block h3 {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--cream);
  margin: 0;
}

.bio-text {
  font-family: "Elms Sans", sans-serif;
  font-weight: 400;
}

.bio-text p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: var(--brutal-black);
}
</style>
