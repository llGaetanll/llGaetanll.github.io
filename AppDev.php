<?php
  require 'page.php';

  $title = "App Development";

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>

    <?php imports($title, 'appdev/style.css'); ?>
    <!-- /styles/style.css -->

  </head>
  <body>

    <?php createTopBar(); //makes the top bar ?>

    <div class="grid">

      <div class="header">
        <h1 class="header-title" style="grid-area: h;"><?php echo $title ?></h1>
      </div>

      <div class="content">
        <h1 class="desc-h" style="grid-area: h;">Chroma Tilt</h1>
        <div class="c-para" style="grid-area: de;">
          <p>
            Chroma Tilt is the name of the app I submitted to the congressional app challenge in late fall of 2017. It's intent is to provid support to those with colorblindness and not have to afford expensive glasses which, at the time of making the app cost upward
            of $250 a pair.
          </p>
          <p>
            The app won and I got to present it in Washington in early 2018 both in front of congress, and some large companies looking to sponsor young developers.
          </p>
        </div>

        <div class="c-image" style="grid-area: i;"><img src="https://i.imgur.com/MOtvMDW.png" class="CT_circle" alt="Chroma Tilt Logo"></div>

        <div class="c-para-2" style="grid-area: de2;">


          <p>
            Since there is no resource online to translate RGB computer colors into colors that tha eye can see, we had to get creative. We ended up using linear algebra and tranformation matrices to approximate certain types of colorblindness and interpolate between
            each of them to produce a complete algorithm of wavelengths to RGB. This model turns out to work almost perfectly.
          </p>
        </div>

        <div class="c-image-2" style="grid-area: im2;"><img src="https://i.imgur.com/1mFBgRE.png" alt="Chroma Tilt UI" style="position:relative;width:300px;height:auto;"></div>

        <div class="c-para-3" style="grid-area: de3;">
          <p>
            The user interface is built to be as simple as possible to ensure anybod can use it. The main display, consisting of live input from the camera, and the settings menu which allows the user to change the settings on the fly.
          </p>
          <p>
            This app was developed over the course of 5 months with the help of some of my friends without which the app would not have been possible.
          </p>
        </div>

        <h1 class="desc-h" style="grid-area: s-h;">Outreach & Media</h1>

        <div class="c-image-3" style="grid-area: im3;"><img src="https://i.imgur.com/b153jKS.jpg" alt="FIU Outreach" style="position:relative;height:200px;width:auto;"></div>

        <div class="c-para-2" style="grid-area:de4">

          <p>
            Our trip to FIU allowed us to connect to PhD candidates
          </p>
          <p>
            Here I learned to express my idea to others in a way that normies can understand.
          </p>
        </div>

        <div class="c-image-3" style="grid-area: im4;"><img src="https://i.imgur.com/PpsXTrH.jpg" alt="FIU Outreach" style="position:relative;height:412px;width:auto;"></div>

        <div class="c-para-2" style="grid-area:de5">

          <p>
            We met with channel 6 for 6 in the mix!
          </p>
          <p>
            This app was developed over the course of 5 months with the help of some of my friends without which the app would not have been possible.
          </p>
        </div>

      </div>
      <div class="footer">
        <div class="creds">Website by Gaetan</div>
      </div>
    </div>

  </body>
</html>
