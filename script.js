var app = 
angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: ['$scope', function($scope){
					$scope.title = "Home";
					$scope.items = ['Home', 'About', 'Contact'];
					$scope.selectedValue = 'Home';

					$scope.save = function(){
						alert($scope.items);
					}
				}]
			})
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: ['$scope', function($scope){
					$scope.title = "About";
					$scope.items = ['item1', 'item2', 'item3'];

					$scope.$watch('birthday', function () {
						console.log('birthday')
					});

					
					$scope.firstName = "John";
    				$scope.lastName = "Doe";
   				    $scope.fullName = function() {
       			    	return $scope.firstName + " " + $scope.lastName;
					};

				}]
			})
	}])
	app.controller('calculate', calculate);

		function calculate(){
			this.result = 0;
			this.buttonSelected = function(button){
				this.Selected = button;
			}
			this.completeResult = function(){
				var number1 = parseFloat(this.input1);
				var number2 = parseFloat(this.input2);
				
				if(this.Selected === '+'){
					this.result = number1 + number2;
				}
				else if(this.Selected === '-'){
					this.result = number1 - number2;
				}
				else if(this.Selected === '*'){
					this.result = number1 * number2;
				}
				else if(this.Selected === '/'){
					this.result = number1 / number2;
				}
			}
		}
	





