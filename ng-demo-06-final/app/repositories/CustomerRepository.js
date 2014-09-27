(function () {
    'use strict';

    angular
        .module('app')
        .factory('CustomerRepository', CustomerRepository);

    CustomerRepository.$inject = ['$http'];

    function CustomerRepository($http) {
        return {
            getAllCustomers: function (id) {
                return $http.get('app/data/customers.json');
            }
        }
    }
})();