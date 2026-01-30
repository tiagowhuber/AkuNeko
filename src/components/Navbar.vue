<template>
  <nav class="brutal-nav">
    <div class="nav-container">
      <a href="#home" class="logo-brutal">
        <img src="@/assets/navbarlogo.jpg" alt="AkuNeko Logo" class="logo-img">
        <span class="logo-text">AKU NEKO</span>
      </a>
      
      <button
        @click="toggleMenu"
        type="button"
        class="brutal-burger"
        aria-controls="navbar-brutal"
        :aria-expanded="isMenuOpen"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
      
      <div :class="['nav-menu-brutal', { 'menu-open': isMenuOpen }]" id="navbar-brutal">
        <ul class="nav-list-brutal">
          <li v-for="(item, index) in navItems" :key="item.id" :style="{ '--item-index': index }">
            <a
              :href="`#${item.id}`"
              @click="closeMenu"
              :class="['nav-link-brutal', { 'link-active': activeSection === item.id }]"
            >
              <span class="link-number">0{{ index + 1 }}</span>
              <span class="link-text">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'tienda', label: 'Tienda del Taller' },
  { id: 'clases', label: 'Clases' },
  { id: 'quien-soy', label: 'Quién soy' },
  { id: 'exposicion', label: 'Exposición y Prensa' },
  { id: 'trabajos', label: 'Trabajos más locos' },
  { id: 'contacto', label: 'Contacto' }
]

const isMenuOpen = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const updateActiveSection = () => {
  const sections = navItems.map(item => item.id)
  const scrollPosition = window.scrollY + 100

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId)
    if (section) {
      const { offsetTop, offsetHeight } = section
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.brutal-nav {
  background: var(--brutal-black);
  border-bottom: 6px solid var(--terracotta);
  position: fixed;
  width: 100%;
  z-index: 50;
  top: 0;
  left: 0;
}

.nav-container {
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.75rem 2rem;
}

@media (max-width: 640px) {
  .nav-container {
    padding: 0.5rem 1rem;
  }
}

.logo-brutal {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: none;
}

.logo-img {
  height: 60px;
  width: auto;
  border: 3px solid var(--cream);
}

@media (max-width: 640px) {
  .logo-img {
    height: 50px;
    border: 2px solid var(--cream);
  }
}

.logo-text {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--cream);
  letter-spacing: 0.1em;
  display: none;
}

@media (min-width: 768px) {
  .logo-text {
    display: block;
  }
}

.logo-brutal:hover .logo-img {
  border-color: var(--terracotta);
}

.logo-brutal:hover .logo-text {
  color: var(--terracotta);
}

/* Brutalist hamburger */
.brutal-burger {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 60;
}

@media (min-width: 1024px) {
  .brutal-burger {
    display: none;
  }
}

.burger-line {
  width: 30px;
  height: 4px;
  background: var(--cream);
  transition: none;
}

.brutal-burger:hover .burger-line {
  background: var(--terracotta);
}

/* Navigation menu */
.nav-menu-brutal {
  display: none;
}

@media (min-width: 1024px) {
  .nav-menu-brutal {
    display: block;
  }
}

.nav-menu-brutal.menu-open {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--brutal-black);
  padding: 6rem 2rem 2rem;
  z-index: 55;
  overflow-y: auto;
}

.nav-list-brutal {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

@media (min-width: 1024px) {
  .nav-list-brutal {
    flex-direction: row;
    align-items: center;
    gap: 0;
  }
}

.nav-list-brutal li {
  border-bottom: 2px solid var(--earth-brown);
}

@media (min-width: 1024px) {
  .nav-list-brutal li {
    border: none;
    border-left: 2px solid var(--earth-brown);
  }
  
  .nav-list-brutal li:first-child {
    border-left: none;
  }
}

.nav-link-brutal {
  display: block;
  padding: 1.5rem 1rem;
  text-decoration: none;
  font-family: "Elms Sans", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--cream);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: none;
  position: relative;
}

@media (min-width: 1024px) {
  .nav-link-brutal {
    padding: 0.5rem 1.25rem;
    font-size: 0.85rem;
  }
}

.nav-link-brutal:hover {
  background: var(--terracotta);
  color: var(--brutal-black);
}

.nav-link-brutal.link-active {
  background: var(--clay-warm);
  color: var(--brutal-black);
}

.link-number {
  font-weight: 900;
  margin-right: 0.5rem;
  color: var(--terracotta);
}

.nav-link-brutal:hover .link-number,
.nav-link-brutal.link-active .link-number {
  color: var(--brutal-black);
}

.link-text {
  position: relative;
}

@media (max-width: 1023px) {
  .nav-link-brutal {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }
}
</style>
