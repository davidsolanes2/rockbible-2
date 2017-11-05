(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('valoracion-album', {
            parent: 'entity',
            url: '/valoracion-album',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'rockbible2App.valoracionAlbum.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/valoracion-album/valoracion-albums.html',
                    controller: 'ValoracionAlbumController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('valoracionAlbum');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('valoracion-album-detail', {
            parent: 'valoracion-album',
            url: '/valoracion-album/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'rockbible2App.valoracionAlbum.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/valoracion-album/valoracion-album-detail.html',
                    controller: 'ValoracionAlbumDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('valoracionAlbum');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ValoracionAlbum', function($stateParams, ValoracionAlbum) {
                    return ValoracionAlbum.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'valoracion-album',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('valoracion-album-detail.edit', {
            parent: 'valoracion-album-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-album/valoracion-album-dialog.html',
                    controller: 'ValoracionAlbumDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ValoracionAlbum', function(ValoracionAlbum) {
                            return ValoracionAlbum.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('valoracion-album.new', {
            parent: 'valoracion-album',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-album/valoracion-album-dialog.html',
                    controller: 'ValoracionAlbumDialogController',
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
                    $state.go('valoracion-album', null, { reload: 'valoracion-album' });
                }, function() {
                    $state.go('valoracion-album');
                });
            }]
        })
        .state('valoracion-album.edit', {
            parent: 'valoracion-album',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-album/valoracion-album-dialog.html',
                    controller: 'ValoracionAlbumDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ValoracionAlbum', function(ValoracionAlbum) {
                            return ValoracionAlbum.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('valoracion-album', null, { reload: 'valoracion-album' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('valoracion-album.delete', {
            parent: 'valoracion-album',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-album/valoracion-album-delete-dialog.html',
                    controller: 'ValoracionAlbumDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ValoracionAlbum', function(ValoracionAlbum) {
                            return ValoracionAlbum.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('valoracion-album', null, { reload: 'valoracion-album' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
