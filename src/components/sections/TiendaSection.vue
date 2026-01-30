<template>
  <section id="tienda" class="brutal-tienda">
    <div class="tienda-container">
      <!-- Overlapping title treatment -->
      <div class="title-overlap-container">
        <h2 class="title-back">TIENDA</h2>
        <h2 class="title-front">DEL TALLER</h2>
      </div>

      <div class="brutal-intro">
        <div class="accent-line"></div>
        <p class="elms-sans-text">
          Detalles decorativos únicos y regalos perfectos para bodas y ocasiones especiales, 
          o simplemente ese artículo que estabas buscando, todo a precios de taller.
        </p>
      </div>

      <!-- Tight uniform grid like reference -->
      <div class="tight-grid">
        <div 
          v-for="(item, index) in shopItems" 
          :key="item.id"
          class="grid-item-tight"
          @click="openModal(item)"
        >
          <div class="item-image-brutal">
            <img :src="item.image" :alt="item.title" class="brutal-img" />
            <div class="item-overlay-tight">
              <span class="item-price-overlay">{{ item.price }}€</span>
              <span class="item-number-overlay">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <Teleport to="body">
        <Transition name="modal-brutal">
          <div v-if="selectedItem" class="modal-backdrop-brutal" @click="closeModal">
            <div class="modal-brutal" @click.stop>
              <button class="modal-close-brutal" @click="closeModal">✕</button>
              <div class="modal-layout">
                <div class="modal-img-side">
                  <img :src="selectedItem.image" :alt="selectedItem.title" class="modal-image-brutal" />
                </div>
                <div class="modal-info-side">
                  <h3 class="modal-title-brutal">{{ selectedItem.title }}</h3>
                  <div class="modal-price-brutal">{{ selectedItem.price }}€</div>
                  <p class="modal-description-brutal">{{ selectedItem.description }}</p>
                  <button 
                    class="modal-contact-brutal"
                    @click="goToContact"
                  >
                    CONTACTAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>

      <div class="cta-section-brutal">
        <div class="cta-block">
          <p class="cta-text">¿INTERESADO<br>EN UNA PIEZA?</p>
          <a 
            href="#contacto" 
            class="btn-cta-brutal"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tienda1 from '/tienda/tienda1.jpg';
import tienda2 from '/tienda/tienda2.jpg';
import tienda3 from '/tienda/tienda3.jpg';
import tienda4 from '/tienda/tienda4.jpg';
import tienda5 from '/tienda/tienda9.jpg';
import tienda6 from '/tienda/tienda6.jpeg';
import tienda7 from '/tienda/tienda7.jpeg';
import tienda8 from '/tienda/tienda8.jpeg';
import tienda9 from '/tienda/tienda5.jpeg';

interface ShopItem {
  id: number
  title: string
  description: string
  price: number
  icon: string
  image: string
}

const selectedItem = ref<ShopItem | null>(null)

const openModal = (item: ShopItem) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}

const goToContact = () => {
  closeModal()
  window.location.hash = '#contacto'
}

const shopItems: ShopItem[] = [
  {
    id: 1,
    title: 'Tazas Artesanales',
    description: 'Tazas de gres hechas a mano, perfectas para tu café o té favorito.',
    price: 28,
    icon: '☕',
    image: tienda1
  },
  {
    id: 2,
    title: 'Platos Decorativos',
    description: 'Platos únicos con acabados naturales y diseños orgánicos.',
    price: 45,
    icon: '🍽️',
    image: tienda2
  },
  {
    id: 3,
    title: 'Jarrones',
    description: 'Jarrones de diferentes tamaños con texturas y colores tierra.',
    price: 65,
    icon: '🏺',
    image: tienda3
  },
  {
    id: 4,
    title: 'Bowls',
    description: 'Bowls versátiles para servir o decorar, con esmaltes únicos.',
    price: 35,
    icon: '🥣',
    image: tienda4
  },
  {
    id: 5,
    title: 'Teteras',
    description: 'Teteras funcionales con diseños elegantes y contemporáneos.',
    price: 85,
    icon: '🫖',
    image: tienda5
  },
  {
    id: 6,
    title: 'Esculturas',
    description: 'Piezas escultóricas únicas, perfectas como elementos decorativos.',
    price: 120,
    icon: '🗿',
    image: tienda6
  },
  {
    id: 7,
    title: 'Vasos Decorativos',
    description: 'Vasos con diseños únicos para decorar tu hogar.',
    price: 40,
    icon: '🥂',
    image: tienda7
  },
  {
    id: 8,
    title: 'Platos de Cerámica',
    description: 'Platos de cerámica con acabados brillantes.',
    price: 50,
    icon: '🍽️',
    image: tienda8
  },
  {
    id: 9,
    title: 'Cuencos Decorativos',
    description: 'Cuencos decorativos con diseños únicos.',
    price: 30,
    icon: '🥣',
    image: tienda9
  }
];
</script>

