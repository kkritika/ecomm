(function() {
  'use strict';
  angular
    .module('app')
    .controller('CartCtrl', CartCtrl)

  function CartCtrl($scope, $state, store) {
    var vm = $scope;
    vm.products = store.getItemsForCart()
    // vm.Total = 0;
    vm.removeItemsFromCart = function(product){
      store.removeItemsFromCart(product)
    }
  }
})();