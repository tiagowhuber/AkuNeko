<template>
  <section id="exposicion" class="brutal-exposicion">
    <div class="expo-container">
      <div class="title-expo-section">
        <h2 class="brutal-title-expo">EXPOSICIONES</h2>
        <div class="accent-line"></div>
        <p class="intro-text">
          Mis trabajos han sido expuestos en diversas galerías y eventos. 
          Aquí puedes ver algunos momentos destacados de mi trayectoria artística.
        </p>
      </div>

      <div class="exhibitions-brutal-grid">
        <div class="exhibition-item" v-for="exhibition in exhibitions" :key="exhibition.id">
          <div class="media-container">
            <img 
              v-if="exhibition.image" 
              :src="exhibition.image" 
              :alt="exhibition.title"
              class="exhibition-media"
            />
            <video 
              v-else-if="exhibition.video"
              :src="exhibition.video"
              autoplay
              loop
              muted
              playsinline
              class="exhibition-media"
            ></video>
          </div>
          <div class="exhibition-info">
            <div class="year-badge">{{ exhibition.year }}</div>
            <h3 class="exhibition-title">{{ exhibition.title }}</h3>
            <p class="exhibition-location">{{ exhibition.location }}</p>
          </div>
        </div>
      </div>

      <div class="press-section">
        <h3 class="press-title">PRENSA</h3>
        <div class="press-grid">
          <div class="press-item" v-for="press in pressItems" :key="press.id">
            <div v-if="press.image" class="press-image-wrapper">
              <img :src="press.image" :alt="press.title" class="press-image" />
            </div>
            <div v-else class="press-icon-wrapper">
              <span class="press-icon">{{ press.icon }}</span>
            </div>
            <div class="press-content">
              <div class="press-pub">{{ press.publication }}</div>
              <p class="press-text">{{ press.title }}</p>
              <div class="press-date">{{ press.date }}</div>
            </div>
          </div>
        </div>
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
.brutal-exposicion {
  background: var(--cream);
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  overflow-x: hidden;
}

@media (max-width: 640px) {
  .brutal-exposicion {
    padding: 4rem 1rem 3rem;
  }
}

.expo-container {
  max-width: 1400px;
  margin: 0 auto;
  overflow-x: hidden;
}

.title-expo-section {
  margin-bottom: 5rem;
  overflow-x: hidden;
}

.brutal-title-expo {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(3rem, 10vw, 9rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--brutal-black);
  margin-bottom: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

@media (max-width: 640px) {
  .brutal-title-expo {
    font-size: clamp(2.2rem, 9vw, 4rem);
    line-height: 0.9;
  }
}

.intro-text {
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--brutal-black);
}

.exhibitions-brutal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 0;
  border: 6px solid var(--brutal-black);
  margin-bottom: 6rem;
}

@media (max-width: 768px) {
  .exhibitions-brutal-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .title-expo-section {
    margin-bottom: 3rem;
  }
  
  .exhibitions-brutal-grid {
    border: 4px solid var(--brutal-black);
    margin-bottom: 4rem;
  }
  
  .media-container {
    height: 250px;
  }
  
  .exhibition-info {
    padding: 1.5rem;
  }
  
  .year-badge {
    top: -18px;
    right: 15px;
    padding: 0.4rem 1.2rem;
    font-size: 1rem;
    border: 2px solid var(--brutal-black);
  }
}

.exhibition-item {
  border: 3px solid var(--brutal-black);
  background: var(--brutal-white);
  transition: none;
}

.exhibition-item:hover {
  background: var(--cream);
}

.media-container {
  width: 100%;
  height: 300px;
  background: var(--brutal-black);
  overflow: hidden;
  position: relative;
}

.exhibition-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.exhibition-info {
  padding: 2rem;
  position: relative;
}

.year-badge {
  position: absolute;
  top: -20px;
  right: 20px;
  background: var(--terracotta);
  color: var(--brutal-black);
  padding: 0.5rem 1.5rem;
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 1.2rem;
  border: 3px solid var(--brutal-black);
}

.exhibition-title {
  font-family: "Elms Sans", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--brutal-black);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.exhibition-location {
  color: var(--earth-brown);
  font-weight: 500;
  font-size: 1rem;
}

.press-section {
  border-top: 8px solid var(--brutal-black);
  padding-top: 4rem;
}

.press-title {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--brutal-black);
  margin-bottom: 3rem;
  text-align: center;
}

.press-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

@media (max-width: 768px) {
  .press-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .press-section {
    padding-top: 3rem;
  }
  
  .press-grid {
    gap: 2rem;
  }
  
  .press-item {
    box-shadow: 6px 6px 0 var(--clay-warm);
    border: 3px solid var(--brutal-black);
  }
  
  .press-item:hover {
    box-shadow: 3px 3px 0 var(--clay-warm);
    transform: translate(3px, 3px);
  }
  
  .press-content {
    padding: 1.5rem;
  }
  
  .press-image-wrapper {
    height: 200px;
  }
}

.press-item {
  background: var(--brutal-white);
  border: 4px solid var(--brutal-black);
  padding: 0;
  box-shadow: 8px 8px 0 var(--clay-warm);
  transition: none;
}

.press-item:hover {
  box-shadow: 4px 4px 0 var(--clay-warm);
  transform: translate(4px, 4px);
}

.press-image-wrapper {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-bottom: 4px solid var(--brutal-black);
}

.press-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.press-icon-wrapper {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cream);
  border-bottom: 4px solid var(--brutal-black);
}

.press-icon {
  font-size: 4rem;
}

.press-content {
  padding: 2rem;
}

.press-pub {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--brutal-black);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.press-text {
  font-size: 0.95rem;
  color: var(--earth-brown);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.press-date {
  font-family: "Elms Sans", sans-serif;
  font-weight: 700;
  color: var(--terracotta);
  font-size: 0.9rem;
}
</style>
