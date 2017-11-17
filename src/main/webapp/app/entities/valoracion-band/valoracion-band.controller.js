(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionBandController', ValoracionBandController);

    ValoracionBandController.$inject = ['ValoracionBand'];

    function ValoracionBandController(ValoracionBand) {

        var vm = this;

        vm.valoracionBands = [];

        loadAll();

        function loadAll() {
            ValoracionBand.query(function(result) {
                vm.valoracionBands = result;
                vm.searchQuery = null;
            });
        }
    }
})();
