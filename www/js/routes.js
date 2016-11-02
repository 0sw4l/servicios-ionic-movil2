angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.serviciosDisponibles'
      2) Using $state.go programatically:
        $state.go('tabsController.serviciosDisponibles');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab3/page2
  */
  .state('tabsController.serviciosDisponibles', {
    url: '/page2/:categoriaId',
    views: {
      'tab1': {
        templateUrl: 'templates/serviciosDisponibles.html',
        controller: 'serviciosDisponiblesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/serviciosDisponibles.html',
        controller: 'serviciosDisponiblesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.detalleDeServicio'
      2) Using $state.go programatically:
        $state.go('tabsController.detalleDeServicio');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab3/page3
  */
  .state('tabsController.detalleDeServicio', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/detalleDeServicio.html',
        controller: 'detalleDeServicioCtrl'
      },
      'tab3': {
        templateUrl: 'templates/detalleDeServicio.html',
        controller: 'detalleDeServicioCtrl'
      }
    }
  })

  .state('tabsController.categorias', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/categorias.html',
        controller: 'categoriasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.perfil', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('iniciarSesion', {
    url: '/page6',
    templateUrl: 'templates/iniciarSesion.html',
    controller: 'iniciarSesionCtrl'
  })

  .state('registrarse', {
    url: '/page8',
    templateUrl: 'templates/registrarse.html',
    controller: 'registrarseCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.confirmarServicio'
      2) Using $state.go programatically:
        $state.go('tabsController.confirmarServicio');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab3/page9
  */
  .state('tabsController.confirmarServicio', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/confirmarServicio.html',
        controller: 'confirmarServicioCtrl'
      },
      'tab3': {
        templateUrl: 'templates/confirmarServicio.html',
        controller: 'confirmarServicioCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.escojaUnMetodoDePago'
      2) Using $state.go programatically:
        $state.go('tabsController.escojaUnMetodoDePago');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab3/page10
  */
  .state('tabsController.escojaUnMetodoDePago', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/escojaUnMetodoDePago.html',
        controller: 'escojaUnMetodoDePagoCtrl'
      },
      'tab3': {
        templateUrl: 'templates/escojaUnMetodoDePago.html',
        controller: 'escojaUnMetodoDePagoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.pagoConfirmado'
      2) Using $state.go programatically:
        $state.go('tabsController.pagoConfirmado');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab3/page11
  */
  .state('tabsController.pagoConfirmado', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/pagoConfirmado.html',
        controller: 'pagoConfirmadoCtrl'
      },
      'tab3': {
        templateUrl: 'templates/pagoConfirmado.html',
        controller: 'pagoConfirmadoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page6')

  

});