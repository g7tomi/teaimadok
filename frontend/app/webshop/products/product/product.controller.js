function ProductController(CartFactory, $stateParams, $state,toastr) {
  "ngInject"
  var vm = this;
    vm.product = {};
    vm.addOne = addOne;
    vm.subOne = subOne;
    vm.buy = buy;
    vm.getPricePerItem = getPricePerItem;
    if($stateParams.productId == 'matcha'){
        vm.product = {
            name : 'Matcha tea',
            heading:'Matcha tea',
            shortdescription:'Csatlakozz a legújabb egészség őrülethez. A Matcha tea most Magyarországra is megérkezett.',
            description: 'A legújabb egészség őrület Nyugaton már tombol és most végre Magyarországra is megérkezett! Ez a mozgalom egy egy őrölt zöld tea formájában jelent meg, amelyet Matcha-nak hívnak. A Matcha egy japán őrölt tea por, amelynek majdnem végtelen egészségügyi előnye van.',
            image:'/dist/images/matchaproduct.png',
            quantity:1,
            price:5000,
            gramm:30,
            pricePerItem:0
        }
        
    }else {
        $state.go('errors',[{error:'404'}]);
    }
    function getPricePerItem(){
        vm.product.pricePerItem = Math.round(vm.product.price/vm.product.gramm);
    }
    function addOne() {
        vm.product.quantity= vm.product.quantity+1;
    }
    
    
    function subOne() {
        vm.product.quantity= vm.product.quantity-1;
    }
    
    function buy() {
        let product = angular.copy(vm.product);
          toastr.success('Hozzáadva', 'Hozzáadtuk a kosár tartalmához!');
        CartFactory.addProduct(product);
    }
}
export default ProductController;
