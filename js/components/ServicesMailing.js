window.ServicesMailing = { template: document.getElementById('tmpl-services').innerHTML,
        data(){ return { pages: window.pages, heading: 'Mailing Services' }; },
        computed:{ items(){ return (this.pages.servicesMailing && Array.isArray(this.pages.servicesMailing.items)) ? this.pages.servicesMailing.items : []; } },
        methods:{ asset }
      };
