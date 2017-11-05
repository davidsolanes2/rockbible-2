(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('InstrumentController', InstrumentController);

    InstrumentController.$inject = ['Instrument'];

    function InstrumentController(Instrument) {

        var vm = this;

        vm.instruments = [];

        loadAll();

        function loadAll() {
            Instrument.query(function(result) {
                vm.instruments = result;
                vm.searchQuery = null;
            });
        }
    }
})();
