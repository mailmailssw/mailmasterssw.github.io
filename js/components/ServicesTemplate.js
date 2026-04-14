const ServicesTemplate = `
      <div class="container-fluid">
        <h1>{{ heading }}</h1>
        <p class="text-muted">Practical solutions for organizations that mail at volume.</p>
        <div class="row g-4 mt-1">
          <div v-for="(s, i) in items" :key="i" class="col-md-6">
            <div class="card h-100 shadow-sm">
              <img v-if="s.src" class="card-img-top" :src="asset(s.src)" :alt="s.title" style="object-fit:cover; max-height: 280px;" @error="tryAlt($event, s.src)">
              <div class="card-body">
                <h5 class="mb-1">{{ s.title }}</h5>
                <p class="mb-0" v-if="s.copy">{{ s.copy }}</p>
              </div>
            </div>
          </div>
          <div v-if="!items.length" class="col-12">
            <div class="alert alert-warning">No services found.</div>
          </div>
        </div>
      </div>
`;