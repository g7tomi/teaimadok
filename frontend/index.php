<html>
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Angular trainging">
        <meta name="author" content="tamafogt">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
        

		<link rel="stylesheet" href="dist/css/app.css">


        <base href="/">    
    </head>
    <body ng-app="myapp" >
        <div id="mypreloaderbackground" class="">
        <div  class="section_overlay" ng-controller="HeaderController" >
            <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                            <i class="fa fa-bars fa-2x"></i>
                        </button>
                        <a class="navbar-brand" href="/">
                            LOGO
                           <!-- <img src="images/logo.png" alt="Logo">-->
                        </a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            
                            
                        <li class="navicons hidden-xs" style="display:flex">
                            <a href="https://www.facebook.com/csucsteljesitmeny.hu"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></a>
                            <a href="https://www.youtube.com/channel/UC9iwRIpBqrsnFD7Wk7YiUpA"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-youtube fa-stack-1x fa-inverse"></i></a>
                            <a  href="https://www.instagram.com/csucsteljesitmeny.hu/"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></a>
                        </li>

                          <li><a href="#"  ui-sref="products">Termékek</a></li>
						  <li><a href="#" style="padding-bottom: 5px;padding-top: 12px;" ui-sref="cart"><i class="fa fa-shopping-cart  fa-2x hidden-xs" aria-hidden="true"></i><span class="visible-xs">Kosár</span></a></li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container- -->
            </nav>
        </div>  
		<ui-view></ui-view>
    <section class="subscribe parallax subscribe-parallax" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
        <div class="section_overlay wow lightSpeedIn">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">

                        <!-- Start Subscribe Section Title -->
                        <div class="section_title">
                            <h2>Kérdésed van?</h2>
                            <p>Írj bátran, minden kérdésre örömmel válaszolunk.</p>
                        </div>
                        <!-- End Subscribe Section Title -->
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <!-- SUBSCRIPTION SUCCESSFUL OR ERROR MESSAGES -->
                        <div class="subscription-success"></div>
                        <div class="subscription-error"></div>


                        <form class="subscribe_form" novalidate>
                            <div class="form-group">
                                <input type="text" class="required form-control"  name="name" id="name"  placeholder="Név" required/>
                            </div>
                            <div class="form-group">
                                <!-- EMAIL INPUT BOX -->
                                <input type="email" value="" name="EMAIL" class="required email form-control"  placeholder="Írd be az Email címed" required>
                            </div>
                            <div class="input-field ">
                                <textarea name="message" class="form-control" rows="10" cols="10" id="message"   placeholder="Üzenet" required></textarea>
                            </div>
                                <!-- SUBSCRIBE BUTTON -->
                            <button id="submit"  class="btn">Elküld</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    </section>


<!-- =========================
     FOOTER 
============================== -->

    <section class="copyright">
        <h2></h2>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="copy_right_text">
                    <!-- COPYRIGHT TEXT -->
                        <p>Copyright TeaImadok.hu 2016.</p> 
                        <p>Minden jog fent tartva.</p>        
                    </div> 
                </div>
                <div class="col-md-6">
                    <h1>Kövess minket</h1>
                    <ul class="list-inline lead">
                        <li><a href="https://www.facebook.com/csucsteljesitmeny.hu"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                        <li><a href="https://www.youtube.com/channel/UC9iwRIpBqrsnFD7Wk7YiUpA"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-youtube fa-stack-1x fa-inverse"></i></span></a></li>
                        <li><a href="https://www.instagram.com/csucsteljesitmeny.hu/"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        </div>
        <div id="preloader" class="preloader-wrapper big active mypreloader mypreloaderNone">
              <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                  <div class="circle" style="border-width: 10px;"></div>
                </div><div class="gap-patch">
                  <div class="circle" style="border-width: 10px;"></div>
                </div><div class="circle-clipper right">
                  <div class="circle" style="border-width: 10px;"></div>
                </div>
              </div>
        </div>        
            
        <script src="dist/lib/angularlib.min.js"></script> 
                <script src="dist/app.min.js"></script>    
		<script src="dist/lib.min.js"></script>

    
    </body>
</html>
