<template>
  <section id="tienda" class="bg-gradient-to-br from-white-clay to-cream">
    <div class="container">
      <h2 class="text-center">Tienda del Taller</h2>
      <div class="accent-line mx-auto"></div>
      <p class="text-center max-w-2xl mx-auto mb-12">
        Descubre mi colección de piezas únicas de cerámica gres. 
        Cada obra está hecha a mano con dedicación y amor por el oficio.
      </p>

      <div class="grid-3 mb-12">
        <div class="ceramic-card" v-for="item in shopItems" :key="item.id">
          <div class="image-placeholder" :style="{ height: '250px' }">
            <span>{{ item.icon }} {{ item.title }}</span>
          </div>
          <h3 class="text-xl mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 mb-4">{{ item.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold" style="color: var(--terracotta)">{{ item.price }}€</span>
            <button 
              class="px-4 py-2 rounded-lg text-white font-semibold transition-all hover:shadow-md"
              style="background: var(--clay-dark)"
            >
              Ver más
            </button>
          </div>
        </div>
      </div>

      <div class="text-center">
        <p class="text-lg mb-4">¿Interesado en una pieza personalizada?</p>
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
interface ShopItem {
  id: number
  title: string
  description: string
  price: number
  icon: string
}

const shopItems: ShopItem[] = [
  {
    id: 1,
    title: 'Tazas Artesanales',
    description: 'Tazas de gres hechas a mano, perfectas para tu café o té favorito.',
    price: 28,
    icon: '☕'
  },
  {
    id: 2,
    title: 'Platos Decorativos',
    description: 'Platos únicos con acabados naturales y diseños orgánicos.',
    price: 45,
    icon: '🍽️'
  },
  {
    id: 3,
    title: 'Jarrones',
    description: 'Jarrones de diferentes tamaños con texturas y colores tierra.',
    price: 65,
    icon: '🏺'
  },
  {
    id: 4,
    title: 'Bowls',
    description: 'Bowls versátiles para servir o decorar, con esmaltes únicos.',
    price: 35,
    icon: '🥣'
  },
  {
    id: 5,
    title: 'Teteras',
    description: 'Teteras funcionales con diseños elegantes y contemporáneos.',
    price: 85,
    icon: '🫖'
  },
  {
    id: 6,
    title: 'Esculturas',
    description: 'Piezas escultóricas únicas, perfectas como elementos decorativos.',
    price: 120,
    icon: '🗿'
  }
]
</script>

<style scoped>
.from-white-clay {
  --tw-gradient-from: var(--white-clay);
}

.to-cream {
  --tw-gradient-to: var(--cream);
}
</style>
