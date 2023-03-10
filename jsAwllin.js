let xhr = new XMLHttpRequest();
let inputDat = [];
xhr.open('GET','https://my-json-server.typicode.com/awlinn/anyTask/products');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
    inputDat = xhr.response;
    console.log(inputDat);          

    let market = document.getElementById("market");

    for (let i = 0; i < inputDat.length; i++){
        
        market.innerHTML += `
        <div class="module">
            <div class="product">
                <h2 id="ProductTitle${i}">*produkt*</h2>            
                    <img class="productImg" id="imgOut${i}"> 
                <div class="description">
                    <p id="Price${i}">Price: </p>
                    <p id="Description${i}">Description: </p>
                    <a href="" id="sellerProfil">seller profil</a>
                    <button id="buttonBuy${i}" data="${i}" onclick="addInBasket(this)">Buy</button>
                </div>  
            </div>
        </div>`
    
        let ProductTitle = document.getElementById(`ProductTitle${i}`);
        let Price = document.getElementById(`Price${i}`);
        let Description = document.getElementById(`Description${i}`);
        let imgOut = document.getElementById(`imgOut${i}`);

        ProductTitle.innerHTML = inputDat[i].name;
        Price.innerHTML += inputDat[i].price + " $";
        Description.innerHTML += inputDat[i].description;
        imgOut.setAttribute("src", inputDat[i].photo_url);

       
    }
    
    
};

let basket = document.getElementById("inBasket");


let priceBasket = 0;
let button = document.getElementById('myButton');
let backgroundBasket = document.getElementById('basketDivId');




let clear = 0;

function addInBasket(odj){
    

    let objId = ghjk(odj.id);
    
    let priceObj = ghjk(document.getElementById(`Price${objId}`).textContent);
    let nameObj = document.getElementById(`ProductTitle${objId}`).textContent;
    let imgObj = document.getElementById(`imgOut${objId}`).src;
    imgСomplet = `<img class="imgBasket" src="${imgObj}">`;
    priceBasket += priceObj;
    console.log(priceBasket);

    if(clear <= 0){
        basket.innerHTML = "";
        basket.innerHTML += `<p> ${imgСomplet}${nameObj}|${priceObj}$</p>`;
        clear ++;
    }else{
        basket.innerHTML += `<p> ${imgСomplet}${nameObj}|${priceObj}$</p>`;
    }



    backgroundBasket.classList.add('blink');
  
  setTimeout(() => {
    backgroundBasket.classList.remove('blink'); 
   
  }, 1000); 


}


function ghjk(obj){
    return(parseInt(obj.match(/\d+/)))
}
let cartBasket = document.getElementById("cartBasket");
cartBasket.style.display = "none";

function openBasket() {
  
  if (cartBasket.style.display === "none") {
    cartBasket.style.display = "block";
  
  } else {
    cartBasket.style.display = "none";
   
  }
}