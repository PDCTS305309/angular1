var myHelloModuleApp = angular.module("myHelloModule", ["modulesDilemmaApp", "ngTagsInput"]);
myHelloModuleApp.controller("tagsDemoCtrl", tagsDemoCtrl);

function tagsDemoCtrl() {
    this.tags = [
        { text: 'Test1' },
        { text: 'Test2' },
        { text: 'Test3' }
    ];
}