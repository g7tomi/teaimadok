/**
 * Created by fogttamas on 23/08/16.
 */
function CartFactory($http, URL_CONFIG, $rootScope, $cookies){
  "ngInject"
    $rootScope.products = [];
  var service = {
      addProduct: addProduct,
      getProducts: getProducts,
      updateProducts: updateProducts,
      buy:buy
  };
  return service;

    function addProduct(product) {
         $rootScope.products.push(product);
    }
    function getProducts() {
        return $rootScope.products;
    }
    
    function updateProducts(products) {
        $rootScope.products = products;
    }
    function buy() {
        if($cookies.get("teaimadok")){
            $rootScope.products.push($cookies.get("teaimadok"));
        }
        console.log($rootScope.products);
        var myproducts ={
            products:$rootScope.products
        }
        $http.post('/api/buy', myproducts);
        
    }
}

export default CartFactory;
