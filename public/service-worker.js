importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([]);

const networkFirstHandler = new workbox.strategies.NetworkFirst({
	cacheName: 'dynamic',
	plugins: [
		new workbox.expiration.Plugin({
			maxEntries: 10
		}),
		new workbox.cacheableResponse.Plugin({
			statuses: [200]
		})
	]
});

const FALLBACK_URL = workbox.precaching.getCacheKeyForURL('/resourse/');
const matcher = ({ event }) => event.request.mode === 'navigate';
const handler = args =>
	networkFirstHandler
		.handle(args)
		.then(response => response || caches.match(FALLBACK_URL))
		.catch(() => caches.match(FALLBACK_URL));

workbox.routing.registerRoute(matcher, handler);

// js/css files
    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'core-components',
        })
    );

  // json files
      workbox.routing.registerRoute(
          /\.(?:json)$/,
          new workbox.strategies.StaleWhileRevalidate({
              cacheName: 'static-resources',
          })
      );

    // images
    workbox.routing.registerRoute(
        // Cache image files.
        /\.(?:png|jpg|jpeg|svg|gif)$/,
        // Use the cache if it's available.
        new workbox.strategies.CacheFirst({
            // Use a custom cache name.
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache upto 50 images.
                    maxEntries: 50,
                    // Cache for a maximum of a 30 days.
                    maxAgeSeconds: 30 * 24 * 60 * 60,
                })
            ],
        })
    );

 self.addEventListener('push',event => {
     const notification = event.data.json();
     self.registration.showNotification(notification.title,notification);
 });