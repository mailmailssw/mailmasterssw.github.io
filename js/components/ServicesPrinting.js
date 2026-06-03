const ServicesPrinting = { 
        template: ServicesTemplate,
        data(){ return {  page: pages.servicesPrinting, heading: 'Printing Services' }; },
        computed:{ items(){ return (this.page && Array.isArray(this.page.items)) ? this.page.items : []; } },
        methods:{ asset }
      };
