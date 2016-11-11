
  var app = angular.module('ShoppingListCheckOff', []);

  app.service('ShoppingListCheckOffService', function(){

  	this.toBuyItems = [{
  		name: "Cookies",
  		quantity: 10
  	}, {
  		name: "Chocolates",
  		quantity: 100
  	}, {
  		name: "Pendrive",
  		quantity: 2
  	},{
  		name: "Mobile",
  		quantity: 10
  	}, {
  		name: "Laptop",
  		quantity: 1
  	}, {
  		name: "Charger",
  		quantity: 2
  	}];

  	this.boughtItems = [];

  	this.getBuyItems = function(){
  		return this.toBuyItems;
  	};

  	this.getBoughtItems = function(){
  		return this.boughtItems;
  	};

  	this.boughtItem = function(item){
  		//Remove from "To Buy" Items
  		var index = this.toBuyItems.indexOf(item)
  		if(index > -1) {
  			this.toBuyItems.splice(index, 1);
  		}

  		//Add to "Already Bought" Items
  		this.boughtItems.push(item);
  	}
  })

  app.controller('AlreadyBoughtController', function($scope, ShoppingListCheckOffService){
  	$scope.items = ShoppingListCheckOffService.getBoughtItems();
  });

  app.controller('ToBuyController', function($scope, ShoppingListCheckOffService){
  	$scope.items = ShoppingListCheckOffService.getBuyItems();

  	$scope.buyProduct = function(item) {
  		ShoppingListCheckOffService.boughtItem(item);
  	}
  });
