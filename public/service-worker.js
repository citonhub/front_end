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


    // reactiong to background sync

    self.addEventListener('sync', event => {
     
        event.waitUntil(
          console.log('shouldWork')
        );
     
    });

   


 // background sync
   const {registerRoute} = workbox.routing;
const {NetworkOnly} = workbox.strategies;



   const bgSyncPlugin = new workbox.backgroundSync.Plugin('post-queue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
  });
  
 

  registerRoute(
    '/save-code-content-project',
    new NetworkOnly({
      plugins: [bgSyncPlugin]
    }),
    'POST'
  );

  registerRoute(
    '/save-code-content',
    new NetworkOnly({
      plugins: [bgSyncPlugin]
    }),
    'POST'
  );

  

    function showNotification(notificationCount,notificationOptions) {

    

       if(notificationOptions.data.type == 'new_connection'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' connected to you';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + (notificationCount - 1) +' others connected to you';
        }
      
       }


       if(notificationOptions.data.type == 'new_project'){

        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' created a new project';

          notificationOptions.body =  'Title: ' + notificationOptions.data.project.title +  '\n' + ' stars: ' + notificationOptions.data.project.stars ;
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + (notificationCount - 1) +' others created a new project';


          notificationOptions.body =  'Title: ' + notificationOptions.data.project.title + '\n' + ' stars: ' + notificationOptions.data.project.stars ;
        }

       }


       if(notificationOptions.data.type == 'new_project_comment'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' commented on your project';

          notificationOptions.body =  'Title: ' + notificationOptions.data.project.title +  '\n' + ' stars: ' + notificationOptions.data.project.stars ;
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + (notificationCount - 1) +' others commented on your project';


          notificationOptions.body =  'Title: ' + notificationOptions.data.project.title + '\n' + ' stars: ' + notificationOptions.data.project.stars ;
        }
      
       }


       if(notificationOptions.data.type == 'new_duel'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' created a duel';

          notificationOptions.body =   notificationOptions.data.duel.title ;
         
        }else{

          
        }
      
       }


       if(notificationOptions.data.type == 'duel_comment'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' commented on your duel';

          notificationOptions.body =   notificationOptions.data.duel.title ;
         
        }else{
          
          notificationOptions.title = notificationOptions.data.name + ' and ' + (notificationCount - 1)  +' others commented on your duel';


          notificationOptions.body =   notificationOptions.data.duel.title ;
          
        }
      
       }


       if(notificationOptions.data.type == 'duel_like'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' liked your duel';

          notificationOptions.body =   notificationOptions.data.duel.title ;
         
        }else{
          
          notificationOptions.title = notificationOptions.data.name + ' and ' + (notificationCount - 1) +' others liked your duel';


          notificationOptions.body =   notificationOptions.data.duel.title ;
          
        }
      
       }


       if(notificationOptions.data.type == 'duel_join'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' joined your duel';

          notificationOptions.body =   notificationOptions.data.duel.title +  '\n' + 'participants:' + notificationOptions.data.duel.current_participant;
         
        }else{
          
          notificationOptions.title = notificationOptions.data.name + ' and ' + (notificationCount - 1)  +' others joined your duel';


          notificationOptions.body =   notificationOptions.data.duel.title +  '\n' + 'participants:' + notificationOptions.data.duel.current_participant;
          
        }
      
       }

       

         if(notificationOptions.data.type == 'new_message'){

          let UserName = '';
              
          if(notificationOptions.data.space.type == 'Direct'){
            UserName = notificationOptions.data.name;
          }else{
            UserName = notificationOptions.data.space.name;
          }

          if(notificationCount == undefined){

            notificationOptions.title = 'New message from ' + UserName;
           
          }else{
            
            notificationOptions.title =  notificationCount + ' unread messages from ' + UserName;
  
            
          }
        
         }
        self.registration.showNotification(notificationOptions.title, notificationOptions);
        return;
      }



 self.addEventListener('push',event => {
     const notificationData = event.data.json();
        
     
        

      var  notificationTag = notificationData.tag;

      var notificationFilter = {
        tag: notificationTag
      };

      return self.registration.getNotifications(notificationFilter)
          .then(function(notifications) {
            
            if (notifications && notifications.length > 0) {
             

              var notificationCount = 1;
              for (var i = 0; i < notifications.length; i++) {
                var existingNotification = notifications[i];

               
                 
                if (existingNotification.data.notificationCount > 1) {
                  notificationCount +=
                  existingNotification.data.notificationCount;
                } else {
                  notificationCount++;
                }
                existingNotification.close();
              }
             
              notificationData.data.notificationCount = notificationCount;
            }

            

            return showNotification(notificationCount,notificationData);
          });
     
   
 });


self.addEventListener('notificationclick', function (event)
{
    const rootUrl = new URL('/', event.notification.data.url).href; 
    event.notification.close();
    event.waitUntil(
        clients.matchAll().then(matchedClients =>
        {
            for (let client of matchedClients)
            {
                if (client.url.indexOf(rootUrl) >= 0)
                {
                    return client.focus();
                }
            }

            return clients.openWindow(rootUrl).then(function (client) { client.focus(); });
        })
    );
});