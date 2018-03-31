<!doctype html>
<html lang="en">
<?php include("includes/header.php"); ?>
<body>
<!--header-part-start-->
<?php include("includes/nav.php"); ?>
<!--header-part-end-->

<!--banner-part-start-->
<section class="banner_sec">
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"> 
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <figure class="bnr_img"> <img src="images/banner_1.jpg" width="100%" alt="slider1"> </figure>
        <div class="carousel-caption">
          <div class=" col-md-10 col-md-offset-1"> </div>
        </div>
      </div>
      <div class="item">
        <figure class="bnr_img"> <img src="images/banner_2.jpg" width="100%" alt="slider2"> </figure>
        <div class="carousel-caption">
          <div class=" col-md-10 col-md-offset-1">
            <div class="banner_cap"> </div>
          </div>
        </div>
      </div>
      
      <div class="login-form-banner">
    <div class="container">
        <div class="card card-container">
             <div class="user-name"><h3><i class="fa fa-user" aria-hidden="true"></i> <br/> User Login</h3></div>
            <form class="form-signin">
               <div class="form-group">
                <input type="email" class="form-control" placeholder="Email address">
                </div>
                
                <div class="form-group password-icon">
                <input type="password" class="form-control" placeholder="Password">
                </div>
                
                <div class="form-group-forgot">
                  <ul class="forgot-section">
                   <li><a href="#">Forgot Password?</a> </li>
                   <li><a href="#">Create New Acount</a></li>
                   </ul>
                </div>
                <button class="btn btn-block btn-signin" type="submit">LOGIN</button>
            </form><!-- /form -->
            
            <div class="or-login"><h3>or login with</h3></div>
            
            <div class="register-facebook">
              <a href="#">
           		 <span><i class="fa fa-facebook"></i></span> Register With Facebook
        		</a>
            </div>
            
            <div class="register-stylingstudio">
              <a href="#">
           		 <span><img src="images/stylingstudio.png" class="img-responsive"/></span> StylingStudio Sign in
        		</a>
            </div>
            
        </div><!-- /card-container -->
        
    </div><!-- /container -->
  </div>
  
    </div>
    
    
  
  </div>
 
  
  
</section>
<!--banner-part-end-->


<!--footer-part-->
<?php include("includes/footer.php"); ?>

</body>
</html>
