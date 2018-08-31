<?php


function imports($title, $page) {

?>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
<link rel="stylesheet" href=<?php echo $page; ?>>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>
<title><?php echo $title; ?></title>

<?php

}


function createTopBar(){
  ?>

  <div class="top-bar">
    <div class="logo"><img src="https://i.imgur.com/g2tr87e.png" alt="PRISM" style="width:32px;height:32px;"></div>
    <a href="" class="item item1">Home</a>
    <a href="" class="item item2">Projects</a>
    <a href="" class="item item3">About</a>
    <div class="searchbar">
      <i class="material-icons seach-g">search</i>
      <input type="text" placeholder="Search" style="all: unset; width: 150px; position: relative; right: -40px; top: -24px" />
    </div>

    <div class="searchDot">
      <button class="searchDot">
          <i class="material-icons seach-g" style="float: left; padding-right: 25px;position:relative; top: -1px;">search</i>
        </button>
      <div class="s-search" style="border-bottom: 1px #fff solid; float: left; position: relative;">
        <input id="search-input" placeholder="Search" style="all: unset; float: left; position: relative;"></input>
        <button class="search-close-button" style=" float: left; position: relative;">
            <i class="material-icons">close</i>
          </button>
      </div>
    </div>
  </div>

  <?php

}


 ?>
