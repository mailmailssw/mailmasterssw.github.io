
    (function(){
      const defaultTitle = 'Mail Masters of the Southwest | Printing & Mailing Services';
      const defaultDescription = 'Mail Masters of the Southwest provides commercial printing, direct mail, mail processing, and mailroom management services throughout New Mexico.';

      function updateMetaTag(selector, attributeName, value) {
        let tag = document.head.querySelector(selector);
        if (!tag) {
          tag = document.createElement('meta');

          if (selector.includes('property=')) {
            const property = selector.match(/property="([^"]+)"/)?.[1];
            if (property) tag.setAttribute('property', property);
          } else {
            const name = selector.match(/name="([^"]+)"/)?.[1];
            if (name) tag.setAttribute('name', name);
          }

          document.head.appendChild(tag);
        }

        tag.setAttribute(attributeName, value);
      }

      const routes = [
        {
          path: '/',
          component: Home,
          meta: {
            title: defaultTitle,
            description: defaultDescription
          }
        },
        {
          path: '/about',
          component: About,
          meta: {
            title: 'About Us | Mail Masters of the Southwest',
            description: 'Learn about Mail Masters of the Southwest, a New Mexico mailing and printing company helping organizations streamline printing, mailing, and USPS processing.'
          }
        },
        {
          path: '/contact',
          component: Contact,
          meta: {
            title: 'Request a Quote | Mail Masters of the Southwest',
            description: 'Request a quote for printing, direct mail, mail processing, or mailroom management services from Mail Masters of the Southwest.'
          }
        },
        {
          path: '/printing',
          component: ServicesPrinting,
          meta: {
            title: 'Printing Services | Mail Masters of the Southwest',
            description: 'Commercial printing services including letters, postcards, forms, envelopes, newsletters, and marketing materials for businesses and organizations.'
          }
        },
        {
          path: '/mailing',
          component: ServicesMailing,
          meta: {
            title: 'Mailing Services | Mail Masters of the Southwest',
            description: 'Professional direct mail services including addressing, inserting, sorting, postage preparation, and USPS mailing support for organizations of all sizes.'
          }
        },
        {
          path: '/mailroom',
          component: ServicesMailroom,
          meta: {
            title: 'Mailroom Management | Mail Masters of the Southwest',
            description: 'Mailroom management solutions including sorting, postage management, mail processing, and USPS consulting services.'
          }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: NotFound,
          meta: {
            title: 'Page Not Found | Mail Masters of the Southwest',
            description: defaultDescription
          }
        }
      ];

      const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes
      });

      router.afterEach((to) => {
        const title = to.meta?.title || defaultTitle;
        const description = to.meta?.description || defaultDescription;

        document.title = title;
        updateMetaTag('meta[name="description"]', 'content', description);
        updateMetaTag('meta[property="og:title"]', 'content', title);
        updateMetaTag('meta[property="og:description"]', 'content', description);
      });

      const app = Vue.createApp({});
      app.component('nav-bar', NavBar);
      app.component('site-footer', SiteFooter);
      app.use(router);
      app.mount('#app');
    })();
    