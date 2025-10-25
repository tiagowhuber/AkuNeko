<template>
  <nav class="bg-white border-b border-gray-200 fixed w-full z-50 top-0 left-0 shadow-sm">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#home" class="flex items-center space-x-3">
        <span class="self-center text-2xl font-semibold whitespace-nowrap" style="color: var(--earth-brown)">
          AkuNeko
        </span>
      </a>
      
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        :aria-expanded="isMenuOpen"
      >
        <span class="sr-only">Abrir menú</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      
      <div :class="['w-full md:block md:w-auto', { 'hidden': !isMenuOpen }]" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              @click="closeMenu"
              :class="[
                'block py-2 px-3 rounded md:p-0 transition-colors',
                activeSection === item.id 
                  ? 'text-white bg-clay-dark md:bg-transparent md:text-clay-dark' 
                  : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-clay-warm'
              ]"
            >
              {{ item.label }}
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
  { id: 'quien-soy', label: 'Quién soy' },
  { id: 'tienda', label: 'Tienda del Taller' },
  { id: 'clases', label: 'Clases' },
  { id: 'exposicion', label: 'Exposición y Prensa' },
  { id: 'trabajos', label: 'Trabajos más locos' }
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
.bg-clay-dark {
  background-color: var(--clay-dark);
}

.text-clay-dark {
  color: var(--clay-dark);
}

.md\:hover\:text-clay-warm:hover {
  color: var(--clay-warm);
}
</style>
