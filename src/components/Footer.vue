<template>
  <footer class="brutal-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-block brand-block">
          <h3 class="footer-brand">AKU NEKO</h3>
          <p class="footer-tagline">
            Catherine Huber<br>Independent Potter
          </p>
        </div>

        <!-- Contact Column -->
        <div class="footer-block">
          <div class="footer-label">CONTACTO</div>
          <ul class="footer-list">
            <li>
              <a href="mailto:cat.huber@invina.net" class="footer-link">
                cat.huber@invina.net
              </a>
            </li>
            <li>
              <a href="tel:+56984497339" class="footer-link">
                +56 9 8449 7339
              </a>
            </li>
            <li class="footer-text">
              Talca, Chile
            </li>
          </ul>
        </div>

        <!-- Social Column -->
        <div class="footer-block social-block">
          <div class="footer-label">INSTAGRAM</div>
          <a href="https://www.instagram.com/taller_aku_neko/" class="social-link-brutal" target="_blank" rel="noopener noreferrer">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @taller_aku_neko
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright-block">
          © {{ currentYear }} AKU NEKO
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.brutal-footer {
  background: var(--brutal-black);
  border-top: 8px solid var(--terracotta);
  padding: 4rem 2rem 2rem;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 0;
  margin-bottom: 3rem;
  border: 4px solid var(--cream);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .brutal-footer {
    padding: 3rem 1rem 1.5rem;
    border-top: 6px solid var(--terracotta);
  }
  
  .footer-grid {
    border: 3px solid var(--cream);
    margin-bottom: 2rem;
  }
  
  .footer-block {
    padding: 1.5rem;
    border: 2px solid var(--cream);
  }
  
  .footer-brand {
    font-size: 2rem;
  }
  
  .footer-tagline {
    font-size: 0.9rem;
  }
  
  .footer-link,
  .footer-text {
    font-size: 0.9rem;
  }
  
  .footer-bottom {
    border-top: 3px solid var(--cream);
  }
  
  .copyright-block {
    font-size: 0.8rem;
  }
}

.footer-block {
  padding: 2.5rem;
  border: 2px solid var(--cream);
}

@media (max-width: 1024px) {
  .footer-block {
    padding: 2rem;
  }
}

.brand-block {
  background: var(--terracotta);
  border: none;
}

.footer-brand {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: 0.1em;
  color: var(--brutal-black);
  margin-bottom: 1rem;
  line-height: 1;
}

.footer-tagline {
  font-size: 1rem;
  color: var(--brutal-black);
  font-weight: 500;
  line-height: 1.4;
}

.footer-label {
  font-family: "Elms Sans", sans-serif;
  font-weight: 900;
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  color: var(--terracotta);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  color: var(--cream);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: none;
  display: block;
}

.footer-link:hover {
  color: var(--terracotta);
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.footer-text {
  color: var(--clay-warm);
  font-size: 1rem;
}

.social-block {
  background: var(--earth-brown);
  border: none;
}

.social-block .footer-label {
  color: var(--cream);
}

.social-link-brutal {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--cream);
  font-family: "Elms Sans", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  transition: none;
}

.social-link-brutal:hover {
  color: var(--terracotta);
}

.social-icon {
  width: 40px;
  height: 40px;
}

.footer-bottom {
  border-top: 4px solid var(--cream);
  padding-top: 2rem;
}

.copyright-block {
  text-align: center;
  font-family: "Elms Sans", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  color: var(--clay-warm);
  text-transform: uppercase;
}
</style>
