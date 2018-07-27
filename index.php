<!doctype html>
<html lang="en">
<?php include("includes/header.php"); ?>
<body class="homebg wsfvisible wsfanimated">

<!-- Preloader -->

<div id="pre-loader">
  <div class="loader-holder">
    <div class="frame"> <img src="images/loder_logo.png" alt="Loader..."> </div>
  </div>
</div>

<!--header-part-start-->
<?php include("includes/nav.php"); ?>
<!--header-part-end-->

 <div class="bg">
    <div id="wsftoggleopen"><span></span></div>
    <div id="wsftoggleclose"><span></span></div>
    <div class="wsfullmain clearfix">
      <ul class="wsnavitem clearfix">
        <li>
          <a href="#" class="wsfinnerdiv wsfpartbg01">
            <div class="wsfboxinner"><strong>Shop</strong>
              <!--<div class="wsfreadmore">Read More</div>-->
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="wsfinnerdiv wsfpartbg02">
            <div class="wsfboxinner"><strong>Diensten</strong>
              <!--<div class="wsfreadmore">Read More</div>-->
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="wsfinnerdiv wsfpartbg03">
            <div class="wsfboxinner"><strong>Instructies</strong>
              <!--<div class="wsfreadmore">Read More</div>-->
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="wsfinnerdiv wsfpartbg04">
            <div class="wsfboxinner"><strong>Contact</strong> 
             <!-- <div class="wsfreadmore">Read More</div>-->
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>


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
          <div class="col-md-10 col-md-offset-1">
            <div class="banner_cap"> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--banner-part-end-->


<!--footer-part-->
<?php include("includes/footer_home.php"); ?>

</body>
</html>
