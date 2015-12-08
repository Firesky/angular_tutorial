
(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	})

	var gems = [
	{
		name:'Dodecahedron',
		price: 2.95,
		description: 'Turkish eats',
		canPurchase: true,
		soldOut: false
	},
	{
		name:'Folical Boots',
		price: 4.95,
		description: 'Scooby snacks',
		canPurchase: true,
		soldOut: false
	}
	]

})();
