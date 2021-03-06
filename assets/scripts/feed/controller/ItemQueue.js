angular.module('caco.feed.crtl')
    .controller('ItemQueueCrtl', function ($rootScope, $scope, $stateParams, $location, Items, BookMarkREST) {
        $rootScope.module = 'feed';

        Items.dequeue(function (item, found) {
            $scope.item = item;
            $scope.notFound = !found;
        });

        $rootScope.$on('ItemDequeued', function (event, item) {
            $scope.item = item;
        });


        $scope.addToBookmark = function (item) {
            BookMarkREST.add({}, {name: item.title, url: item.url}, function () {
                $location.path('/bookmark');
            });
        };
    });