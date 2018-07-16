var myApp=angular.module("app",["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider.when("/item1",
        {
            templateUrl : "item1.html"
        }).when("/item2",
        {
            templateUrl : "item2.html"
        });
});
myApp.controller("newsController",function ($scope,$http) {
    $scope.tools=['angular js','spring security','bootstrap'];
    $http.get("https://rss2json.com/api.json?rss_url=https://www.youm7.com/rss/SectionRss?SectionID=203").then(function (mydata) {
        $scope.feeds=mydata.data.items;
    });

});

myApp.controller("sportsController",function ($scope,$http) {
    $scope.tools=['angular js','spring security','bootstrap'];
    $http.get("https://rss2json.com/api.json?rss_url=https://www.youm7.com/rss/SectionRss?SectionID=332").then(function (mydata) {
        $scope.feeds=mydata.data.items;
    });

});
