(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('SocialController', SocialController);

    SocialController.$inject = ['Social'];

    function SocialController(Social) {

        var vm = this;

        vm.socials = [];

        loadAll();

        function loadAll() {
            Social.query(function(result) {
                vm.socials = result;
                vm.searchQuery = null;
            });
        }
    }
})();
