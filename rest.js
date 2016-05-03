  var app = angular.module('app', []);
app.controller('mycontroller',function($scope,$http){

$http({
		 method:'GET',
         url:'http://services.groupkt.com/country/get/all'	 
		  
	  }).then(function successCallback(response){  
	  
            $scope.reciveddata = response;
			
		$scope.countrys = $scope.reciveddata.data.RestResponse.result
				 console.log($scope.reciveddata.data.RestResponse.result);
	
        
	  
	  }, function errorcallback(response){
		
		 
	  });

});