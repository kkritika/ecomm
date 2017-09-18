(function() {
  'use strict';
  angular
    .module('app')
    .controller('myProductsCtrl', myProductsCtrl);

  function myProductsCtrl($scope, $state, ProductStore) {
    var vm = $scope;

    vm.products = ProductStore.getProducts()
    console.log(vm.products)

    /* --------------------------- Controller End ------------------------------- */
  }
})()