<style scoped>
.brutal-tienda {
  background: var(--brutal-white);
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow-x: hidden;
}

@media (max-width: 640px) {
  .brutal-tienda {
    padding: 4rem 1rem 3rem;
  }
}

.tienda-container {
  max-width: 1600px;
  margin: 0 auto;
  overflow-x: hidden;
}

/* Overlapping title effect */
.title-overlap-container {
  position: relative;
  margin-bottom: 3rem;
  height: clamp(120px, 20vw, 300px);
}

/* Apply larger spacing only on desktop */
@media (min-width: 769px) {
  .title-overlap-container {
    margin-bottom: 12rem;
  }
}

.title-back,
.title-front {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(4rem, 15vw, 12rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  position: absolute;
  margin: 0;
}

@media (max-width: 640px) {
  .title-back,
  .title-front {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }
}

.title-back {
  color: transparent;
  -webkit-text-stroke: 3px var(--brutal-black);
  text-stroke: 3px var(--brutal-black);
  top: 0;
  left: 0;
  z-index: 1; /* sit behind the front title */
}

.title-front {
  color: var(--terracotta);
  top: 144px; /* increased offset to avoid letter collisions */
  left: 94px;
  z-index: 2; /* ensure this sits above the stroked back title */
  transform: translateZ(0);
}

@media (max-width: 768px) {
  .title-front {
    top: 6px;
    left: 46px;
    z-index: 2;
  }
}

@media (max-width: 640px) {
  .title-overlap-container {
    height: clamp(60px, 12vw, 120px);
    margin-bottom: 2rem;
    overflow: hidden;
  }
  
  .title-back,
  .title-front {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }
  
  .title-back {
    -webkit-text-stroke: 2px var(--brutal-black);
    text-stroke: 2px var(--brutal-black);
  }
  
  .title-front {
    top: 30px;
    left: 8px;
    z-index: 2;
  }
  
  .brutal-intro {
    margin-bottom: 2rem;
  }
}

.brutal-intro {
  max-width: 600px;
  margin-bottom: 4rem;
}

/* Tight uniform grid like reference image */
.tight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-bottom: 5rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  border: 6px solid var(--brutal-black);
  background: var(--brutal-black);
}

@media (max-width: 768px) {
  .tight-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .tight-grid {
    grid-template-columns: repeat(2, 1fr);
    border: 4px solid var(--brutal-black);
  }
}

@media (max-width: 480px) {
  .tight-grid {
    grid-template-columns: 1fr;
  }
  
  .item-price-overlay {
    font-size: 2rem;
  }
}

.grid-item-tight {
  cursor: pointer;
  position: relative;
  transition: none;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--cream);
}

.item-image-brutal {
  position: relative;
  width: 100%;
  height: 100%;
}

.brutal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: none;
}

.grid-item-tight:hover .brutal-img {
  filter: contrast(1.2);
}

.item-overlay-tight {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--terracotta);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.05s linear;
}

.grid-item-tight:hover .item-overlay-tight {
  opacity: 0.95;
}

.item-price-overlay {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--brutal-black);
  line-height: 1;
}

.item-number-overlay {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: var(--brutal-white);
  margin-top: 0.5rem;
  letter-spacing: 0.2em;
}

/* Modal styles */
.modal-backdrop-brutal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-brutal {
  background: var(--cream);
  border: 6px solid var(--brutal-black);
  max-width: 1000px;
  width: 100%;
  position: relative;
  box-shadow: 20px 20px 0 var(--terracotta);
}

