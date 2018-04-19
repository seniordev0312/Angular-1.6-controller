angular.module('starter.controller', [])

.controller('carsCtrl', ['$scope','FakeService',function($scope,FakeService) {
	$scope.car = {};
	$scope.cars = [];	
	$scope.isEdit = false;

	if (!localStorage.getItem('cars')) {
		localStorage.setItem('cars',JSON.stringify([]));
	}
	

	$scope.getCars = function(){
		$scope.cars = FakeService.getCars();
		// FakeService.getCars().then(function(res,err){
		// 	if (!err) {
		// 		if(!localStorage.getItem('cars')){
		// 			localStorage.setItem('cars',JSON.stringify([]));
		// 		}
		// 		$scope.cars = res.data.data;
		// 		$scope.cars = $scope.cars.concat(JSON.parse(localStorage.getItem('cars')));				
		// 	}else{
		// 		console.log("err: ",JSON.stringify(err));
		// 	}						
		// })
	}

	$scope.getCars();

	$scope.save = function(){
		$scope.car.id = new Date().getTime();
		FakeService.addCar($scope.car);
		$scope.cars.push($scope.car);
		$('#exampleModal').modal('hide');
	}

	$scope.cancel = function(){
		$scope.car = {};
	}

	$scope.edit = function(car){
		$scope.isEdit = true;
		$scope.car = car;
		$('#exampleModal').modal('show');
	}

	$scope.update = function(){		
		FakeService.updateCar($scope.car);
		$('#exampleModal').modal('hide');
		$scope.getCars();
	}

	$scope.delete = function(car){
		FakeService.deleteCar(car);
		$scope.getCars();
	}

}]);