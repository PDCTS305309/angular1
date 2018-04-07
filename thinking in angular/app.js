var module = angular.module("clockApp",[]);
module.controller("clockCtrl",TimeCtrl);		
function TimeCtrl($scope){
	var currentDate = new Date();
	$scope.timeString = currentDate.toTimeString();
	$scope.updateTime = function(){
		var currentDate = new Date();
		$scope.timeString = currentDate.toTimeString();
	}
}

//ng-model-examples
var ngModuleExamplesApp = angular.module("ngModuleExamplesApp", []);
ngModuleExamplesApp.controller("ngModuleExampleCtrl", ngModuleExampleFunc);
function ngModuleExampleFunc($scope) {
    $scope.textBoxChange = function () {
        console.log("textbox changed");
    }
}

//Calculator App
var calcModule = angular.module("calcApp", []);
calcModule.controller("calcCtrl", calcFunction);
function calcFunction() {
    this.buttonClicked = function (button) {
        this.operation = button;
    }
    this.calculateResult = function () {
        if (this.operation == "+") {
            this.result = this.num1 + this.num2;
        } else if (this.operation == "-") {
            this.result = this.num1 - this.num2;
        } else if (this.operation == "*") {
            this.result = this.num1 * this.num2;
        } else {
            this.result = this.num1 / this.num2;
        }
    }
}

//more-directive app
var moreDirApp = angular.module("more-directive-app", []);
moreDirApp.controller("more-directive-app-ctrl", moreDirAppController);
function moreDirAppController() {
   /* this.myList = {
        {'name': "foo", 'age': 20 },
        {'name': "Bar", 'age': 30 },
        {'name': "Buzz", 'age': 40},
        {'name': "Baz", 'age': 50 },
        {'name': "Non", 'age': 60 },
    };*/
}

//modules dilemma

var modulesDilemmaApp = angular.module("modulesDilemmaApp", []);
modulesDilemmaApp.controller("modulesDilemmaCtrl", modulesDilemmaCtrl);
function modulesDilemmaCtrl () {
    this.helloMessage = "Hello, I am from main module !"
}