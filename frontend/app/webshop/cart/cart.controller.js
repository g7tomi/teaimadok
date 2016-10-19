function CartController(CartFactory, toastr) {
  "ngInject"
  var vm = this;
    vm.products = CartFactory.getProducts();
    vm.buyProduct = buyProduct;
    vm.addProduct = addProduct;
    vm.subProduct = subProduct;
    vm.removeProduct = removeProduct;
    console.log(vm.products)
    
    function addProduct() {
        updateProduct(vm.products);    
    }
    
    function subProduct() {
        updateProduct(vm.products);
    }
    
    function removeProduct(index) {
        if (index > -1) {
            vm.products.splice(index, 1);
        }
        updateProduct(vm.products);
    }
    
    function updateProduct(products) {

        CartFactory.updateProducts(products);
    }
    
    function buyProduct(){
        CartFactory.buy(vm.products);
    }
    
    function success(response) {
        vm.products = response.data;
    }
    
    function error(error) {
        console.log(error)
    }

}
export default CartController;
