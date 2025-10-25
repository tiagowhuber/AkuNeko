<template>
  <section id="contacto" class="bg-white">
    <div class="container">
      <h2 class="text-center">Contacto</h2>
      <div class="accent-line mx-auto"></div>
      <p class="text-center max-w-2xl mx-auto mb-12">
        ¿Tienes alguna pregunta o quieres hacer un pedido personalizado? 
        Estoy aquí para ayudarte. Escríbeme y te responderé lo antes posible.
      </p>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact Form -->
        <div class="ceramic-card">
          <h3 class="mb-6">Envíame un mensaje</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium" style="color: var(--clay-dark)">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clay-warm focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label for="email" class="block mb-2 text-sm font-medium" style="color: var(--clay-dark)">
                Email *
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clay-warm focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label for="subject" class="block mb-2 text-sm font-medium" style="color: var(--clay-dark)">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clay-warm focus:border-transparent"
                placeholder="Asunto del mensaje"
              />
            </div>

            <div>
              <label for="message" class="block mb-2 text-sm font-medium" style="color: var(--clay-dark)">
                Mensaje *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clay-warm focus:border-transparent resize-none"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 text-white rounded-lg font-semibold transition-all hover:shadow-lg"
              style="background: linear-gradient(135deg, var(--clay-dark), var(--clay-warm))"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="ceramic-card">
            <div class="flex items-start space-x-4">
              <div class="text-3xl">📍</div>
              <div>
                <h4 class="font-semibold mb-1" style="color: var(--clay-dark)">Ubicación</h4>
                <p class="text-gray-600">Madrid, España</p>
                <p class="text-sm text-gray-500 mt-2">
                  Taller disponible para visitas con cita previa
                </p>
              </div>
            </div>
          </div>

          <div class="ceramic-card">
            <div class="flex items-start space-x-4">
              <div class="text-3xl">📧</div>
              <div>
                <h4 class="font-semibold mb-1" style="color: var(--clay-dark)">Email</h4>
                <a 
                  href="mailto:info@akuneko.com" 
                  class="text-clay-warm hover:underline"
                >
                  info@akuneko.com
                </a>
                <p class="text-sm text-gray-500 mt-2">
                  Respondo en menos de 24 horas
                </p>
              </div>
            </div>
          </div>

          <div class="ceramic-card">
            <div class="flex items-start space-x-4">
              <div class="text-3xl">📞</div>
              <div>
                <h4 class="font-semibold mb-1" style="color: var(--clay-dark)">Teléfono</h4>
                <a 
                  href="tel:+34123456789" 
                  class="text-clay-warm hover:underline"
                >
                  +34 123 456 789
                </a>
                <p class="text-sm text-gray-500 mt-2">
                  Lunes a Viernes: 10:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          <div class="ceramic-card">
            <div class="flex items-start space-x-4">
              <div class="text-3xl">💬</div>
              <div>
                <h4 class="font-semibold mb-1" style="color: var(--clay-dark)">Redes Sociales</h4>
                <p class="text-gray-600 mb-3">Sígueme en mis redes</p>
                <div class="flex space-x-3">
                  <a 
                    href="#" 
                    class="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                    style="background-color: var(--cream); color: var(--clay-dark)"
                    aria-label="Instagram"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    class="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                    style="background-color: var(--cream); color: var(--clay-dark)"
                    aria-label="Facebook"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    class="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                    style="background-color: var(--cream); color: var(--clay-dark)"
                    aria-label="Pinterest"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0a12 12 0 0 0-4.37 23.17c-.05-.95-.1-2.42.02-3.46.11-.93.67-2.84.67-2.84s-.17-.34-.17-.84c0-.79.46-1.38 1.03-1.38.49 0 .72.37.72.8 0 .49-.31 1.22-.47 1.9-.13.56.28 1.01.84 1.01 1.01 0 1.79-1.06 1.79-2.6 0-1.36-.98-2.31-2.37-2.31-1.62 0-2.57 1.21-2.57 2.47 0 .49.19.97.42 1.24.05.06.06.11.04.17l-.15.63c-.02.1-.09.13-.19.08-.71-.33-1.16-1.36-1.16-2.19 0-1.79 1.3-3.44 3.75-3.44 1.97 0 3.5 1.4 3.5 3.28 0 1.95-1.23 3.53-2.94 3.53-.57 0-1.11-.3-1.3-.65l-.35 1.34c-.13.49-.48 1.11-.71 1.49a12 12 0 1 0 2.72-23.76z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Here you would typically send the form data to a backend or service
  console.log('Form submitted:', form.value)
  
  // For now, we'll just show an alert
  alert('¡Gracias por tu mensaje! Te responderé pronto.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.text-clay-warm {
  color: var(--clay-warm);
}

.focus\:ring-clay-warm:focus {
  --tw-ring-color: var(--clay-warm);
}
</style>
