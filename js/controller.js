'use strict';

storeApp.controller('storeController',function($scope,$routeParams, DataService){

	$scope.store = DataService.store;
	$scope.detailsprod = DataService.detailsprod;
	$scope.cart = DataService.cart;

	if($routeParams.productCode!=null){
		$scope.product = $scope.store.getProduct($routeParams.productCode);
		$scope.detail = $scope.detailsprod.getDetail($routeParams.productCode);

	}
});