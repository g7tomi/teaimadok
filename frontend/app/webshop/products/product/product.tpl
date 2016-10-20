<div class="product">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="row">
                    <img src="{{vm.product.image}}" class="col-md-12 col-sm-12 col-xs-12 product-image" alt="product"/>
                </div>

            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 center-block">
                <div class="center-block">
                    <div class="row">
                        <h3 class="heading">{{vm.product.heading}}</h3>
                    </div> 
                    <div class="row">
                        <p class="description">{{vm.product.description}}</p>
                    </div>
                    <hr/>

                </div>
                <div class="pricebox center-block">
                    <div class="row ">
                         <h2 ng-init="vm.getPricePerItem()" class="price"><b>Akár {{vm.product.pricePerItem}}Ft/csésze!</b></h2>
                        <div class="center-text">{{vm.product.gramm}} grammos kiszerelésből {{vm.product.gramm}} csésze tea készthető</div>                
                    </div>
                    <hr/>

                    <div class="quantity">
                        <p class="productprice"><b>{{vm.product.price}}Ft/db</b> </p>
                        <p><b>Kiszerelés: {{vm.product.gramm}}g</b></p>

                        <button ng-init="vm.product.quantity" class="btn orange lighten-2" ng-click="vm.product.quantity>1 &&  (vm.product.quantity = vm.product.quantity-1)">-</button>
                               {{vm.product.quantity}}
                        <button class="btn orange lighten-2" ng-click="vm.product.quantity<10 &&  (vm.product.quantity = vm.product.quantity+1)">+</button>  
                    </div>
                    <div class="row">                        
                        <button class="btn-large green col-sm-12 col-xs-12 col-md-12" ng-click="vm.buy()">Megveszem<i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></button> 
                        <div class="center-text">A házhoz szállítás <b>INGYENES!</b></div>
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