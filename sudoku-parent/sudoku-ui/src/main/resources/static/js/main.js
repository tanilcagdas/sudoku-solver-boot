
		var RED = "red";
		var BLUE = "blue";

		var stompClient = null;

		function setConnected(connected) {
		    $("#connect").prop("disabled", connected);
		    $("#disconnect").prop("disabled", !connected);
		    if (connected) {
		        $("#conversation").show();
		    }
		    else {
		        $("#conversation").hide();
		    }
		    $("#greetings").html("");
		}


		function disconnect() {
		    if (stompClient != null) {
		        stompClient.disconnect();
		    }
		    setConnected(false);
		    console.log("Disconnected");
		}

	


var headers =  {
	"Access-Control-Allow-Origin": "*",
	'Access-Control-Allow-Credentials': true
};


/**
 * Main AngularJS Web Application
 */
 var app = angular.module('sudokuWebApp', [
 	'ngRoute'
 	]);

/**
 * Configure the Routes
 */
 app.config(['$routeProvider', function ($routeProvider) {
 	$routeProvider
    // Home
    .when("/", {templateUrl: "index.html", controller: "sudokuCtrl"})
    // Pages

    // Blog

    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "sudokuCtrl"});
}]);