@media (max-width: 768px) {
  .modal-brutal {
    box-shadow: 10px 10px 0 var(--terracotta);
    border: 4px solid var(--brutal-black);
  }
}

@media (max-width: 640px) {
  .modal-brutal {
    box-shadow: 8px 8px 0 var(--terracotta);
    border: 3px solid var(--brutal-black);
    max-width: 95%;
    margin: 1rem;
  }
}

.modal-close-brutal {
  position: absolute;
  top: -50px;
  right: 0;
  background: var(--terracotta);
  color: var(--brutal-black);
  border: 4px solid var(--brutal-black);
  font-size: 2rem;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-weight: 900;
  font-family: "Elms Sans", sans-serif;
  z-index: 10;
}

.modal-close-brutal:hover {
  background: var(--brutal-black);
  color: var(--terracotta);
}

@media (max-width: 768px) {
  .modal-close-brutal {
    top: -45px;
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 640px) {
  .modal-close-brutal {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    border: 3px solid var(--brutal-black);
  }
}

.modal-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
  .modal-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .modal-info-side {
    padding: 1.5rem;
  }
  
  .modal-title-brutal {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  .modal-price-brutal {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .modal-description-brutal {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .modal-contact-brutal {
    padding: 1rem 2rem;
    font-size: 0.9rem;
  }
}

.modal-img-side {
  background: var(--brutal-black);
  border-right: 6px solid var(--brutal-black);
}

@media (max-width: 768px) {
  .modal-img-side {
    border-right: none;
    border-bottom: 6px solid var(--brutal-black);
  }
}

.modal-image-brutal {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.modal-info-side {
  padding: 3rem;
}

@media (max-width: 768px) {
  .modal-info-side {
    padding: 2rem;
  }
}

.modal-title-brutal {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--brutal-black);
  line-height: 1;
}

.modal-price-brutal {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  color: var(--terracotta);
  font-family: "Elms Sans", sans-serif;
  margin-bottom: 2rem;
  line-height: 1;
}

.modal-description-brutal {
  font-size: 1.1rem;
  color: var(--brutal-black);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.modal-contact-brutal {
  padding: 1.25rem 3rem;
  background: var(--brutal-black);
  color: var(--cream);
  border: 4px solid var(--brutal-black);
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  font-family: "Elms Sans", sans-serif;
  letter-spacing: 0.1em;
  transition: none;
}

.modal-contact-brutal:hover {
  background: var(--terracotta);
  color: var(--brutal-black);
}

/* Modal transitions */
.modal-brutal-enter-active,
.modal-brutal-leave-active {
  transition: opacity 0.1s linear;
}

.modal-brutal-enter-from,
.modal-brutal-leave-to {
  opacity: 0;
}

/* CTA section */
.cta-section-brutal {
  margin-top: 6rem;
  display: flex;
  justify-content: flex-end;
}

.cta-block {
  background: var(--earth-brown);
  border: 6px solid var(--brutal-black);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  box-shadow: -15px 15px 0 var(--clay-warm);
}

@media (max-width: 768px) {
  .cta-section-brutal {
    justify-content: center;
  }
  
  .cta-block {
    padding: 2rem;
    box-shadow: -10px 10px 0 var(--clay-warm);
  }
}

@media (max-width: 640px) {
  .cta-section-brutal {
    margin-top: 4rem;
  }
  
  .cta-block {
    padding: 1.5rem;
    box-shadow: -8px 8px 0 var(--clay-warm);
    border: 4px solid var(--brutal-black);
  }
  
  .cta-text {
    font-size: 1.2rem;
  }
  
  .btn-cta-brutal {
    padding: 0.85rem 2rem;
    font-size: 1rem;
    border: 3px solid var(--brutal-black);
  }
}

.cta-text {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.1;
  color: var(--cream);
  margin: 0;
}

.btn-cta-brutal {
  background: var(--terracotta);
  color: var(--brutal-black);
  border: 4px solid var(--brutal-black);
  padding: 1rem 2.5rem;
  text-decoration: none;
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  letter-spacing: 0.1em;
  font-size: 1.1rem;
  transition: none;
}

.btn-cta-brutal:hover {
  background: var(--brutal-black);
  color: var(--terracotta);
}
</style>
