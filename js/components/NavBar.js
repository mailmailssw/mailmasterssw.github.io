const NavBar = {  
    data: ()=>({ pages: pages }),
    methods:{ toRoute },
    template:`
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <router-link class="navbar-brand" to="/">{{ pages.brand?.name || 'Mail Masters SW' }}</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="nav">
            <ul class="navbar-nav ms-auto">
              <li v-for="(link,i) in pages.nav || []" :key="i" class="nav-item">
                <router-link class="nav-link" :to="toRoute(link.to)">{{ link.label }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `
};
