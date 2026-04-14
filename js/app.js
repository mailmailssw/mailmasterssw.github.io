
    (function(){
      

      const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes: [
          { path: '/', component: Home },
          { path: '/about', component: About },
          { path: '/contact', component: Contact },
          { path: '/printing', component: ServicesPrinting },
          { path: '/mailing', component: ServicesMailing },
          { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }]
      });

      const app = Vue.createApp({});
      app.component('nav-bar', NavBar);
      app.component('site-footer', SiteFooter);
      app.use(router);
      app.mount('#app');
    })();
    