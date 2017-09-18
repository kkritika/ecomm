(function() {
  'use strict';
  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl($scope, $state, store) {
    var vm = $scope;
    vm.sellerLoginFlag = false;
    vm.farmerLoginFlag = false;
    vm.user = {}
    vm.showSellerLogin = function() {
      vm.sellerLoginFlag = !vm.sellerLoginFlag
      vm.farmerLoginFlag = false;
    }
    vm.showFarmerLogin = function() {
      vm.farmerLoginFlag = !vm.farmerLoginFlag
      vm.sellerLoginFlag = false;
    }
    vm.login = function(username, password) {
      // if user is a seller
      if(username == 'seller@abc.com' && password == 'seller'){
        store.setRole('seller')
      	$state.go('dashboard')
      }
      // if user is a farmer

      else if(username == 'farmer@abc.com' && password == 'farmer'){
        store.setRole('farmer')
        $state.go('farmer')
      }
    }
  }
})();