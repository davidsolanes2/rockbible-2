(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('SongController', SongController);

    SongController.$inject = ['Song'];

    function SongController(Song) {

        var vm = this;

        vm.songs = [];

        loadAll();

        function loadAll() {
            Song.query(function(result) {
                vm.songs = result;
                vm.searchQuery = null;
            });
        }
    }
})();
