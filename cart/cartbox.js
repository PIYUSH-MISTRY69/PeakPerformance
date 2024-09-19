document.addEventListener('DOMContentLoaded', function() {

  let cartIcon = document.querySelector('#cart-img'); 
  let cart = document.querySelector('.cart-box');
  let closeCart = document.querySelector('#close-btn');

  cartIcon.onclick = () => {
    cart.classList.add('active');
  };

  closeCart.onclick = () => {
    cart.classList.remove('active');
  };



  if (document.readyState == 'loading' ){
    document.addEventListener('DOMContentLoaded',ready);
  }else{
    ready();
  }


  function ready()
  {
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for(var i=0;i<removeCartButtons.length;i++){
      var button = removeCartButtons[i];
      button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i=0;i<quantityInputs.length;i++){
      var input = quantityInputs[i];
      input.addEventListener('change',quantityChanged);
    }


    var addCart = document.getElementsByClassName('addcartbutton');
    for(var i=0;i<addCart.length;i++)
    {
      var button = addCart[i];
      button.addEventListener('click',addCartClicked);
    }


    var buyButton = document.querySelector('.buy-btn'); 
    buyButton.addEventListener('click', buyButtonClicked);


    var applyCouponButton = document.getElementById('apply-coupon');
        applyCouponButton.addEventListener('click', function() {
          updatetotal();
      });


    loadCartItems();
  }


  function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
    saveCartItems();
  }


  function quantityChanged(event){
    var input=event.target;
    if(isNaN(input.value) || input.value <= 0){
      input.value = 1;
    }
    updatetotal();
    saveCartItems();
    updateCartIcon();
  }


  function addCartClicked(event){
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName('product-name')[0].innerText;
    var price = shopProduct.getElementsByClassName('product-price')[0].innerText;
    var productImg = shopProduct.getElementsByClassName('product-img')[0].src;

    addProductToCart(title, price, productImg);
    updatetotal();
    updateCartIcon();
  }

  function addProductToCart(title, price, productImg){
    var cartShopBox= document.createElement('div')
    cartShopBox.classList.add('cartbox')
    var cartItems = document.getElementsByClassName('cart_content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('prod-title')
    for(var i=0;i<cartItemsNames.length;i++){
      if(cartItemsNames[i].innerText == title){
      alert('You have already added this to cart')
      return;
      }
    }

  var cartBoxContent = `
                  <img src='${productImg}' class='cart-prod-img'>
                  <div class='prod-detail'>
                    <div class='prod-title' style="font-size:25px" >${title}</div>
                    <div style="display:flex;height : 30px;">
                    <div class='cart-price' style="font-size:20px;">${price}₹</div>                      
                    <input type='number' value='1' class='cart-quantity'> 
                    </div>                    
                  </div>
                  <i class='fa-solid fa-trash cart-remove' style='color: #ffffff;display: flex;justify-content: center;align-items: center;font-size: 35px;margin-top:15px;'></i>
                `;
  cartShopBox.innerHTML = cartBoxContent
  cartItems.append(cartShopBox)
  cartShopBox.getElementsByClassName('cart-remove')[0]
    .addEventListener('click',removeCartItem)
  cartShopBox.getElementsByClassName('cart-quantity')[0]
    .addEventListener('change',quantityChanged)
    
    updatetotal();
    saveCartItems();
    updateCartIcon();
  }



  function buyButtonClicked() {
  
    if (confirm("Are you sure you want to purchase these items?")) {
    
      var cartContent = document.getElementsByClassName('cart_content')[0];
      while (cartContent.firstChild) {
        cartContent.removeChild(cartContent.firstChild);
      }
  
       
 
      var totalElement = document.querySelector('.total-price');
      totalElement.textContent = '₹0';
      localStorage.removeItem('cartTotal');
  
     
      alert("Your purchase is successful!");
    }
    
  }



  function updatetotal(){
    var cartContent = document.getElementsByClassName('cart_content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cartbox');
    var total=0;
    for(var i=0;i<cartBoxes.length;i++)
    {
      var cartBox = cartBoxes[i]
      var priceElement = cartBox.getElementsByClassName('cart-price')[0];
      var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
      var price = parseFloat(priceElement.innerText.replace('₹' , ''));
      var quantity= quantityElement.value; 
      total += price * quantity;
    }


     
  var couponCodeInput = document.getElementById('coupon-code');
  var couponCode = couponCodeInput.value.toUpperCase();

  
  var discount = 0;
  if (couponCode === 'PEAK5') {
    discount = 0.05; 
  } else if (couponCode === 'PEAK10') {
    discount = 0.1; 
  } else if (couponCode === 'PEAK15') {
    discount = 0.15;  
  } else if (couponCode === 'PEAK20') {
    discount = 0.2; 
  } else if (couponCode === 'PEAK25') {
    discount = 0.25;  
  }

  
  var discountedTotal = total - (total * discount);

    document.getElementsByClassName('total-price')[0].innerText = '₹' + discountedTotal;
    total = Math.round(total *100) / 100;
    localStorage.setItem('cartTotal', discountedTotal);
}
    
function saveCartItems(){
  console.log('saved')
  var cartContent = document.getElementsByClassName('cart_content')[0];
  console.log(cartContent)
  var cartBoxes = cartContent.getElementsByClassName('cartbox');
  console.log(cartBoxes)
  cartItems = [];
  for (var i=0; i<cartBoxes.length; i++){
      console.log('suii')
      cartBox = cartBoxes[i];
      var titleElement = cartBox.getElementsByClassName('product-title')[0];
      var priceElement = cart.getElementsByClassName('cart-price')[0];
      var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
      var productImg = cartBox.getElementsByClassName('cart-prod-img')[0].src;



      var item = {
          title: titleElement.innerText,
          price: priceElement.innerText,
          quantity: quantityElement.value,
          productImg: productImg,
      };
      cartItems.push(item);
      console.log(cartItems)
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  console.log(localStorage.getItem('cartItems'))
}
function loadCartItems() {
  var cartItems = localStorage.getItem('cartItems');
  if(cartItems != null) {
      console.log('omo')
      cartItems = JSON.parse(cartItems);
      for(var i= 0; i< cartItems.length; i++){
          addProductToCart(cartItems[i].title, cartItems[i].price, cartItems[i].productImg);
          var cartBoxes = document.getElementsByClassName('cartbox');
          var cartBox = cartBoxes[cartBoxes.length - 1];
          var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
          quantityElement.value = cartItems[i].quantity;
      }
  }
  var cartTotal = localStorage.getItem('cartTotal');
  if (cartTotal) {
      console.log('omo2')
      document.getElementsByClassName('total-price')[0].innerText = '₹' + cartTotal;        
  }
  updateCartIcon();

}

function updateCartIcon(){
  var cartBoxes = document.getElementsByClassName('cartbox');
  var quantity = 0;

  for(var i=0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
      quantity += parseInt(quantityElement.value);
  }
  var cartIcon = document.querySelector('#cart-img');
  cartIcon.setAttribute('data-quantity', quantity);
}





});