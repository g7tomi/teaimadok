function MainRun($rootScope, $log,$http) {
    "ngInject";
	 $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) { 

            $( "#preloader" ).addClass( "active" );
            $( "#mypreloaderbackground" ).addClass( "mypreloaderbackground" );
         $log.debug('$stateChangeStart', arguments); 
     });

     $rootScope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams) { 
            window.scrollTo(0, 0);
         
             $( "#preloader" ).removeClass( "active" );
             $( "#mypreloaderbackground" ).removeClass( "mypreloaderbackground" );
         $log.debug('$stateNotFound', arguments); 
     });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
                  window.scrollTo(0, 0);
             $( "#preloader" ).removeClass( "active" );
             $( "#mypreloaderbackground" ).removeClass( "mypreloaderbackground" );
        $log.debug('$stateChangeSuccess', arguments);
    });

     $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) { 
            window.scrollTo(0, 0);
             $( "#preloader" ).removeClass( "active" );
             $( "#mypreloaderbackground" ).removeClass( "mypreloaderbackground" );
         $log.debug('$stateChangeError', arguments); 
     });
}
export default MainRun;