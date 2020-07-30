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



    function showNotification(notificationCount,notificationOptions) {

      if(notificationOptions.data.type == 'post_like'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' liked your post';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others liked your post';
        }
      
       }


       if(notificationOptions.data.type == 'post_reply_like'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' liked your reply';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others liked your reply';
        }
      
       }

       if(notificationOptions.data.type == 'post_comment_like'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' liked your comment';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others liked your comment';
        }
      
       }

       if(notificationOptions.data.type == 'post_comment'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' commented on your post';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others commented on your post';
        }
      
       }


       if(notificationOptions.data.type == 'post_pulled'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' pulled your post';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others pulled your post';
        }
      
       }

       if(notificationOptions.data.type == 'post_reply_pulled'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' pulled your reply';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others pulled your reply';
        }
      
       }

       if(notificationOptions.data.type == 'post_comment_pulled'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' pulled your comment';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others pulled your comment';
        }
      
       }



       if(notificationOptions.data.type == 'post_replied'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' replied your comment';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others replied your comment';
        }
      
       }


       if(notificationOptions.data.type == 'new_connection'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' connected to you';
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others connected to you';
        }
      
       }


       if(notificationOptions.data.type == 'new_project_comment'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' commented on your project';

          notificationOptions.body =  'Title: ' + notificationOptions.data.project.title +  '\n' + ' stars: ' + notificationOptions.data.project.stars ;
         
        }else{

          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others commented on your project';


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
          
          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others commented on your duel';


          notificationOptions.body =   notificationOptions.data.duel.title ;
          
        }
      
       }


       if(notificationOptions.data.type == 'duel_like'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' liked your duel';

          notificationOptions.body =   notificationOptions.data.duel.title ;
         
        }else{
          
          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others liked your duel';


          notificationOptions.body =   notificationOptions.data.duel.title ;
          
        }
      
       }


       if(notificationOptions.data.type == 'duel_join'){
               
        
        if(notificationCount == undefined){
          notificationOptions.title = notificationOptions.data.name + ' joined your duel';

          notificationOptions.body =   notificationOptions.data.duel.title +  '\n' + 'participants:' + notificationOptions.data.duel.current_participant;
         
        }else{
          
          notificationOptions.title = notificationOptions.data.name + ' and ' + notificationCount +' others joined your duel';


          notificationOptions.body =   notificationOptions.data.duel.title +  '\n' + 'participants:' + notificationOptions.data.duel.current_participant;
          
        }
      
       }

       

         if(notificationOptions.data.type == 'new_message'){

          console.log(notificationOptions);
             
          if(notificationCount == undefined){

            notificationOptions.title = 'New message from ' +  notificationOptions.data.space.name;
           
          }else{
            
            notificationOptions.title =  notificationCount + ' unread messages from ' + notificationOptions.data.space.name;
  
            
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
             

              var notificationCount = 0;
              for (var i = 0; i < notifications.length; i++) {
                var existingNotification = notifications[i];
                if (existingNotification.data &&
                  existingNotification.data.notificationCount) {
                  notificationCount +=
                  existingNotification.data.notificationCount;
                } else {
                  notificationCount++;
                }
                existingNotification.close();
              }
             
              notificationData.notificationCount = notificationCount;
            }

            return showNotification(notificationCount,notificationData);
          });
     
   
 });

 self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event);

  if (Notification.prototype.hasOwnProperty('data')) {
    console.log('Using Data');
    var url = event.notification.data.url;
    event.waitUntil(clients.openWindow(url));
  } else {
    event.waitUntil(getIdb().get(KEY_VALUE_STORE_NAME,
event.notification.tag).then(function(url) {
      // At the moment you cannot open third party URL's, a simple trick
      // is to redirect to the desired URL from a URL on your domain
      var redirectUrl = '/redirect.html?redirect=' +
        url;
      return clients.openWindow(redirectUrl);
    }));
  }
});