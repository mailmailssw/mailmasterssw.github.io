const Home = { 
  data(){ return { pages: pages }; },
  computed:{
    allServices(){ const p=(this.pages.servicesPrinting?.items||[]); const m=(this.pages.servicesMailing?.items||[]); return [...m,...p]; },
    hero(){ return (this.pages.home && this.pages.home.hero) || {}; },
    highlights(){ return (this.pages.home && Array.isArray(this.pages.home.highlights)) ? this.pages.home.highlights : []; }
  },
  methods:{ toRoute, asset },
  template:`
      <div class="container-fluid py-4">
          <!-- header -->
          <div class="text-center py-4">
          <img v-if="pages.brand?.logo" :src="asset(pages.brand.logo)" alt="Logo" class="mb-3" style="max-height:72px">
          <h1 class="display-5 fw-bold">{{ hero.title }}</h1>
          <p class="lead">{{ hero.subtitle }}</p>
        </div>
        
        <div class="row g-4 mt-2">
          <div v-for="(h, i) in highlights" :key="i" class="col-md-4">
            <div class="border rounded p-3 h-100 text-center">
              <div class="d-flex flex-column align-items-center gap-2">
                <div class="card-icon" v-if="h.icon"><i :class="h.icon" aria-hidden="true"></i></div>
                <div>
                  <h3 class="display-4 fw-">{{ h.title }}</h3>
                  <p class="lead" v-if="h.desc">{{ h.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-body-tertiary rounded mb-5 mt-2 text-center">
          <h2 class="h4 mb-2">Ready to streamline your mail?</h2>
          <p class="text-muted mb-3">Talk to us about your next campaign or recurring business mail.</p>
          <router-link to="/contact" class="btn btn-primary btn-lg">Request a Quote</router-link>
        </div>
        
        
        <!-- featured blocks -->
        <div class="container-fluid py-5">
          <h2 class="text-center mb-4">What We Do</h2>

          <div class="row text-center g-4">
            <div class="col-md-4">
              <router-link to="/mailing" class="feature-link">
                <div class="feature-block">
                  <div class="feature-icon">📬</div>
                  <h3>Mailing Services</h3>
                  <p>
                    Direct mail campaigns, EDDM, bulk mail processing, and USPS handling.
                  </p>
                </div>
              </router-link>
            </div>

            <div class="col-md-4">
              <router-link to="/printing" class="feature-link">
                <div class="feature-block">
                  <div class="feature-icon">🖨️</div>
                  <h3>Printing Services</h3>
                  <p>
                    Postcards, flyers, letters, and materials built for direct mail and business use.
                  </p>
                </div>
              </router-link>
            </div>

            <div class="col-md-4">
              <router-link to="/contact" class="feature-link">
                <div class="feature-block">
                  <div class="feature-icon">📦</div>
                  <h3>Mailroom Management</h3>
                  <p>
                    Sorting, metering, and consulting on best USPS practices.
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- featured section -->
        <div class="container-fluid py-5">
          <div class="text-center mb-5">
            <h2>Featured Services</h2>
            <p class="section-intro">
              A closer look at the mailing and printing services we provide for businesses, campaigns, and recurring projects.
            </p>
          </div>

          <div class="row g-4">
            <div class="col-lg-6">
              <div class="featured-service-panel h-100">
                <!--<div class="featured-service-icon">📬</div>-->
                <h3>Mailing Services</h3>
                <p>
                  We help businesses manage direct mail projects from preparation to USPS handling,
                  with support for both simple jobs and larger campaigns.
                </p>
                <ul class="featured-service-list">
                  <li>Direct Mail Campaigns</li>
                  <li>EDDM</li>
                  <li>Bulk Mail Prep</li>
                  <li>Addressing &amp; Processing</li>
                </ul>
                <router-link to="/mailing" class="btn btn-primary mt-3">
                  Explore Mailing Services
                </router-link>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="featured-service-panel h-100">
                <!--<div class="featured-service-icon">🖨️</div>-->
                <h3>Printing Services</h3>
                <p>
                  We print materials built for direct mail, promotions, and everyday business communication,
                  with quality and consistency that support the full job.
                </p>
                <ul class="featured-service-list">
                  <li>Postcards</li>
                  <li>Flyers</li>
                  <li>Brochures</li>
                  <li>Letters &amp; Inserts</li>
                </ul>
                <router-link to="/printing" class="btn btn-outline-primary mt-3">
                  Explore Printing Services
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        
          <!-- Services Carousel
          <div id="servicesCarousel" class="carousel slide mb-5" data-bs-ride="carousel" data-bs-interval="4000">
            <div class="carousel-inner">
              <div class="carousel-item" v-for="(item,i) in allServices" :class="{active: i===0}" :key="i">
                <img :src="asset(item.src)" class="d-block mx-auto" :alt="item.title" style="max-height:480px; object-fit:cover;">
                <div class="carousel-caption bg-dark bg-opacity-50 rounded py-2 px-3">
                  <h5 class="fw-bold">{{ item.title }}</h5>
                  <p class="mb-0 small">{{ item.copy }}</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div> -->
          
        <!-- choose us -->
        <div class="container py-5">
          <div class="text-center mb-5">
            <h2>Why Businesses Work With Us</h2>
            <p class="section-intro">
              We help simplify mailing projects by combining printing, preparation, and USPS experience in one place.
            </p>
          </div>

          <div class="row g-4 text-center">
            <div class="col-md-4">
              <div class="trust-block h-100">
                <div class="trust-icon">✅</div>
                <h3>All-in-One Service</h3>
                <p>
                  Printing, preparation, and mailing handled together so you do not have to coordinate multiple vendors.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="trust-block h-100">
                <div class="trust-icon">📬</div>
                <h3>Experience That Matters</h3>
                <p>
                  Hands-on knowledge of mailing workflows, USPS requirements, and the details that keep jobs moving.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="trust-block h-100">
                <div class="trust-icon">⏱️</div>
                <h3>Reliable Turnaround</h3>
                <p>
                  Clear communication, efficient processing, and dependable support from quote to completion.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- cta -->
        <div class="container-fluid py-5">
          <div class="cta-block text-center">
            <h2>Need Printing, Mailing, or Both?</h2>
            <p class="cta-text">
              Tell us about your project and we’ll help you get it done the right way — from printing to delivery.
            </p>

            <router-link to="/contact" class="btn btn-primary btn-lg mt-3">
              Request a Quote
            </router-link>

            <p class="cta-note mt-2">
              No obligation — we’ll walk you through the options.
            </p>
          </div>
        </div>

        <!-- faq -->
        <div class="container">
          <h2 class="text-center mb-4">Frequently Asked Questions</h2>
          <div class="accordion" id="faqAccordion">

            <!-- 1 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  What services does Mailmasters offer?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  We provide full-service printing, mailing, and fulfillment solutions — including direct mail campaigns, address verification, variable data printing, and custom design services for businesses across New Mexico.
                </div>
              </div>
            </div>

            <!-- 2 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Can you help design my mail pieces or print files?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Absolutely! Our in-house design team can create or clean up your artwork to make sure it meets USPS guidelines and looks professional in print.
                </div>
              </div>
            </div>

            <!-- 3 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What areas do you serve?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  We’re based in Albuquerque, NM and proudly serve clients throughout the Southwest — including Santa Fe, Rio Rancho, and surrounding communities. We can also mail nationwide through our USPS partner network.
                </div>
              </div>
            </div>

            <!-- 4 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How do I get a quote?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  You can request a quote through our <a href="#contact" class="text-decoration-none fw-bold">request form</a> or by calling us directly. Just share the details of your project to us — we’ll handle the rest.
                </div>
              </div>
            </div>

            <!-- 5 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Do you handle bulk mail and Every Door Direct Mail (EDDM)?
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes! We specialize in bulk mail and EDDM. We can target specific ZIP codes or customer segments to maximize your reach while minimizing postage costs.
                </div>
              </div>
            </div>

            <!-- 6 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  How fast can you turn around a job?
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Standard turnaround is 3–5 business days for most jobs, but we can often expedite production for urgent projects. Let us know your deadline and we’ll make it happen.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

  `
};
