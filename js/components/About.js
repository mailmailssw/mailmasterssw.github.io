const About = { 
        data(){ return { pages: pages }; },
        computed:{ about(){ return this.pages.about || {}; } },
        template:`
      <div class="container-fluid">
        <h1>About {{ pages.brand?.name }}</h1>
        <p class="text-muted" v-if="about.tagline">{{ about.tagline }}</p>
        <div class="row g-4">
          <div class="col-12">
            <p v-for="(p,i) in about.body || []" :key="'b'+i">{{ p }}</p>
            <div class="border rounded p-3 mt-3" v-if="(about.bullets||[]).length">
              <h2 class="h5 mb-2">What we do</h2>
              <ul class="mb-0">
                <li v-for="(w,i) in about.bullets" :key="'w'+i">{{ w }}</li>
              </ul>
            </div>
            <div class="border rounded p-3 mt-3" v-if="(about.glance||[]).length">
              <h2 class="h6 text-uppercase text-muted">At a Glance</h2>
              <ul class="list-unstyled small mb-0">
                <li v-for="(g,i) in about.glance" :key="'g'+i">
                  <strong>{{ g.k }}:</strong> {{ g.v }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        `
      };
