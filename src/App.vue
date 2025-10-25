<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HomeSection from './components/sections/HomeSection.vue'
import QuienSoySection from './components/sections/QuienSoySection.vue'
import TiendaSection from './components/sections/TiendaSection.vue'
import ClasesSection from './components/sections/ClasesSection.vue'
import ExposicionSection from './components/sections/ExposicionSection.vue'
import TrabajosSection from './components/sections/TrabajosSection.vue'
</script>

<template>
  <div class="app-container">
    <Navbar />
    
    <main>
      <HomeSection />
      <QuienSoySection />
      <TiendaSection />
      <ClasesSection />
      <ExposicionSection />
      <TrabajosSection />
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  padding-top: 68px; /* Height of fixed navbar */
}

@media (max-width: 768px) {
  .app-container {
    padding-top: 60px;
  }
}
</style>
