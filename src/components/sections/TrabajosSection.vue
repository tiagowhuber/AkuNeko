<template>
  <section id="trabajos" class="bg-white">
    <div class="container">
      <h2 class="text-center">Trabajos más locos</h2>
      <div class="accent-line mx-auto"></div>
      <p class="text-center max-w-2xl mx-auto mb-12">
        Aquí es donde la creatividad no tiene límites. 
        Proyectos experimentales, piezas únicas y creaciones que desafían lo convencional.
      </p>

      <div class="grid-3">
        <div class="ceramic-card group" v-for="project in crazyProjects" :key="project.id">
          <div class="image-placeholder" :style="{ height: '300px' }">
            <span class="text-3xl">{{ project.icon }}</span>
          </div>
          <h3 class="text-xl mb-2 group-hover:text-terracotta transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-sm text-gray-600 mb-3">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="text-xs px-3 py-1 rounded-full"
              style="background-color: var(--cream); color: var(--clay-dark)"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-16 ceramic-card bg-gradient-to-r from-terracotta to-clay-warm text-white">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-white mb-4">¿Tienes una idea loca?</h3>
          <p class="mb-6">
            Me encanta explorar nuevas posibilidades y crear piezas únicas que nadie ha visto antes. 
            Si tienes un proyecto especial en mente, ¡hablemos! Me apasionan los desafíos creativos 
            y las colaboraciones innovadoras.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button 
              class="px-8 py-3 bg-white rounded-lg font-semibold transition-all hover:shadow-lg"
              style="color: var(--terracotta)"
            >
              Proponer Proyecto
            </button>
            <button 
              class="px-8 py-3 border-2 border-white rounded-lg font-semibold transition-all hover:bg-white hover:text-terracotta"
            >
              Ver Portfolio Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CrazyProject {
  id: number
  title: string
  description: string
  tags: string[]
  icon: string
}

const crazyProjects: CrazyProject[] = [
  {
    id: 1,
    title: 'Lámpara Orgánica Gigante',
    description: 'Una lámpara de techo de 80cm hecha completamente en gres con formas inspiradas en organismos marinos.',
    tags: ['Iluminación', 'Gran formato', 'Experimental'],
    icon: '💡'
  },
  {
    id: 2,
    title: 'Murales Cerámicos',
    description: 'Instalación de 100 piezas individuales que forman un mural tridimensional para un restaurante.',
    tags: ['Instalación', 'Colaboración', 'Arte público'],
    icon: '🧩'
  },
  {
    id: 3,
    title: 'Esculturas Cinéticas',
    description: 'Piezas cerámicas que incorporan movimiento y sonido, fusionando cerámica con ingeniería.',
    tags: ['Escultura', 'Innovación', 'Arte cinético'],
    icon: '⚙️'
  },
  {
    id: 4,
    title: 'Serie Bioluminiscente',
    description: 'Jarrones con incrustaciones de materiales fosforescentes que brillan en la oscuridad.',
    tags: ['Experimental', 'Noctilucente', 'Único'],
    icon: '✨'
  },
  {
    id: 5,
    title: 'Vajilla Asimétrica',
    description: 'Conjunto de piezas que desafían la simetría tradicional, cada una con su propia personalidad.',
    tags: ['Funcional', 'Diseño', 'Vanguardia'],
    icon: '🍴'
  },
  {
    id: 6,
    title: 'Instrumentos Musicales',
    description: 'Ocarinas y flautas de cerámica con diseños fantásticos y sonidos únicos.',
    tags: ['Música', 'Artesanía', 'Funcional'],
    icon: '🎵'
  },
  {
    id: 7,
    title: 'Jardín de Cerámica',
    description: 'Instalación exterior con esculturas cerámicas resistentes a la intemperie que simulan un jardín surrealista.',
    tags: ['Exterior', 'Instalación', 'Gran escala'],
    icon: '🌺'
  },
  {
    id: 8,
    title: 'Máscaras Ceremoniales',
    description: 'Serie de máscaras inspiradas en diferentes culturas, con acabados metálicos y texturas complejas.',
    tags: ['Escultura', 'Cultural', 'Decorativo'],
    icon: '🎭'
  },
  {
    id: 9,
    title: 'Mobiliario Cerámico',
    description: 'Sillas y mesas con elementos de cerámica integrados, fusionando diseño y artesanía.',
    tags: ['Diseño', 'Mobiliario', 'Innovación'],
    icon: '🪑'
  }
]
</script>

<style scoped>
.from-terracotta {
  --tw-gradient-from: var(--terracotta);
}

.to-clay-warm {
  --tw-gradient-to: var(--clay-warm);
}

.group-hover\:text-terracotta:hover {
  color: var(--terracotta);
}
</style>
