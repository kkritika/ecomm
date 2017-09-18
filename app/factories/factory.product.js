// put your config code here
(function() {
  'use strict';
  angular
    .module('app')
    .factory('ProductStore', function($q, $http) {
      return {
        getProducts: function() {

          var products = [{
            id: 1,
            name: 'Product 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: 'http://agritech.tnau.ac.in/agriculture/images/wheat_dec2015.jpg',
            sellers: [{
              id: 1,
              name: 'Seller 1',
              price: 2000
            }, {
              id: 2,
              name: 'Seller 2',
              price: 2400
            }]
          }, {
            id: 2,
            name: 'Product 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: 'http://agritech.tnau.ac.in/agriculture/images/wheat_dec2015.jpg',
            sellers: [{
              id: 1,
              name: 'Seller 1',
              price: 3000
            }]
          }, {
            id: 3,
            name: 'Product 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: 'http://agritech.tnau.ac.in/agriculture/images/wheat_dec2015.jpg',
            sellers: [{
              id: 1,
              name: 'Seller 1',
              price: 2500
            }]
          }, {
            id: 4,
            name: 'Product 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: 'http://agritech.tnau.ac.in/agriculture/images/wheat_dec2015.jpg',
            sellers: [{
              id: 1,
              name: 'Seller 1',
              price: 2900
            }]
          }, {
            id: 5,
            name: 'Product 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: 'http://agritech.tnau.ac.in/agriculture/images/wheat_dec2015.jpg',
            sellers: [{
              id: 1,
              name: 'Seller 1',
              price: 3500
            }]
          }];
          return products;

        }

      }
    })
})()