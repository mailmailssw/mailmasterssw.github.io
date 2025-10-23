window.ServicesPrinting = { template: document.getElementById('tmpl-services').innerHTML,
        data(){ return { pages: window.pages, heading: 'Printing Services' }; },
        computed:{ items(){ return (this.pages.servicesPrinting && Array.isArray(this.pages.servicesPrinting.items)) ? this.pages.servicesPrinting.items : []; } },
        methods:{ asset }
      };
