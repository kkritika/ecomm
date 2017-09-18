// put your config code here
(function() {
  'use strict';
  angular
    .module('app')
    .factory('SellerStore', function($q, $http) {
      return {
        getSellers: function() {
          var sellers = [{
            id: 1,
            name: 'S1',
            price: 200
          }, {
            id: 2,
            name: 'S2',
            price: 240
          }]
          return sellers;
        }
      }
    })
})()