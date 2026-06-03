const ServicesMailing = { 
        template: ServicesTemplate,
        data(){ return { page: pages.servicesMailing, heading: 'Mailing Services' }; },
        computed:{ items(){ return (this.page && Array.isArray(this.page.items)) ? this.page.items : []; } },
        methods:{ asset }
      };