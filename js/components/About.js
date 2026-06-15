const About = {
  data(){ return { pages: pages }; },
  computed:{ about(){ return this.pages.about || {}; } },
  template:`
    <div class="container-fluid page-section">
      <div class="row g-4 align-items-start">
        <div class="col-lg-7">
          <p class="eyebrow">About Us</p>
          <h1>Mailing support your team can actually rely on.</h1>
          <p class="lead" v-if="about.tagline">{{ about.tagline }}</p>
          <p v-for="(p,i) in about.body || []" :key="'b'+i">{{ p }}</p>
        </div>
        <div class="col-lg-5">
          <div class="highlight-card compact-card">
            <h2 class="h5 mb-3">At a Glance</h2>
            <ul class="list-unstyled small mb-0">
              <li v-for="(g,i) in about.glance || []" :key="'g'+i" class="mb-2">
                <strong>{{ g.k }}:</strong> {{ g.v }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row g-4 mt-3 align-items-stretch">
        <div class="col-lg-4">
          <div class="info-card h-100">
            <h2 class="h5 mb-3">What We Do</h2>
            <ul class="clean-list mb-0">
              <li v-for="(w,i) in about.bullets || []" :key="'w'+i">{{ w }}</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info-card h-100">
            <h2 class="h5 mb-3">Who We Serve</h2>
            <ul class="clean-list mb-0">
              <li v-for="(s,i) in about.serve || []" :key="'s'+i">{{ s }}</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info-card h-100">
            <h2 class="h5 mb-3">Why It Helps</h2>
            <ul class="clean-list mb-0">
              <li v-for="(y,i) in about.why || []" :key="'y'+i">{{ y }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
};
