window.SiteFooter = { template: document.getElementById('tmpl-footer').innerHTML, data: ()=>({ pages: window.pages, year: new Date().getFullYear() }) };
