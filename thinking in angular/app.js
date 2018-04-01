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