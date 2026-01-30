<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HomeSection from './components/sections/HomeSection.vue'
import QuienSoySection from './components/sections/QuienSoySection.vue'
import TiendaSection from './components/sections/TiendaSection.vue'
import ClasesSection from './components/sections/ClasesSection.vue'
import ExposicionSection from './components/sections/ExposicionSection.vue'
import ContactoSection from './components/sections/ContactoSection.vue'
</script>

<template>
  <div class="app-container">
    <Navbar />
    
    <main>
      <HomeSection />
      <TiendaSection />
      <ClasesSection />
      <QuienSoySection />
      <ExposicionSection />
      <ContactoSection />
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  padding-top: 82px; /* Height of brutal navbar */
}

@media (max-width: 768px) {
  .app-container {
    padding-top: 75px;
  }
}

@media (max-width: 640px) {
  .app-container {
    padding-top: 70px;
  }
}
</style>
