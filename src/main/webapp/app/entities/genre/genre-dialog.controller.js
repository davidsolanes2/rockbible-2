(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('GenreDialogController', GenreDialogController);

    GenreDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Genre', 'Song', 'Band'];

    function GenreDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Genre, Song, Band) {
        var vm = this;

        vm.genre = entity;
        vm.clear = clear;
        vm.save = save;
        vm.songs = Song.query();
        vm.bands = Band.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.genre.id !== null) {
                Genre.update(vm.genre, onSaveSuccess, onSaveError);
            } else {
                Genre.save(vm.genre, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:genreUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
