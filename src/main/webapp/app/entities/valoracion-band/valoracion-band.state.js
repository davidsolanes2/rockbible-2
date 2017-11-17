(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('valoracion-band', {
            parent: 'entity',
            url: '/valoracion-band',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'rockbible2App.valoracionBand.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/valoracion-band/valoracion-bands.html',
                    controller: 'ValoracionBandController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('valoracionBand');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('valoracion-band-detail', {
            parent: 'valoracion-band',
            url: '/valoracion-band/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'rockbible2App.valoracionBand.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/valoracion-band/valoracion-band-detail.html',
                    controller: 'ValoracionBandDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('valoracionBand');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ValoracionBand', function($stateParams, ValoracionBand) {
                    return ValoracionBand.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'valoracion-band',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('valoracion-band-detail.edit', {
            parent: 'valoracion-band-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-band/valoracion-band-dialog.html',
                    controller: 'ValoracionBandDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ValoracionBand', function(ValoracionBand) {
                            return ValoracionBand.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('valoracion-band.new', {
            parent: 'valoracion-band',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-band/valoracion-band-dialog.html',
                    controller: 'ValoracionBandDialogController',
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
                    $state.go('valoracion-band', null, { reload: 'valoracion-band' });
                }, function() {
                    $state.go('valoracion-band');
                });
            }]
        })
        .state('valoracion-band.edit', {
            parent: 'valoracion-band',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-band/valoracion-band-dialog.html',
                    controller: 'ValoracionBandDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ValoracionBand', function(ValoracionBand) {
                            return ValoracionBand.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('valoracion-band', null, { reload: 'valoracion-band' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('valoracion-band.delete', {
            parent: 'valoracion-band',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/valoracion-band/valoracion-band-delete-dialog.html',
                    controller: 'ValoracionBandDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ValoracionBand', function(ValoracionBand) {
                            return ValoracionBand.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('valoracion-band', null, { reload: 'valoracion-band' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
