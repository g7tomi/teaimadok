function HeaderController($scope) {
  "ngInject"
  
    $scope.isLoggedIn =false;
    $scope.logout =logout();
    $scope.cartCount = 0;
        
    $scope.$on('updatecartheader', function(event, args) {
        var count = args.add;
        $scope.cartCount = $scope.cartCount + count;
    });
    
    function logout(){
        console.log("TODO logout")
    }
}
export default HeaderController;
