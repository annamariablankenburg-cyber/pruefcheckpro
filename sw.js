const C='bc-v2';const A=['/','app.html','index.html','beton.html','geo.html','asphalt.html','proben.html','azubi.html','admin.html','manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A).catch(()=>{}))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
