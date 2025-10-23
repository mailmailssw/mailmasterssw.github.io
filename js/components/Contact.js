window.Contact = { 
  template: document.getElementById('tmpl-contact').innerHTML,
  data(){ return { pages: window.pages }; },
  computed:{ 
    contact(){ return this.pages.contact || {}; }, 
    hours(){ return this.pages.hours || []; } 
  },
  methods:{
    sendEmail(e){
      e && e.preventDefault && e.preventDefault();
      const form = e.target;
      const name = form.querySelector('[name="name"]').value || '';
      const email = form.querySelector('[name="email"]').value || '';
      const message = form.querySelector('[name="message"]').value || '';
      const to = (this.contact && this.contact.email) || 'info@mailmasterssw.com';
      const subject = encodeURIComponent('Website inquiry');
      const body = encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    },
    tryAlt(ev, src){
      const el = ev.target;
      if (el && !el.dataset.altTried){
        el.dataset.altTried = '1';
        let p = (''+src).replace(/^[./]+/, '').replace(/^images\//,'assets/public/images/');
        if (!p.startsWith('assets/')) p = 'assets/public/images/' + p;
        el.src = './' + p.replace('assets/public/images/', 'assets/public/public/images/');
      }
    }
  }
};
