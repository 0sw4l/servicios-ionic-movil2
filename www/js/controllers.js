angular.module('app.controllers', [])

.controller('serviciosDisponiblesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {
		var url = "http://localhost:8000/servicios/servicios/?id="+$stateParams.categoriaId+"&format=json";
		$http.get(url).then(
		function (response){
			$scope.servicios = response.data.servicios;
			//console.log($scope.categorias);
				
		}
	)
}])

.controller('detalleDeServicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('categoriasCtrl',function ($scope, $http) {
	$http.get("http://localhost:8000/servicios/categorias/?format=json").then(
		function (response){
			$scope.categorias = response.data.categorias;
			//console.log($scope.categorias);
		}
	)
})

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('perfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('iniciarSesionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('registrarseCtrl',function ($scope, $http) {

	console.log("funciono :D");

	$scope.SignupData = {};

	$scope.doSignup = function(){

		console.log("funciono :D");
		var link = 'http://127.0.0.1:8000/usuarios/clientes/';
		$http.post(link, {
			username : $scope.SignupData.usuario,			
			first_name : $scope.SignupData.nombre, 
			last_name : $scope.SignupData.apellido, 
			direccion : $scope.SignupData.direccion, 
			telefono : $scope.SignupData.telefono, 
			celular : $scope.SignupData.celular,
			email : $scope.SignupData.email, 
			password : $scope.SignupData.password
		}).then(function (res){
			$scope.response = res.data;
		});
	};

})

.controller('confirmarServicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('escojaUnMetodoDePagoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pagoConfirmadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
