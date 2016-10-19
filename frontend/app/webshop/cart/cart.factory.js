/**
 * Created by fogttamas on 23/08/16.
 */
function CartFactory($http, URL_CONFIG, $rootScope){
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
        console.log($rootScope.products);
    }
}

export default CartFactory;
