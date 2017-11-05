(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('SexController', SexController);

    SexController.$inject = ['Sex'];

    function SexController(Sex) {

        var vm = this;

        vm.sexes = [];

        loadAll();

        function loadAll() {
            Sex.query(function(result) {
                vm.sexes = result;
                vm.searchQuery = null;
            });
        }
    }
})();
