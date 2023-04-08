




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
                    <button id="buttonBuy${i}"  onclick="addInBasket(this)">Buy</button>
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

let databaseArray = [];

let priceBasket = 0;
let button = document.getElementById('myButton');
let backgroundBasket = document.getElementById('basketDivId');
let clear = false;

function addInBasket(odj){            ////////////function addInBasket
  
  
  let objId = ghjk(odj.id);
  
    let priceObj = ghjk(document.getElementById(`Price${objId}`).textContent);
    let nameObj = document.getElementById(`ProductTitle${objId}`).textContent;
    let imgObj = document.getElementById(`imgOut${objId}`).src;
    imgComplet = `<img class="imgBasket" src="${imgObj}">`;

    priceBasket += priceObj;
    
    

    let databaseObj = {
      price : priceObj,
      name: nameObj,
      img: imgObj
    } ;

    databaseArray.push(databaseObj);
   

    console.log(priceBasket);
    console.log(databaseArray);


    function updateDiv() {
      nameElement.innerText = databaseObj.name;
      imgElement.src = databaseObj.img;
      priceElement.innerText = "praice: " + databaseObj.price + " $";
    }

    if(clear == false){
        basket.innerHTML = "";
        basket.innerHTML += `<p> ${imgComplet}${nameObj}|${priceObj}$</p>`;
        basket.innerHTML += `<button class="buttonBuy" id="buttonBuyID">go to buy</button>`;
        clear = true;
    }else{
        basket.innerHTML += `<p> ${imgComplet}${nameObj}|${priceObj}$</p>`;
        basket.innerHTML += `<button class="buttonBuy" id="buttonBuyID">go to buy</button>`;
    }

    backgroundBasket.classList.add('blink');
  setTimeout(() => {
    backgroundBasket.classList.remove('blink'); 
  }, 1000); 


  openBuyMenu();
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
  function openBuyMenu(){

    const popup = document.querySelector('.popup');
		const overlay = document.querySelector('.overlay');
		const popupBtn = document.getElementById('buttonBuyID');   
		
   
		popupBtn.addEventListener('click', () => {
			popup.style.display = 'block';
			overlay.style.display = 'block';
		});

		overlay.addEventListener('click', () => {
			popup.style.display = 'none';
			overlay.style.display = 'none';
      if (cartBasket.style.display === "none") {
        cartBasket.style.display = "block";
      
      } else {
        cartBasket.style.display = "none";
       
      }
		});
    
  }
  const nameInput = document.getElementById("name").value;
  const addressInput = document.getElementById("address").value;
  const phoneInput = document.getElementById("phone").value;
  const postNumberInput = document.getElementById("post_number").value;


  const sendDataBtn = document.getElementById("sendData");
  console.log(sendDataBtn);
    sendDataBtn.addEventListener('click', function(e){
      let data = JSON.stringify({
        "name": nameInput,
        "address":addressInput,
        "phone":phoneInput,
        "post_number":postNumberInput,
        "status":"new",
        "products":databaseArray
      });
      console.log(data);
  });
  


/*

// Объект с данными
let databaseObj = {
  price: "1000",
  name: "Товар 1",
  img: "https://via.placeholder.com/150"
};

// Получаем элементы, в которые будут вставляться данные
let nameElement = document.getElementById("name");
let imgElement = document.getElementById("img");
let priceElement = document.getElementById("price");

// Функция для обновления дива с данными
function updateDiv() {
  nameElement.innerText = databaseObj.name;
  imgElement.src = databaseObj.img;
  priceElement.innerText = "Цена: " + databaseObj.price + " $.";
}

// Обработчик клика на кнопке
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  // Обновляем объект с данными (например, получаем данные с сервера)
  databaseObj = {
    price: "2000",
    name: "Товар 2",
    img: "https://via.placeholder.com/250"
  };
  
  // Обновляем див с данными
  updateDiv();
});

// Обновляем див с данными при загрузке страницы
updateDiv();*/