(function(){
  function toRoute(raw){
    if(!raw) return '/';
    if(/^#\//.test(raw)) return raw.replace(/^#/, '');
    if(/^\//.test(raw)) return raw;
    return '/' + String(raw || '').replace(/^\#?\/?/, '');
  }

  function asset(p){
    if(!p) return '';
    if(/^https?:\/\//i.test(p)) return p;
    // normalize
    let clean = String(p).replace(/^(\.\/)+/, '').replace(/^\/+/, '');
    // Map '/images/...'(or 'images/...') into /assets/public/public/images/...
    if (clean.startsWith('images/')) return './assets/public/public/' + clean;
    // Already a public/assets path
    if (clean.startsWith('assets/')) return './' + clean;
    if (clean.startsWith('public/')) return './assets/' + clean;
    // Default: also map into public/public
    return './assets/public/public/' + clean;
  }

  function tryAlt(ev, src){
    if (ev && ev.target){
      ev.target.alt = 'Image unavailable';
      ev.target.style.opacity = '0.0';
      ev.target.style.transition = 'opacity .2s';
      setTimeout(()=>{ ev.target.style.display='none'; }, 200);
      if (window.console) console.warn('Image failed:', src);
    }
  }

  // Expose early
  window.toRoute = toRoute;
  window.asset = asset;
  window.tryAlt = tryAlt;
})();