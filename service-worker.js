"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/2048/index.html","e4c772b085d88e61e0140f0b11e2bd75"],["/2048/static/css/main.733a551f.css","05cf6009835f8b128847db6d3cb744a1"],["/2048/static/js/main.9833bb52.js","98b3d11409da5d26f2b5e6f30ee9afa5"],["/2048/static/media/clear-sans-100.04cafb19.woff2","04cafb19140cbcc23a460e2c5123a428"],["/2048/static/media/clear-sans-100.55393820.svg","55393820b5c24df6e5d7e7e772ad6235"],["/2048/static/media/clear-sans-100.784d1b2b.woff","784d1b2b5701c6ea87520a140c18af95"],["/2048/static/media/clear-sans-100.7e0d3aeb.eot","7e0d3aeb3163a0f5a9d80da0549a0367"],["/2048/static/media/clear-sans-300.43f90ca7.eot","43f90ca76c3585fc286161208be42ca4"],["/2048/static/media/clear-sans-300.930193ff.woff","930193fff909a5f270126f7b1c885268"],["/2048/static/media/clear-sans-300.d21fef9a.woff2","d21fef9a9e8fcf8712d9eceaf1c7c712"],["/2048/static/media/clear-sans-300.f6a8d8d7.svg","f6a8d8d7f680d9eef1f499a8ebcedd87"],["/2048/static/media/clear-sans-400.051b4462.woff","051b44622bff6697c5591a681f33eb6a"],["/2048/static/media/clear-sans-400.06720971.svg","067209713c5d920e1b705e13bd290559"],["/2048/static/media/clear-sans-400.207557cd.eot","207557cd41a54883b13627dcfd0240aa"],["/2048/static/media/clear-sans-400.84f51af1.woff2","84f51af1cdeef55f179fe675cd04c536"],["/2048/static/media/clear-sans-400italic.0bc60486.svg","0bc60486563636c6e362e69214173769"],["/2048/static/media/clear-sans-400italic.95e60768.woff2","95e6076824d67be1dcf08d28c9027186"],["/2048/static/media/clear-sans-400italic.a03d974b.woff","a03d974b5a76e2830bc66a4ddd6229a1"],["/2048/static/media/clear-sans-400italic.cadc9538.eot","cadc9538b14df688ec02786901535e1e"],["/2048/static/media/clear-sans-500.3520fd45.svg","3520fd45ff24374afede18d2cd626d6f"],["/2048/static/media/clear-sans-500.96b8e631.eot","96b8e631e4496e866eef93252a94134b"],["/2048/static/media/clear-sans-500.ba2475a2.woff2","ba2475a223c21d4aa8d742ac448a879f"],["/2048/static/media/clear-sans-500.d085896b.woff","d085896bc8318682810d8dc3b118a708"],["/2048/static/media/clear-sans-500italic.5f817f86.eot","5f817f864d34e642d2fd44f62162c91e"],["/2048/static/media/clear-sans-500italic.752d71f8.woff","752d71f84bba0b95da23afa1a62ad9b2"],["/2048/static/media/clear-sans-500italic.99e11fdb.woff2","99e11fdbd7166059662c031df1bd3042"],["/2048/static/media/clear-sans-500italic.d7d8a914.svg","d7d8a91487f1c63b15292fa9f4294757"],["/2048/static/media/clear-sans-700.637ed43d.svg","637ed43d88cc8d27eb7390d16e8413ca"],["/2048/static/media/clear-sans-700.897b74d2.woff2","897b74d2884a92f7bd03190aa493af91"],["/2048/static/media/clear-sans-700.8e557428.woff","8e55742896553de18fbed1a44baf1d79"],["/2048/static/media/clear-sans-700.92a9c29a.eot","92a9c29a5c673efec034d61617369a37"],["/2048/static/media/clear-sans-700italic.0d97516e.svg","0d97516e711d7563a27162189e4a968b"],["/2048/static/media/clear-sans-700italic.53369759.woff2","533697599f7df40d1aeef188ab2b6286"],["/2048/static/media/clear-sans-700italic.97491213.woff","97491213663bf99f4810df090d34398c"],["/2048/static/media/clear-sans-700italic.ec0b0c0b.eot","ec0b0c0b1d4718e4872f28d903436088"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/2048/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});