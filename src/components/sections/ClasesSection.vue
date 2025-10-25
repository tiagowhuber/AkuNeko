<template>
  <section id="clases" class="bg-white">
    <div class="container">
      <h2 class="text-center">Clases de Cerámica</h2>
      <div class="accent-line mx-auto"></div>
      <p class="text-center max-w-2xl mx-auto mb-12">
        Aprende el arte de la cerámica en un ambiente creativo y relajado. 
        Clases para todos los niveles, desde principiantes hasta avanzados.
      </p>

      <div class="grid-2 mb-12">
        <div class="ceramic-card" v-for="course in courses" :key="course.id">
          <div class="image-placeholder" :style="{ height: '200px' }">
            <span>{{ course.icon }} {{ course.title }}</span>
          </div>
          <h3 class="mb-3">{{ course.title }}</h3>
          <p class="text-gray-600 mb-4">{{ course.description }}</p>
          
          <div class="space-y-2 mb-4 text-sm">
            <div class="flex items-center">
              <span class="font-semibold mr-2" style="color: var(--clay-dark)">Duración:</span>
              <span>{{ course.duration }}</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold mr-2" style="color: var(--clay-dark)">Nivel:</span>
              <span>{{ course.level }}</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold mr-2" style="color: var(--clay-dark)">Precio:</span>
              <span class="text-xl font-bold" style="color: var(--terracotta)">{{ course.price }}€</span>
            </div>
          </div>

          <button 
            class="w-full px-4 py-2 rounded-lg text-white font-semibold transition-all hover:shadow-md"
            style="background: var(--clay-dark)"
          >
            Reservar Plaza
          </button>
        </div>
      </div>

      <div class="ceramic-card bg-gradient-to-r from-clay-warm to-clay-dark text-white">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-white mb-4">¿Clases Privadas o en Grupo?</h3>
          <p class="mb-6">
            Ofrezco tanto clases privadas personalizadas como talleres grupales. 
            Si tienes un grupo de amigos o familia interesados, puedo organizar 
            una sesión especial adaptada a vuestras necesidades.
          </p>
          <button 
            class="px-8 py-3 bg-white rounded-lg font-semibold transition-all hover:shadow-lg"
            style="color: var(--clay-dark)"
          >
            Consultar Disponibilidad
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Course {
  id: number
  title: string
  description: string
  duration: string
  level: string
  price: number
  icon: string
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Iniciación a la Cerámica',
    description: 'Aprende las técnicas básicas de modelado, acabado y esmaltado. Perfecto para comenzar tu viaje en la cerámica.',
    duration: '4 semanas (8 sesiones)',
    level: 'Principiante',
    price: 180,
    icon: '🎓'
  },
  {
    id: 2,
    title: 'Torno para Principiantes',
    description: 'Domina el torno alfarero desde cero. Aprende a centrar, levantar y dar forma a piezas cilíndricas.',
    duration: '6 semanas (12 sesiones)',
    level: 'Principiante',
    price: 280,
    icon: '🎡'
  },
  {
    id: 3,
    title: 'Técnicas Avanzadas',
    description: 'Explora técnicas complejas de construcción, decoración y acabados especiales para ceramistas con experiencia.',
    duration: '8 semanas (16 sesiones)',
    level: 'Avanzado',
    price: 350,
    icon: '⭐'
  },
  {
    id: 4,
    title: 'Taller de Esmaltes',
    description: 'Aprende a crear y aplicar esmaltes personalizados. Experimenta con colores, texturas y efectos especiales.',
    duration: '4 semanas (8 sesiones)',
    level: 'Intermedio',
    price: 220,
    icon: '🎨'
  }
]
</script>

<style scoped>
.from-clay-warm {
  --tw-gradient-from: var(--clay-warm);
}

.to-clay-dark {
  --tw-gradient-to: var(--clay-dark);
}
</style>
