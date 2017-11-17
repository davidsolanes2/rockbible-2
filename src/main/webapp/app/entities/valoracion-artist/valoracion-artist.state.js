(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('valoracion-artist', {
            parent: 'entity',
            url: '/valoracion-artist',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'rockbible2App.valoracionArtist.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/valoracion-artist/valoracion-artists.html',
                    controller: 'ValoracionArtistController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('valoracionArtist');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('valoracion-artist-detail', {
            parent: 'valoracion-artist',
            url: '/valoracion-artist/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'rockbible2App.valoracionArtist.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/valoracion-artist/valoracion-artist-detail.html',
                    controller: 'ValoracionArtistDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('valoracionArtist');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ValoracionArtist', function($stateParams, ValoracionArtist) {
                    return ValoracionArtist.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'valoracion-artist',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('valoracion-artist-detail.edit', {
            parent: 'valoracion-artist-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-artist/valoracion-artist-dialog.html',
                    controller: 'ValoracionArtistDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ValoracionArtist', function(ValoracionArtist) {
                            return ValoracionArtist.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('valoracion-artist.new', {
            parent: 'valoracion-artist',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-artist/valoracion-artist-dialog.html',
                    controller: 'ValoracionArtistDialogController',
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
                    $state.go('valoracion-artist', null, { reload: 'valoracion-artist' });
                }, function() {
                    $state.go('valoracion-artist');
                });
            }]
        })
        .state('valoracion-artist.edit', {
            parent: 'valoracion-artist',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-artist/valoracion-artist-dialog.html',
                    controller: 'ValoracionArtistDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ValoracionArtist', function(ValoracionArtist) {
                            return ValoracionArtist.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('valoracion-artist', null, { reload: 'valoracion-artist' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('valoracion-artist.delete', {
            parent: 'valoracion-artist',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-artist/valoracion-artist-delete-dialog.html',
                    controller: 'ValoracionArtistDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ValoracionArtist', function(ValoracionArtist) {
                            return ValoracionArtist.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('valoracion-artist', null, { reload: 'valoracion-artist' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
