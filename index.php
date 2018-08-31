<?php
  require 'page.php';

  $title = "Home";

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
        <div class="logo lHeader"><img class="logo lHeader" src="https://i.imgur.com/4OcYjVl.png" alt="PRISM"></div>
        <h1 class="header-title">Welcome</h1>
        <p class="header-para">A collection of projects.</p>
      </div>

      <div class="content">
        <h1 class="desc-h">My name's Gaetan</h1>
        <p class="c-para">
          I've been interested in engineering and problem solving as long as I can remember. On this website you'll find a few of the projects and skills I'm most proud of.
        </p>
      </div>

      <div class="projects">
        <div class="block-container">
          <div class="project project-1">
            <a href=""></a>
            <div class="p-info">
              <h1>Computer Science</h1>
              <p title="I love it">010010010010000001101100011011110111011001100101001000000110100101110100</p>
            </div>
            <img class="p-waterm" src="https://i.imgur.com/g2tr87e.png" alt="PRISM">
          </div>
          <div class="project project-2 bg-acc">
            <a href=""></a>
            <div class="p-info">
              <h1>Machine Learning</h1>
              <p>How AI became my favorite Computer Science field</p>
            </div>
            <img class="p-waterm" src="https://i.imgur.com/g2tr87e.png" alt="PRISM">
          </div>
          <div class="project project-3">
            <a href=""></a>
            <div class="p-info">
              <h1>Web Developement and Design</h1>
              <p>How I learned to design websites on my own from scratch, including this one</p>
            </div>
            <img class="p-waterm" src="https://i.imgur.com/g2tr87e.png" alt="PRISM">
          </div>
          <div class="project project-4">
            <a href="C:\Users\Gaetan\Dropbox\Programming\test-website\appdev\index.html"></a>
            <div class="p-info">
              <h1>App Development</h1>
              <p>How I won the Congressional App Challenge of 2017</p>
            </div>
            <img class="p-waterm" src="https://i.imgur.com/g2tr87e.png" alt="PRISM">
          </div>
          <div class="project project-5">
            <a href=""></a>
            <div class="p-info">
              <h1>Engineering</h1>
              <p>My participation in competitions such as VEX and FRC</p>
            </div>
            <img class="p-waterm" src="https://i.imgur.com/g2tr87e.png" alt="PRISM">
          </div>
          <div class="project project-6">
            <a href=""></a>
            <div class="p-info">
              <h1>Speedsolving</h1>
              <p>Solving Rubik's Cubes as fast as I can</p>
            </div>
            <img class="p-waterm" src="https://i.imgur.com/g2tr87e.png" alt="PRISM">
          </div>
        </div>
      </div>

      <div class="footer">

      </div>
    </div>


  </body>
</html>
