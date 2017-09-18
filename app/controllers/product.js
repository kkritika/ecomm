(function() {
  'use strict';
  angular
    .module('app')
    .controller('ProductCtrl', ProductCtrl)

  function ProductCtrl($scope, $state, $stateParams, ProductStore, _, store) {
    var vm = $scope;
    console.log($stateParams.id)
    var id = $stateParams.id
    var products = ProductStore.getProducts()
    vm.product = _.find(products, function(temp) { return temp.id == id; });
    vm.product.selectedSeller = vm.product.sellers[0];
    vm.addToCart = function(product) {
      console.log(product)
      product.quantity = 1
      store.addItemsToCart(product)
    }
  }
})();