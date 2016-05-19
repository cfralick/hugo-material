;(function(window, document, undefined) {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : 'your-app-id',
        status     : true,
        xfbml      : true,
        version    : 'v2.5'
      });

      FB.Event.subscribe('auth.statusChange', function(response) {
        console.log(response.status);
      });
    };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

})(window, document, undefined);
