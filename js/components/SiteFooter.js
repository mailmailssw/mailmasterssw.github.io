window.SiteFooter = {
  template: document.getElementById('tmpl-footer').innerHTML,
  data: () => ({
    pages: window.pages,
    year: 2016
  }),
  methods: { toRoute }
};
