const ServicesMailroom = { 
        template: ServicesTemplate,
        data(){ return { pages: pages, heading: 'Mailroom Services' }; },
        computed:{ items(){ return (this.pages.servicesMailroom && Array.isArray(this.pages.servicesMailroom.items)) ? this.pages.servicesMailroom.items : []; } },
        methods:{ asset }
      };
