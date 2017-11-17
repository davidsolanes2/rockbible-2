(function() {
    'use strict';
    angular
        .module('rockbible2App')
        .factory('ValoracionBand', ValoracionBand);

    ValoracionBand.$inject = ['$resource', 'DateUtils'];

    function ValoracionBand ($resource, DateUtils) {
        var resourceUrl =  'api/valoracion-bands/:id';

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
