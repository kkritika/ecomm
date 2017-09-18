// put your config code here
(function() {
  'use strict';
  angular
    .module('app')
    .factory('store', function($localStorage) {
      var _token, _client_id, _role, _items;
      return {
        setToken: function(token) {
          _token = token || _token;
          // console.log(token)
          $localStorage.token = _token;
        },
        setClientId: function(client_id) {
          _client_id = client_id || _client_id;
          $localStorage.client_id = client_id;
        },
        getClient_id: function() {
          return _client_id || $localStorage.client_id;
        },
        setRole: function(role) {
          _role = role || _role;
          $localStorage.role = _role;
        },
        addItemsToCart: function(item) {
          _items = $localStorage.items || []

          var tempCart = _items
          // checking if cart conatains similar item with same seller
          var tempItem1 = _.find(tempCart, function(t) { return (t.id == item.id && t.selectedSeller.id == item.selectedSeller.id) })

          // checking if cart conatains similar item with different seller
          var tempItem2 = _.find(tempCart, function(t) { return (t.id == item.id && t.selectedSeller.id != item.selectedSeller.id) })

          if (tempItem1) {
            console.log(tempItem1)
            var i = _items.indexOf(tempItem1)       
            _items[i].quantity +=1    
          } else if (tempItem2) {
            console.log(tempItem2)
            alert('You already have same item with a different seller added in your cart.')
          } else {
             item.quantity = 1
            _items.push(item);
          }



          // console.log(_items)
          $localStorage.items = _items;
        },
        removeItemsFromCart: function(item) {
          _items = $localStorage.items || []
          var tempItem = _.find(_items, function(i) { return item.id })
          var index = _items.indexOf(tempItem)
          _items.splice(index, 1)
          $localStorage.items = _items;
        },
        getItemsForCart: function() {
          return _items || $localStorage.items;
        },
        getRole: function() {
          return _role || $localStorage.role;
        },
        getToken: function() {
          return _token || $localStorage.token;
        },
        isLoggedIn: function() {
          return !!this.getToken();
        },
        logout: function() {
          // console.log(_token)
          _token = undefined;
          _client_id = undefined;
          delete $localStorage.token;
          delete $localStorage.client_id;
          delete $localStorage.role;
        }
      }
    })
})()