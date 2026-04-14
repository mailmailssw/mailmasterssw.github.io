(function(){
  function toRoute(raw){
    if(!raw) return '/';
    if(/^#\//.test(raw)) return raw.replace(/^#/, '');
    if(/^\//.test(raw)) return raw;
    return '/' + String(raw || '').replace(/^\#?\/?/, '');
  }

  window.asset = function (p) {
  if (!p) return "";
  return "./assets/" + String(p).replace(/^\/+/, "");
};
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