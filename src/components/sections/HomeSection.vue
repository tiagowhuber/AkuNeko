<template>
  <section id="home" class="relative bg-gradient-to-br from-cream to-white-clay">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="fade-in-up">
          <h1>Cerámica Gres Artesanal</h1>
          <div class="accent-line"></div>
          <p class="text-xl mb-6">
            Piezas únicas hechas a mano con amor, técnica y creatividad. 
            Cada creación cuenta una historia y lleva consigo la esencia de la tierra y el fuego.
          </p>
          <p class="mb-8">
            Bienvenido a mi mundo de cerámica, donde la tradición se encuentra con la innovación 
            y cada pieza es una obra de arte funcional.
          </p>
          <a 
            href="#tienda" 
            class="inline-block px-8 py-3 text-white rounded-lg font-semibold transition-all hover:shadow-lg"
            style="background: linear-gradient(135deg, var(--terracotta), var(--clay-warm))"
          >
            Ver Tienda
          </a>
        </div>
        
        <div class="fade-in-up">
          <div class="image-placeholder">
            <span>🏺 Imagen Principal</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.from-cream {
  --tw-gradient-from: var(--cream);
}

.to-white-clay {
  --tw-gradient-to: var(--white-clay);
}
</style>
