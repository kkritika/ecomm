(function() {
  'use strict';
  angular
    .module('app')
    .controller('FarmerCtrl', FarmerCtrl)

  function FarmerCtrl($scope, $state, SellerStore, ProductStore, store, _) {
    var vm = $scope;
    var tempProducts = ProductStore.getProducts()
    var tempSellers = SellerStore.getSellers()
    vm.products = tempProducts
    angular.forEach(tempProducts, function(product) {
      product.selectedSeller = product.sellers[0]
    })
    
    vm.showProductDetails = function(product) {
      $state.transitionTo('product', { id: product.id })
    }

    vm.addToCart = function(product){
      return store.addItemsToCart(product)
    }
  }
})();