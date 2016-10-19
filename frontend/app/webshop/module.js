import Cart from './cart/module';
import Products from './products/module';
import Home from './home/module';
export default angular.module('myapp.webshop', [
    Cart.name,
    Products.name,
    Home.name
])

