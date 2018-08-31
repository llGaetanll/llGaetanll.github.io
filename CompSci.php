<?php
  require 'page.php';

  $title = "Computer Science";

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>

    <?php imports($title, 'comp_sci/style.css'); ?>
    <!-- /styles/style.css -->

  </head>
  <body>

    <?php createTopBar(); //makes the top bar ?>

    <div class="grid">

      <div class="header">
        <h1 class="header-title"><?php echo $title ?></h1>
      </div>

      <div class="content">
        <h1 class="desc-h">Java, C++, Python</h1>
        <div class="c-para">
          <p>

        </p>
        <p>
          ------
          </p>
        </div>

        <div class="c-image"><img src="https://i.imgur.com/MOtvMDW.png" class="CT_circle" alt="Chroma Tilt Logo"></div>

        <div class="c-para-2">


        <p>
          Since there is no resource online to translate RGB computer colors into colors that tha eye can see, we had to get creative.
          We ended up using linear algebra and tranformation matrices to approximate certain types of colorblindness and interpolate
          between each of them to produce a complete algorithm of wavelengths to RGB. This model turns out to work almost perfectly.
          </p>
        </div>

        <div class="c-image-2"><img src="https://i.imgur.com/FIJgTIM.jpg" alt="Chroma Tilt UI" style="position:relative;width:300px;height:auto;"></div>

        <div class="c-para-3">

        <p>
          The user interface is built to be as simple as possible to ensure anybod can use it. The main display, consisting of live input from the camera, and the settings
          menu which allows the user to change the settings on the fly.
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
