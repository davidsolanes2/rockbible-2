(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('StatusController', StatusController);

    StatusController.$inject = ['Status'];

    function StatusController(Status) {

        var vm = this;

        vm.statuses = [];

        loadAll();

        function loadAll() {
            Status.query(function(result) {
                vm.statuses = result;
                vm.searchQuery = null;
            });
        }
    }
})();
