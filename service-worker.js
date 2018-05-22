

var CACHE_NAME = 'dependencies-cache';

// Files required to make this app work offline
var REQUIRED_FILES = ["jquery.js","index.html","reset.css", "style.css","videoPlayer.js", "manifest.json", "app.css","videoPlayer.js","directionalnavigation-1.0.0.0.js", "build/react.js","build/react-dom.js","browser.min.js", "frontpage.js"];


self.addEventListener('install', function(event) {
  // Perform install step:  loading each required file into cache
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Add all offline dependencies to the cache
        return cache.addAll(REQUIRED_FILES);
      })
      .then(function() {
      	// At this point everything has been cached
        return self.skipWaiting();
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return the response from the cached version
        if (response) {
                    console.log('[fetch] Returning from Service Worker cache: ', event.request.url);
          return response;
        }

        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        return fetch(event.request);
      }
    )
  );
});


self.addEventListener('activate', function(event) {
  // Calling claim() to force a "controllerchange" event on navigator.serviceWorker
  event.waitUntil(self.clients.claim());
});




self.addEventListener('message', function(event) {
  console.log(event.data.action);
if(event.data.action == 'checkURL'){

caches.match(event.data.url).then(function(response){
  if(response){ return event.ports[0].postMessage({'message': 'inCache'});
  }else{
    return event.ports[0].postMessage({'message': 'notCached'});
  }
})
}

if(event.data.action == 'downLoadVideo'){

  caches.open(CACHE_NAME)
      .then(function(cache) {
        // Add all offline dependencies to the cache
        return cache.add(event.data.url);
      })
      .then(function() {
       // console.log('#####################VIDEO FILE CACHED')
      	// At this point everything has been cached

        setTimeout(function(){
          self.registration.showNotification("your file has finished downloading");
        }, 8000)

        return console.log('#####################VIDEO FILE CACHED')//self.skipWaiting();
      })
    return event.ports[0].postMessage({'message': 'downloading'});

}
});

