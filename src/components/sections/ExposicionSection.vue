<template>
  <section id="exposicion" class="bg-gradient-to-br from-cream to-white-clay">
    <div class="container">
      <h2 class="text-center">Exposición y Prensa</h2>
      <div class="accent-line mx-auto"></div>
      <p class="text-center max-w-2xl mx-auto mb-12">
        Mis trabajos han sido expuestos en diversas galerías y eventos. 
        Aquí puedes ver algunos momentos destacados de mi trayectoria artística.
      </p>

      <div class="mb-16">
        <h3 class="text-center mb-8">Exposiciones Recientes</h3>
        <div class="grid-2">
          <div class="ceramic-card" v-for="exhibition in exhibitions" :key="exhibition.id">
            <div class="image-placeholder" :style="{ height: '250px' }">
              <span>{{ exhibition.icon }} {{ exhibition.title }}</span>
            </div>
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl flex-1">{{ exhibition.title }}</h3>
              <span class="text-sm px-3 py-1 rounded-full bg-clay-warm text-white">
                {{ exhibition.year }}
              </span>
            </div>
            <p class="text-gray-600 mb-3">{{ exhibition.location }}</p>
            <p class="text-sm">{{ exhibition.description }}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-center mb-8">Apariciones en Prensa</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="ceramic-card text-center" v-for="press in pressItems" :key="press.id">
            <div class="text-4xl mb-4">{{ press.icon }}</div>
            <h4 class="font-semibold mb-2" style="color: var(--clay-dark)">{{ press.publication }}</h4>
            <p class="text-sm text-gray-600 mb-2">{{ press.title }}</p>
            <p class="text-xs" style="color: var(--clay-warm)">{{ press.date }}</p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center ceramic-card bg-white">
        <h3 class="mb-4">¿Interesado en colaborar?</h3>
        <p class="mb-6 max-w-2xl mx-auto">
          Estoy abierta a exposiciones, colaboraciones artísticas y entrevistas. 
          Si quieres trabajar conmigo, no dudes en contactarme.
        </p>
        <button 
          class="px-8 py-3 text-white rounded-lg font-semibold transition-all hover:shadow-lg"
          style="background: var(--clay-dark)"
        >
          Contactar
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Exhibition {
  id: number
  title: string
  location: string
  year: string
  description: string
  icon: string
}

interface PressItem {
  id: number
  publication: string
  title: string
  date: string
  icon: string
}

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: 'Tierra y Fuego',
    location: 'Galería de Arte Contemporáneo, Madrid',
    year: '2024',
    description: 'Exposición individual mostrando mi última colección de piezas en gres con acabados naturales y texturas orgánicas.',
    icon: '🎨'
  },
  {
    id: 2,
    title: 'Formas de la Naturaleza',
    location: 'Centro Cultural, Barcelona',
    year: '2023',
    description: 'Exposición colectiva junto a otros ceramistas contemporáneos, explorando la conexión entre cerámica y naturaleza.',
    icon: '🌿'
  },
  {
    id: 3,
    title: 'Artesanía Moderna',
    location: 'Feria de Artesanía, Valencia',
    year: '2023',
    description: 'Participación en la feria anual de artesanía con una selección de piezas funcionales y decorativas.',
    icon: '🏆'
  },
  {
    id: 4,
    title: 'Cerámica Experimental',
    location: 'Espacio Arte Underground, Sevilla',
    year: '2022',
    description: 'Muestra de técnicas innovadoras y experimentales en cerámica gres con acabados poco convencionales.',
    icon: '⚡'
  }
]

const pressItems: PressItem[] = [
  {
    id: 1,
    publication: 'Revista Arte y Diseño',
    title: 'Nuevas voces en la cerámica española',
    date: 'Marzo 2024',
    icon: '📰'
  },
  {
    id: 2,
    publication: 'El Periódico del Arte',
    title: 'Entrevista: La magia del gres',
    date: 'Enero 2024',
    icon: '📰'
  },
  {
    id: 3,
    publication: 'Blog Artesanía Hoy',
    title: 'Perfil de artista: AkuNeko',
    date: 'Noviembre 2023',
    icon: '💻'
  },
  {
    id: 4,
    publication: 'Cerámica Magazine',
    title: 'Técnicas innovadoras en gres',
    date: 'Septiembre 2023',
    icon: '📖'
  },
  {
    id: 5,
    publication: 'Radio Arte',
    title: 'Entrevista en directo',
    date: 'Julio 2023',
    icon: '🎙️'
  },
  {
    id: 6,
    publication: 'Instagram Features',
    title: 'Artista destacada del mes',
    date: 'Mayo 2023',
    icon: '📱'
  }
]
</script>

<style scoped>
.from-cream {
  --tw-gradient-from: var(--cream);
}

.to-white-clay {
  --tw-gradient-to: var(--white-clay);
}

.bg-clay-warm {
  background-color: var(--clay-warm);
}
</style>
