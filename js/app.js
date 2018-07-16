var myApp=angular.module("app",['ngRoute', 'ngAnimate']);
myApp.directive('animateOnChange', function($animate,$timeout) {
    return function(scope, elem, attr) {
        scope.$watch(attr.animateOnChange, function(nv,ov) {
            if (nv!=ov) {
                var c = nv > ov?'change-up':'change';
                $animate.addClass(elem,c).then(function() {
                    $timeout(function() {$animate.removeClass(elem,c);});
                });
            }
        });
    };
});
myApp.config(function ($routeProvider) {
    $routeProvider.when("/",
        {
            templateUrl : "partial/main.html"
        }).when("/item1",
        {
            templateUrl : "partial/item1.html"
        }).when("/item2",
        {
            templateUrl : "partial/item2.html"
        });
});
myApp.controller("newsController",function ($scope,$http) {
     $http.get("https://rss2json.com/api.json?rss_url=https://www.youm7.com/rss/SectionRss?SectionID=203").then(function (mydata) {
        $scope.feeds=mydata.data.items;
    });

});

myApp.controller("sportsController",function ($scope,$http) {
     $http.get("https://rss2json.com/api.json?rss_url=https://www.youm7.com/rss/SectionRss?SectionID=332").then(function (mydata) {
        $scope.feeds=mydata.data.items;
    });

});
myApp.controller("mainController",function ($scope,$http) {
     $http.get("https://rss2json.com/api.json?rss_url=https://www.youm7.com/rss/SectionRss?SectionID=88").then(function (mydata) {
        $scope.feeds=mydata.data.items;
    });

});
myApp.controller("sideController",function ($scope,$http) {
     $http.get("https://rss2json.com/api.json?rss_url=https://www.youm7.com/rss/SectionRss?SectionID=319").then(function (mydata) {
        $scope.feeds=mydata.data.items;
    });

});
