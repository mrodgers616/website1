<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Inventory</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body bgcolor = "#e3e1df">
    <h1><center> The Shoe Shop </center></h1>
    <br>
    <br>
    <h2><center> Browse The Shoes Below </center></h2>
    <div id = "container">
    <div id="tabs">
      <div id = "checkout" class = "tab">Checkout</div>
      <div id = "shopping" class = "tab active">Order</div>
      <br style="clear: both;">
    </div>
      <div id="content">
        <div id="content1" class="content">
            
            
          <div id = "small">
            <h2>Gucci White Snake Ace Sneakers</h2>
            <center> <img src = "guccisneakers.png" height="200px" width="200px"></center>
            <p>Price: $720</p>
              <br>
            <p>Stock: 50</p>
            <br style="clear: both;">
            <select name="gucci" id="gucci">
                <option value ="invalid" selected="selected">Select How Many You Want</option>
                <option value="1">1</option>
            </select>
            <button id = "guccibutton" data-type = "gucci" data-price = "720"> Add to cart</button>
          </div>


          <div id ="medium">
            <center> <h2> Nike MAG Back To the Future (2016) </h2></center>
            <center><img src = "airmags.png" height="200px" width="200px"></center>
            <p>Price: $18,000</p>
              <br>
            <p>Stock: 3</p>
            <br style="clear: both;">
            <select name="airmag" id="airmag">
                <option value = "invalid" selected="selected">Select How Many You Want</option>
                <option value="1">1</option>
            </select>
            <button id = "airmagbutton" data-type = "airmag" data-price = "18000"> Add to cart</button>
          </div>


          <div id = "large">
            <h2>Adidas Yeezy Boost 350 V2 Black Red</h2>
            <center><img src = "yeezy.png"  height="200px" width="200px"></center>
            <p>Price: $1,100</p>
              <br>
            <p>Stock: 15</p>
            <br style="clear: both;">
            <select name="bred" id="bred">
                <option value = "invalid" selected="selected">Select How Many You Want</option>
                <option value="1">1</option>
            </select>
            <button id = "bredbutton" data-type="bred" data-price = "1100"> Add to cart</button>
          </div>
            
            
          <div id = "large">
            <h2>LOUIS VUITTON JASPERS "KANYE WEST" </h2>
            <center><img src = "soldout.jpg"  height="200px" width="200px"></center>
            <p>Price: SOLD OUT</p>
              <br>
            <p>Stock: SOLD OUT</p>
            <br style="clear: both;">
            <select name="lv" id="lv">
                <option value = "invalid" selected="selected">Select How Many You Want</option>
            </select>
          </div>
            
            
        
        </div>
        <div id="content2" class="content hidden">
            <p id = "price">Price: 0</p>
            
            
            <form action="email.php" method="POST">
                <input type="submit" name="checkout" value="checkout" />
            </form>
    
        </div>
      </div>
    </div>
    <script src="inventory.js"></script>
  </body>
</html>