<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-screen-xl mx-auto p-8 md:p-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- About Column -->
        <div>
          <h3 class="text-xl font-semibold mb-4" style="color: var(--clay-warm)">AkuNeko</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Catherine Huber independent potter.
          </p>
        </div>

        <!-- Contact Column -->
        <div>
          <h3 class="text-xl font-semibold mb-4" style="color: var(--clay-warm)">Contacto</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="mailto:cat.huber@invina.net" class="hover:text-clay-warm transition-colors">
                📧 cat.huber@invina.net
              </a>
            </li>
            <li>
              <a href="tel:+34123456789" class="hover:text-clay-warm transition-colors">
                📞 +56 9 8449 7339
              </a>
            </li>
            <li class="text-gray-400">
              📍 Talca, Chile
            </li>
          </ul>
        </div>

        <!-- Social Media Column -->
        <div>
          <h3 class="text-xl font-semibold mb-4" style="color: var(--clay-warm)">Sígueme</h3>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/taller_aku_neko/" class="hover:text-clay-warm transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {{ currentYear }} AkuNeko. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.hover\:text-clay-warm:hover {
  color: var(--clay-warm);
}
</style>
