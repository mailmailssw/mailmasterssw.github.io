
    (function(){
      function toRoute(raw){
        if(!raw) return '/';
        if(/^#\//.test(raw)) return raw.replace(/^#/, '');
        if(/^\//.test(raw)) return raw;
        if(/about\.html$/i.test(raw)) return '/about';
        if(/contact\.html$/i.test(raw)) return '/contact';
        return raw.startsWith('/') ? raw : ('/' + raw.replace(/^\#?\/?/, ''));
      }
      function asset(p){
        if(!p) return '';
        if(/^https?:\/\//.test(p)) return p;
        // normalize leading ./ or /
        let clean = (''+p).replace(/^[./]+/, '');
        // Handle absolute nuxt-style '/images/...'
        if (clean.startsWith('images/')) return './assets/public/public/' + clean;
        // If already 'public/...'
        if (clean.startsWith('public/')) return './assets/' + clean;
        // If already 'assets/...'
        if (clean.startsWith('assets/')) return './' + clean;
        // Fallback: try mapping into public/public
        return './assets/public/public/' + clean;
      }

      // moved: NavBar

      // moved: window.NotFound

      const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes: [
          { path: '/', component: window.Home },
          { path: '/about', component: window.About },
                    { path: '/contact', component: window.Contact },
          { path: '/:pathMatch(.*)*', name: 'NotFound', component: window.NotFound },
          { path: '/printing', component: window.ServicesPrinting },
          { path: '/mailing', component: window.ServicesMailing }]
      });

      const app = Vue.createApp({});
      app.component('nav-bar', window.NavBar);
      app.component('site-footer', window.SiteFooter);
      app.use(router);
      app.mount('#app');
    })();
    