/**
 * Created by yuan on 2015/6/2.
 */
'use strict'

var demoController=angular.module('demoApp.controller',[]);

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
demoController.controller("scrollController",['$scope','$location','$anchorScroll',function($scope,$location,$anchorScroll){
    $scope.scrollToBottom=function(){
        $location.hash('bottom');
        //console.log("$location"+$location.absUrl());
        $anchorScroll();
        //console.log("$anghcorScroll"+$anchorScroll);
    }
}]);

/**
 * expression.html controller
 */
demoController.controller('expressionController',['$scope','$parse',function($scope,$parse){
    //�ֶ��������ʽ�ı仯
    $scope.$watch('expre',function(newval , oldval , scope){
        console.log("newVal:"+newval);
        console.log('oldVal:'+oldval);
        console.log(scope);
        if(oldval != newval){
            //�øñ��ʽ����parseFun
            var parseFun = $parse(newval);
            //��ȡ����������ı��ʽ��ֵ
            $scope.parseValue = parseFun(scope);
        }
    });
}]);

demoController.controller('expressionStringController',['$scope','$interpolate',function($scope , $interpolate){
    //���ü���
    $scope.$watch('emailBody',function(body){
        if(body){
            var template = $interpolate(body);
            $scope.previewText = template({to : $scope.to});
        }
    });
}]);



demoController.controller("toggleController",function($scope){});