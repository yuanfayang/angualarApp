/**
 * Created by yuan on 2015/6/2.
 */
'use strict'

var demoController = angular.module('demoApp.controller', []);

/**
 * login.html controller
 */
demoController.controller('loginController', ['$scope', function ($scope) {
    $scope.user = {
        email: "739302606@qq.com",
        password: "123456",
        autoLogin: true
    }
}]);
/**
 * scrollpage controller
 */
demoController.controller("scrollController", ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    $scope.scrollToBottom = function () {
        $location.hash('bottom');
        //console.log("$location"+$location.absUrl());
        $anchorScroll();
        //console.log("$anghcorScroll"+$anchorScroll);
    }
}]);

/**
 * expression.html controller
 */
demoController.controller('expressionController', ['$scope', '$parse', function ($scope, $parse) {
    //手动监听表达式的变化
    $scope.$watch('expre', function (newval, oldval, scope) {
        console.log("newVal:" + newval);
        console.log('oldVal:' + oldval);
        console.log(scope);
        if (oldval != newval) {
            //用该表达式设置parseFun
            var parseFun = $parse(newval);
            //获取经过解析后的表达式的值
            $scope.parseValue = parseFun(scope);
        }
    });
}]);

demoController.controller('expressionStringController', ['$scope', '$interpolate', function ($scope, $interpolate) {
    //设置监听
    $scope.$watch('emailBody', function (body) {
        if (body) {
            var template = $interpolate(body);
            console.log(body);
            $scope.previewText = template({to: $scope.to});
        }
    });
}]);

demoController.controller("toggleController", function ($scope) {
});

/**
 * controller举例
 */
demoController.controller("CtrController", function ($scope) {
    $scope.counter = 0;
    $scope.add = function (amount) {
        $scope.counter += amount;
    };
    $scope.subtract = function (amount) {
        $scope.counter -= amount;
    }
});
/**
 * 控制器的嵌套
 * */
demoController.controller("ParentController", function ($scope) {
    $scope.person = {greeted: false}
});
demoController.controller("ChildController", function ($scope) {
    $scope.sayHello = function () {
        $scope.person.name = 'Yuan Fayang';
    }
});