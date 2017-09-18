/**
 * Config for the router
 */
(function() {
  'use strict';
  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider
      .when('/', '/login')      
      .when('', '/login')
      .otherwise('/login');
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: "../views/login.html",
          controller: "LoginCtrl"
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: "../views/dashboard.html",
          controller: "DashboardCtrl"
        })
        .state('farmer', {
          url: '/farmer',
          templateUrl: "../views/farmer.html",
          controller: "FarmerCtrl"
        })
        .state('product', {
          url: '/product/:id', 
          templateUrl: '../views/product.html',
          controller: 'ProductCtrl'
        })        
        .state('cart', {
          url: '/cart', 
          templateUrl: '../views/cart.html',
          controller: 'CartCtrl'
        })        
        .state('myProducts', {
          url: '/my-products', 
          templateUrl: '../views/myProduct.html',
          controller: 'myProductsCtrl'
        })
    })
})();