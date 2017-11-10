/* Controller */

yourFace.controller('loginCtrl', function($scope, $http) {
	$scope.cadastra = function(){
		var data = {"nome": $scope.user,"paswd":$scope.password}
			
			$http({
				method: 'POST', 
				url: '/user/cadastra', 
				data: data,
				headers: {
					'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
				}
				}).then(function(response) {
					$scope.ererere = response.data;
					console.log(response.status);
				}
			);
		}

		$http({
			method: 'GET', 
			url: '/user',
			headers: {
				'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
			}
			}).then(function(response) {
				$scope.User =response.data;
			},function(response) {
				$scope.data = response.data || 'Request failed';
				$scope.status = response.status;
			
		});


	});