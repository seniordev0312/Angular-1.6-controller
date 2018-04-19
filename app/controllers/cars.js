angular.module('starter.controller', [])

.controller('carsCtrl', ['$scope', 'FakeService', 'Restangular',function($scope, FakeService, Restangular) {
	$scope.car = {};
	$scope.cars = [];	
	$scope.isEdit = false;

	if (!localStorage.getItem('cars')) {
		FakeService.getCarsUsinRestAngular().then(function(response){			
		    localStorage.setItem('cars',JSON.stringify(response));
	    	$scope.getCars();
		}, function(error){
		    console.log('error',error)	
		})
	}



	$scope.getCars = function(){
		// $scope.cars = FakeService.getCars();
		FakeService.getCars().then(function(res,err){			
			$scope.cars = res;
		});
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
		$scope.car = angular.copy(car);
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

	$scope.open = function(){		
		$scope.car = {};
		$scope.isEdit = false;
		$('#exampleModal').modal('show');
	}

}]);