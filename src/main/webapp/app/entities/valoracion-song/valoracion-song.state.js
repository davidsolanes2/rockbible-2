(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('valoracion-song', {
            parent: 'entity',
            url: '/valoracion-song',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'rockbible2App.valoracionSong.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/valoracion-song/valoracion-songs.html',
                    controller: 'ValoracionSongController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('valoracionSong');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('valoracion-song-detail', {
            parent: 'valoracion-song',
            url: '/valoracion-song/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'rockbible2App.valoracionSong.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/valoracion-song/valoracion-song-detail.html',
                    controller: 'ValoracionSongDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('valoracionSong');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ValoracionSong', function($stateParams, ValoracionSong) {
                    return ValoracionSong.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'valoracion-song',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('valoracion-song-detail.edit', {
            parent: 'valoracion-song-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-song/valoracion-song-dialog.html',
                    controller: 'ValoracionSongDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ValoracionSong', function(ValoracionSong) {
                            return ValoracionSong.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('valoracion-song.new', {
            parent: 'valoracion-song',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-song/valoracion-song-dialog.html',
                    controller: 'ValoracionSongDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                puntuacion: null,
                                like: null,
                                timestamp: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('valoracion-song', null, { reload: 'valoracion-song' });
                }, function() {
                    $state.go('valoracion-song');
                });
            }]
        })
        .state('valoracion-song.edit', {
            parent: 'valoracion-song',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-song/valoracion-song-dialog.html',
                    controller: 'ValoracionSongDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ValoracionSong', function(ValoracionSong) {
                            return ValoracionSong.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('valoracion-song', null, { reload: 'valoracion-song' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('valoracion-song.delete', {
            parent: 'valoracion-song',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-song/valoracion-song-delete-dialog.html',
                    controller: 'ValoracionSongDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ValoracionSong', function(ValoracionSong) {
                            return ValoracionSong.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('valoracion-song', null, { reload: 'valoracion-song' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
