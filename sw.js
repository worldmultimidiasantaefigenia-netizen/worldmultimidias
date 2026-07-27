const CACHE="world-v1";

self.addEventListener("install",e=>{

e.waitUntil(

caches.open(CACHE).then(cache=>{

return cache.addAll([

"/",

"/css/style.css",

"/css/responsive.css",

"/js/main.js"

]);

})

);

});

self.addEventListener("fetch",e=>{

e.respondWith(

caches.match(e.request).then(r=>{

return r || fetch(e.request);

})

);

});