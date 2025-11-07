<template>
  <section id="exposicion" class="bg-gradient-to-br from-cream to-white-clay elms-sans-section">
    <div class="container">
      <h2 class="text-center elms-sans-title">Exposiciones</h2>
      <div class="accent-line mx-auto"></div>
      <p class="text-center max-w-2xl mx-auto mb-12 elms-sans-text">
        Mis trabajos han sido expuestos en diversas galerías y eventos. 
        Aquí puedes ver algunos momentos destacados de mi trayectoria artística.
      </p>

      <div class="mb-16">
        <div class="grid-2">
          <div class="ceramic-card" v-for="exhibition in exhibitions" :key="exhibition.id">
            <div class="image-container" :style="{ height: '250px' }">
              <img 
                v-if="exhibition.image" 
                :src="exhibition.image" 
                :alt="exhibition.title"
                class="exhibition-image"
              />
              <video 
                v-else-if="exhibition.video"
                :src="exhibition.video"
                autoplay
                loop
                muted
                playsinline
                class="exhibition-video"
              ></video>
            </div>
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl flex-1 elms-sans-text">{{ exhibition.title }}</h3>
              <span class="text-sm px-3 py-1 rounded-full bg-clay-warm text-white elms-sans-text">
                {{ exhibition.year }}
              </span>
            </div>
            <p class="text-gray-600 mb-3 elms-sans-text">{{ exhibition.location }}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-center mb-8 elms-sans-title">Apariciones en Prensa</h3>
        <div class="press-container">
          <div class="ceramic-card text-center press-card" v-for="press in pressItems" :key="press.id">
            <div v-if="press.image" class="press-image-container mb-4">
              <img :src="press.image" :alt="press.title" class="press-image" />
            </div>
            <div v-else class="text-4xl mb-4">{{ press.icon }}</div>
            <h4 class="font-semibold mb-2 elms-sans-text" style="color: var(--clay-dark)">{{ press.publication }}</h4>
            <p class="text-sm text-gray-600 mb-2 elms-sans-text">{{ press.title }}</p>
            <p class="text-xs elms-sans-text" style="color: var(--clay-warm)">{{ press.date }}</p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center ceramic-card bg-white">
        <h3 class="mb-4 elms-sans-title">¿Interesado en colaborar?</h3>
        <p class="mb-6 max-w-2xl mx-auto elms-sans-text">
          Estoy abierta a exposiciones, colaboraciones artísticas y entrevistas. 
          Si quieres trabajar conmigo, no dudes en contactarme.
        </p>
        <button 
          class="px-8 py-3 text-white rounded-lg font-semibold transition-all hover:shadow-lg elms-sans-button"
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
  image?: string
  video?: string
}

interface PressItem {
  id: number
  publication: string
  title: string
  date: string
  icon?: string
  image?: string
}

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: 'Exposición "Paisajesteka"',
    location: 'Hotel Noi - Santiago de Chile',
    year: '2013',
    image: '/Exposiciones/el-centro_1.jpg'
  },
  {
    id: 2,
    title: 'Exposición "Dialogo...con la cerámica"',
    location: 'Casa del Arte - Talca',
    year: '2015',
    video: '/Exposiciones/SnapInsta.to_AQPE12k4x5BEW6J7raTYZZqCxM9sc8MyKIpvJGHkZLjzRQkhjue6JHQCJH8SkH9xVbTzA2ksx6KPrB8OumzzTp9JWvXQhol5gE4bW1s.mp4'
  },
  {
    id: 3,
    title: 'Exposición "Breve....encuentro con la cerámica"',
    location: 'Casa del Arte - Talca',
    year: '2016',
    image: '/Exposiciones/sillas-monica_1.jpg'
  },
  {
    id: 4,
    title: 'Exposición "Textura y forma....en la cerámica"',
    location: 'Casa del Arte - Talca',
    year: '2017',
    image: '/Exposiciones/el-centro_1.jpg'
  },
  {
    id: 5,
    title: 'Exposición "De Cabeza Al Barro!"',
    location: 'Museo O\'Higginiano - Talca',
    year: '2024',
    image: '/Exposiciones/sillas-monica_1.jpg'
  }
]

const pressItems: PressItem[] = [
  {
    id: 1,
    publication: 'Diario El Centro',
    title: 'Exposición de cerámica gres se presenta en Galería Gabriel Pando',
    date: '28 de Octubre 2017',
    icon: '📰'
  },
  {
    id: 2,
    publication: 'Revista Gentes',
    title: 'Luis Campos de la revista gentes por visitarnos y escribir un tan lindo recuento. Siempre feliz en compartir el arte de la cerámica gres',
    date: '2024',
    image: '/Exposiciones/downloadgram.org_464055023_857984446124385_4223121097903764003_n.webp'
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

.elms-sans-section {
  font-family: "Elms Sans", sans-serif;
}

.elms-sans-text {
  font-family: "Elms Sans", sans-serif;
  font-weight: 300;
}

.elms-sans-title {
  font-family: "Elms Sans", sans-serif;
  font-weight: 600;
}

.elms-sans-button {
  font-family: "Elms Sans", sans-serif;
  font-weight: 500;
}

.image-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--clay-warm) 0%, var(--clay-dark) 100%);
}

.exhibition-image,
.exhibition-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.ceramic-card:hover .exhibition-image,
.ceramic-card:hover .exhibition-video {
  transform: scale(1.05);
}

.press-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .press-container {
    grid-template-columns: 1fr;
  }
}

.press-image-container {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.press-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.press-card:hover .press-image {
  transform: scale(1.05);
}
</style>
