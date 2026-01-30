<template>
  <section id="trabajos" class="brutal-trabajos">
    <div class="trabajos-container">
      <div class="header-trabajos">
        <h2 class="trabajos-title-main">TRABAJOS</h2>
        <h2 class="trabajos-title-sub">MÁS LOCOS</h2>
        <div class="accent-line"></div>
        <p class="trabajos-intro">
          Aquí es donde la creatividad no tiene límites. 
          Proyectos experimentales, piezas únicas y creaciones que desafían lo convencional.
        </p>
      </div>

      <div class="projects-brutal-grid">
        <div class="project-card" v-for="project in crazyProjects" :key="project.id">
          <div class="project-icon-box">
            <span class="project-icon">{{ project.icon }}</span>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="tags-container">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="tag-brutal"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="cta-brutal-section">
        <div class="cta-content">
          <h3 class="cta-title">¿TIENES UNA<br>IDEA LOCA?</h3>
          <p class="cta-text">
            Me encanta explorar nuevas posibilidades y crear piezas únicas que nadie ha visto antes. 
            Si tienes un proyecto especial en mente, ¡hablemos!
          </p>
          <div class="cta-buttons">
            <a href="#contacto" class="btn-cta-primary">PROPONER PROYECTO</a>
            <button class="btn-cta-secondary">VER PORTFOLIO</button>
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
.brutal-trabajos {
  background: var(--brutal-white);
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  border-top: 8px solid var(--brutal-black);
  overflow-x: hidden;
}

@media (max-width: 640px) {
  .brutal-trabajos {
    padding: 4rem 1rem 3rem;
    border-top: 6px solid var(--brutal-black);
  }
}

.trabajos-container {
  max-width: 1400px;
  margin: 0 auto;
}

.header-trabajos {
  margin-bottom: 5rem;
  max-width: 800px;
  overflow-x: hidden;
}

.trabajos-title-main {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(3rem, 10vw, 7rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--brutal-black);
  margin: 0;
}

.trabajos-title-sub {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(3rem, 10vw, 7rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin: 0 0 1.5rem 3rem;
}

@media (max-width: 640px) {
  .trabajos-title-main,
  .trabajos-title-sub {
    font-size: clamp(2rem, 8.5vw, 3.5rem);
  }
  
  .trabajos-title-sub {
    margin-left: 1rem;
  }
}

@media (max-width: 768px) {
  .trabajos-title-sub {
    margin-left: 1.5rem;
  }
}

.trabajos-intro {
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--brutal-black);
  margin-top: 2rem;
}

.projects-brutal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
}

@media (max-width: 768px) {
  .projects-brutal-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .header-trabajos {
    margin-bottom: 3rem;
  }
  
  .projects-brutal-grid {
    gap: 1.5rem;
    margin-bottom: 4rem;
  }
  
  .project-card {
    border: 4px solid var(--brutal-black);
  }
  
  .project-card:hover {
    box-shadow: 6px 6px 0 var(--brutal-black);
    transform: translate(-3px, -3px);
  }
  
  .project-icon-box {
    height: 150px;
    border-bottom: 4px solid var(--brutal-black);
  }
  
  .project-icon {
    font-size: 3.5rem;
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
}

.project-card {
  background: var(--cream);
  border: 5px solid var(--brutal-black);
  display: flex;
  flex-direction: column;
  transition: none;
}

.project-card:hover {
  box-shadow: 8px 8px 0 var(--brutal-black);
  transform: translate(-4px, -4px);
}

.project-icon-box {
  background: var(--brutal-black);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid var(--brutal-black);
}

.project-icon {
  font-size: 5rem;
  filter: grayscale(1) brightness(5);
}

.project-content {
  padding: 2rem;
}

.project-title {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--brutal-black);
  margin-bottom: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

.project-description {
  font-size: 0.95rem;
  color: var(--earth-brown);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-brutal {
  background: var(--brutal-black);
  color: var(--cream);
  padding: 0.4rem 0.9rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid var(--brutal-black);
}

.cta-brutal-section {
  background: var(--terracotta);
  border: 6px solid var(--brutal-black);
  padding: 4rem;
  box-shadow: 16px 16px 0 var(--brutal-black);
}

@media (max-width: 768px) {
  .cta-brutal-section {
    padding: 3rem 2rem;
    box-shadow: 10px 10px 0 var(--brutal-black);
  }
}

@media (max-width: 640px) {
  .cta-brutal-section {
    padding: 2rem 1.5rem;
    box-shadow: 8px 8px 0 var(--brutal-black);
    border: 4px solid var(--brutal-black);
  }
  
  .cta-text {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn-cta-primary,
  .btn-cta-secondary {
    width: 100%;
    text-align: center;
    padding: 1rem 2rem;
    font-size: 0.9rem;
  }
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--brutal-black);
  margin-bottom: 2rem;
}

.cta-text {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--brutal-black);
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-cta-primary,
.btn-cta-secondary {
  padding: 1.25rem 2.5rem;
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 4px solid var(--brutal-black);
  cursor: pointer;
  transition: none;
  text-decoration: none;
  display: inline-block;
}

.btn-cta-primary {
  background: var(--brutal-black);
  color: var(--cream);
}

.btn-cta-primary:hover {
  background: var(--earth-brown);
}

.btn-cta-secondary {
  background: transparent;
  color: var(--brutal-black);
}

.btn-cta-secondary:hover {
  background: var(--brutal-black);
  color: var(--cream);
}
</style>
