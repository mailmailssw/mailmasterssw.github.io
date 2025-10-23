window.About = { template: document.getElementById('tmpl-about').innerHTML,
        data(){ return { pages: window.pages }; },
        computed:{ about(){ return this.pages.about || {}; } }
      };
