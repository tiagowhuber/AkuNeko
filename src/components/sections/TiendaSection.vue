<template>
  <section id="tienda" class="bg-gradient-to-br from-white-clay to-cream">
    <div class="container">
      <h2 class="text-center elms-sans-title">Tienda del Taller</h2>
      <div class="accent-line mx-auto"></div>
      <p class="text-align-left max-w-2xl mx-auto mb-12">
        En La Tienda descubrirás detalles decorativos únicos y regalos perfectos para bodas y ocasiones especiales, o simplemente ese artículo que estabas buscando, todo a precios de taller.
      </p>

      <!-- Instagram-style grid -->
      <div class="instagram-grid mb-12">
        <div 
          v-for="item in shopItems" 
          :key="item.id"
          class="grid-item"
          @click="openModal(item)"
        >
          <img :src="item.image" :alt="item.title" class="grid-image" />
          <div class="grid-overlay">
            <span class="overlay-icon">👁️</span>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <Teleport to="body">
        <Transition name="modal">
          <div v-if="selectedItem" class="modal-backdrop" @click="closeModal">
            <div class="modal-content" @click.stop>
              <button class="modal-close" @click="closeModal">&times;</button>
              <div class="modal-grid">
                <div class="modal-image-container">
                  <img :src="selectedItem.image" :alt="selectedItem.title" class="modal-image" />
                </div>
                <div class="modal-info">
                  <h3 class="modal-title">{{ selectedItem.title }}</h3>
                  <p class="modal-description">{{ selectedItem.description }}</p>
                  <div class="modal-price">{{ selectedItem.price }}€</div>
                  <button 
                    class="modal-contact-btn"
                    @click="goToContact"
                  >
                    Contactar para comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>

      <div class="text-center mt-8">
        <p class="text-lg mb-4">¿Interesado en una pieza?</p>
        <a 
          href="#contacto" 
          class="inline-block px-8 py-3 text-white rounded-lg font-semibold transition-all hover:shadow-lg"
          style="background: linear-gradient(135deg, var(--clay-dark), var(--clay-warm))"
        >
          Contáctame
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tienda1 from '@/assets/tienda/tienda1.jpg';
import tienda2 from '@/assets/tienda/tienda2.jpg';
import tienda3 from '@/assets/tienda/tienda3.jpg';
import tienda4 from '@/assets/tienda/tienda4.jpg';
import tienda5 from '@/assets/tienda/tienda5.jpeg';
import tienda6 from '@/assets/tienda/tienda6.jpeg';
import tienda7 from '@/assets/tienda/tienda7.jpeg';
import tienda8 from '@/assets/tienda/tienda8.jpeg';
import tienda9 from '@/assets/tienda/tienda9.jpg';

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
.from-white-clay {
  --tw-gradient-from: var(--white-clay);
}

.to-cream {
  --tw-gradient-to: var(--cream);
}

/* Instagram-style grid */
.instagram-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  max-width: 935px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .instagram-grid {
    gap: 2px;
  }
}

.grid-item {
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  overflow: hidden;
  background: #f0f0f0;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover .grid-image {
  transform: scale(1.05);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.grid-item:hover .grid-overlay {
  opacity: 1;
}

.overlay-icon {
  font-size: 2rem;
  filter: grayscale(1) brightness(2);
}

/* Modal styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow: hidden;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: white;
  border: none;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  line-height: 1;
  color: #333;
}

.modal-close:hover {
  background: #f5f5f5;
  transform: scale(1.1);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
}

@media (max-width: 768px) {
  .modal-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    max-height: 85vh;
    overflow-y: auto;
  }
}

.modal-image-container {
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .modal-info {
    padding: 30px 20px;
  }
}

.modal-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--clay-dark);
  font-weight: 600;
}

.modal-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.modal-price {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--terracotta);
  margin-bottom: 2rem;
}

.modal-contact-btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, var(--clay-dark), var(--clay-warm));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

.elms-sans-title {
  font-family: "Elms Sans", sans-serif;
  font-weight: bold;
  font-size: 2rem;
}
</style>
