const ServicesMailing = { 
        template: ServicesTemplate,
        data(){ return { pages: pages, heading: 'Mailing Services' }; },
        computed:{ items(){ return (this.pages.servicesMailing && Array.isArray(this.pages.servicesMailing.items)) ? this.pages.servicesMailing.items : []; } },
        methods:{ asset }
      };
