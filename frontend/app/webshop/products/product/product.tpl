<div class="product">
    <div class="container">
        <h1 class="title">{{vm.product.name}}</h1>
        <div class="row">
            <div class="col-md-6 col-xs-12 ">
                <img src="{{vm.product.image}}" class="product-image" alt="product"/>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="row">
                    <h2 class="heading">{{vm.product.heading}}</h2>
                    <p class="description">{{vm.product.description}}</p>
                </div> 
                
                <div class="pricebox center-block">
                    <div class="row">
                        <h2>Ár: <span>{{vm.product.price}}Ft</span></h2>
                        <p>{{vm.product.gramm}} grammos kiszerelésből {{vm.product.gramm}} csésze tea készthető</p>
                        <h2 ng-init="vm.getPricePerItem()">{{vm.product.pricePerItem}}Ft/adag</h2>
                        <p>A házhoz szállítás <b>INGYENES!</b></p>
                    </div>
                    <div class="row">
                        <button ng-init="vm.product.quantity" class="btn orange lighten-2" ng-click="vm.product.quantity>1 &&  (vm.product.quantity = vm.product.quantity-1)">-</button>
                                {{vm.product.quantity}}
                        <button class="btn orange lighten-2" ng-click="vm.product.quantity<10 &&  (vm.product.quantity = vm.product.quantity+1)">+</button>
                        <button class="btn-large green" ng-click="vm.buy()">Hozáadás<i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></button>
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-6 icons" ng-repeat="icon in vm.product.icons">
                        <div class="col-xs-6 text">
                            {{icon.text}}
                        </div>
                        <div class="col-xs-6  icon">
                            <i ng-class="icon.icon" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    