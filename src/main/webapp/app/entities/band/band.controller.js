(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('BandController', BandController);

    BandController.$inject = ['Band'];

    function BandController(Band) {

        var vm = this;

        vm.bands = [];

        loadAll();

        function loadAll() {
            Band.query(function(result) {
                vm.bands = result;
                vm.searchQuery = null;
            });
        }
    }
})();
