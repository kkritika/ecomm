(function() {
  'use strict';
  angular
    .module('app')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl($scope, $state, ProductStore) {
    var vm = $scope;

    vm.products = ProductStore.getProducts()
    console.log(vm.products)

    /* --------------------------- Controller End ------------------------------- */
  }
})()

