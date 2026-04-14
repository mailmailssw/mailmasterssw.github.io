const ServicesPrinting = { 
        template: ServicesTemplate,
        data(){ return { pages: pages, heading: 'Printing Services' }; },
        computed:{ items(){ return (this.pages.servicesPrinting && Array.isArray(this.pages.servicesPrinting.items)) ? this.pages.servicesPrinting.items : []; } },
        methods:{ asset }
      };
