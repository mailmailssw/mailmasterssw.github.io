window.Home = { template: document.getElementById('tmpl-home').innerHTML,
        data(){ return { pages: window.pages }; },
        computed:{
          allServices(){ const p=(this.pages.servicesPrinting?.items||[]); const m=(this.pages.servicesMailing?.items||[]); return [...m,...p]; },
          hero(){ return (this.pages.home && this.pages.home.hero) || {}; },
          highlights(){ return (this.pages.home && Array.isArray(this.pages.home.highlights)) ? this.pages.home.highlights : []; }
        },
        methods:{ toRoute, asset }
      };
