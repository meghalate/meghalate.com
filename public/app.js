'use strict';

var app=angular.module('megha',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'main.html'
	    })
	    .when('/profile',{
		    templateUrl: 'profile.html'
		});
});