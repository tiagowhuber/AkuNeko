<template>
  <section id="contacto" class="brutal-contacto">
    <div class="contacto-container">
      <div class="title-stack-contacto">
        <h2 class="title-outline">CONTACTO</h2>
        <div class="accent-line"></div>
      </div>

      <div class="contact-grid">
        <div class="contact-block">
          <div class="label-brutal">DIRECCIÓN</div>
          <p class="contact-value">
            10 Norte con 38 or. Nº 3951<br>Talca CHILE
          </p>
          <p class="contact-note">(Ex Camino Al Agua Nº 87 Las Rastras)</p>
        </div>
        
        <div class="contact-block">
          <div class="label-brutal">EMAIL</div>
          <a href="mailto:cat.huber@invina.net" class="contact-value link-brutal">cat.huber@invina.net</a>
        </div>
        
        <div class="contact-block">
          <div class="label-brutal">FONO</div>
          <a href="tel:+56984497339" class="contact-value link-brutal">+56 984 497 339</a>
        </div>
        
        <div class="contact-block">
          <div class="label-brutal">WEB</div>
          <a href="https://www.akunekoceramica.com" target="_blank" rel="noopener noreferrer" class="contact-value link-brutal">
            akunekoceramica.com
          </a>
        </div>

        <div class="contact-block instagram-block">
          <div class="label-brutal">INSTAGRAM</div>
          <a 
            href="https://www.instagram.com/taller_aku_neko/" 
            target="_blank"
            rel="noopener noreferrer"
            class="instagram-link"
          >
            <svg class="instagram-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@taller_aku_neko</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.brutal-contacto {
  background: var(--earth-brown);
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow-x: hidden;
}

@media (max-width: 640px) {
  .brutal-contacto {
    padding: 4rem 1rem 3rem;
  }
}

.contacto-container {
  max-width: 1200px;
  margin: 0 auto;
}

.title-stack-contacto {
  margin-bottom: 4rem;
}

.title-outline {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: clamp(4rem, 15vw, 11rem);
  line-height: 0.85;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: var(--cream);
  margin: 0;
}

@media (max-width: 640px) {
  .title-outline {
    font-size: clamp(2.2rem, 9vw, 4rem);
  }
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0;
  border: 6px solid var(--brutal-black);
}

.contact-block {
  background: var(--cream);
  padding: 2.5rem;
  border: 3px solid var(--brutal-black);
  position: relative;
}

.contact-block:hover {
  background: var(--brutal-white);
  z-index: 1;
}

.label-brutal {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  color: var(--brutal-black);
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.contact-value {
  font-family: "Elms Sans", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--brutal-black);
  line-height: 1.4;
  margin: 0;
}

.contact-note {
  font-size: 0.9rem;
  color: var(--earth-brown);
  margin-top: 0.5rem;
  font-weight: 400;
}

.link-brutal {
  text-decoration: none;
  color: var(--brutal-black);
  display: block;
  transition: none;
}

.link-brutal:hover {
  color: var(--terracotta);
  text-decoration: underline;
  text-decoration-thickness: 3px;
}

.instagram-block {
  grid-column: 1 / -1;
  background: var(--brutal-black);
}

.instagram-block .label-brutal {
  color: var(--cream);
}

.instagram-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  color: var(--terracotta);
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 2rem;
  transition: none;
}

.instagram-link:hover {
  color: var(--clay-warm);
}

.instagram-icon {
  width: 60px;
  height: 60px;
}

@media (max-width: 768px) {
  .instagram-link {
    font-size: 1.5rem;
  }
  
  .instagram-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 640px) {
  .instagram-link {
    font-size: 1.2rem;
    gap: 0.75rem;
  }
  
  .instagram-icon {
    width: 35px;
    height: 35px;
  }
}
</style>
