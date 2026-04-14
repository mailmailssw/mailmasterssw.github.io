const SiteFooter = {
  data: () => ({
    pages: pages,
    year: 2016
  }),
  methods: { toRoute },
  template: `
  <footer class="border-top py-5 mt-5 bg-light">
    <div class="container">
      <div class="row g-4">
        <!-- Sitemap -->
        <div class="col-md-4">
          <h5 class="fw-bold mb-3">Sitemap</h5>
          <ul class="list-unstyled small mb-0">
            <li v-for="(link,i) in pages.nav" :key="i" class="mb-1">
              <router-link class="text-decoration-none text-dark" :to="toRoute(link.to)">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-md-4">
          <h5 class="fw-bold mb-3">Contact</h5>
          <p class="mb-1"><strong>Address:</strong> {{ pages.contact?.address }}</p>
          <p class="mb-1"><strong>Phone:</strong> {{ pages.contact?.phone }}</p>
          <p class="mb-1"><strong>Email:</strong>
            <a :href="'mailto:'+pages.contact?.email" class="text-decoration-none">
              {{ pages.contact?.email }}
            </a>
          </p>
          <p class="mb-0" v-if="pages.contact?.mapUrl">
            <a :href="pages.contact.mapUrl" target="_blank" rel="noopener" class="small text-decoration-none">
              View on Google Maps
            </a>
          </p>
        </div>

        <!-- Legal -->
        <div class="col-md-4 text-md-end">
          <h5 class="fw-bold mb-3">{{ pages.brand?.name }}</h5>
          <small class="d-block">&copy; <span>{{ year }}</span> {{ pages.brand?.legalName }}</small>
          <small class="text-muted">All rights reserved.</small>
        </div>
      </div>
    </div>
  </footer>
  `
};
