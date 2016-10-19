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
            name : 'Matcha',
            heading:'Heading',  shortdescription:'blblaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            description: 'blblaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            image:'/dist/images/matchaproduct.png',
            quantity:1,
            price:5000,
            gramm:30,
            pricePerItem:0,
            icons:[{
                icon:'fa fa-camera-retro fa-3x',
                text:'hello'
            },{
                icon:'fa fa-camera-retro fa-3x',
                text:'hello2'
            },{
                icon:'fa fa-camera-retro fa-3x',
                text:'hello3'
            },{
                icon:'fa fa-camera-retro fa-3x',
                text:'hello4'
            },{
                icon:'fa fa-camera-retro fa-3x',
                text:'hello5'
            }
            ]
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
