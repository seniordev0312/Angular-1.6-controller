angular.module('starter.services', [])
.factory('FakeService', function($rootScope, $http,$q) {  
    return {
        getCars: function(){                        
            // return $http.get('https://api.myjson.com/bins/1bfvpn');
            return JSON.parse(localStorage.getItem('cars'));
        },
        addCar: function(car){
            var cars = JSON.parse(localStorage.getItem('cars'));
            cars.push(car);
            localStorage.setItem('cars',JSON.stringify(cars));
        },
        updateCar: function(car){
            var cars = JSON.parse(localStorage.getItem('cars'));
            let index = cars.findIndex((x)=> x.id === car.id);            
            if (index !== -1) {
                cars[index] = car;
                localStorage.setItem('cars',JSON.stringify(cars));
                return true;
            }else{
                return false;
            }
        },
        deleteCar:function(car){
            var cars = JSON.parse(localStorage.getItem('cars'));
            let index = cars.findIndex((x)=> x.id === car.id);
            if (index !== -1) {
                cars.splice(index,1)
                localStorage.setItem('cars',JSON.stringify(cars));
                return true;
            }else{
                return false;
            }
        }

    }
})