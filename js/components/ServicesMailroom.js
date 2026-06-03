const ServicesMailroom = { 
        template: ServicesTemplate,
        data(){ return { page: pages.servicesMailroom, heading: 'Mailroom Services' }; },
        computed:{ items(){ return (this.page && Array.isArray(this.page.items)) ? this.page.items : []; } },
        methods:{ asset }
      };
