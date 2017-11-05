(function() {
    'use strict';
    angular
        .module('rockbible2App')
        .factory('ValoracionAlbum', ValoracionAlbum);

    ValoracionAlbum.$inject = ['$resource', 'DateUtils'];

    function ValoracionAlbum ($resource, DateUtils) {
        var resourceUrl =  'api/valoracion-albums/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.timestamp = DateUtils.convertDateTimeFromServer(data.timestamp);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
