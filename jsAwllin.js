let xhr = new XMLHttpRequest();
let inputDat = [];
xhr.open('GET','https://my-json-server.typicode.com/awlinn/anyTask/products');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
    inputDat = xhr.response;
    console.log(inputDat);          

    let market = document.getElementById("market");

    for (let i = 0; i < 5; i++){
        
        market.innerHTML += `
        <div class="module">
            <div class="product">
                <h2 id="ProductTitle${i}">*produkt*</h2>            
                    <img class="productImg" id="imgOut${i}"> 
                <div class="description">
                    <p id="Price${i}">Price: </p>
                    <p id="Description${i}">Description: </p>
                    <p id="sellerProfil${i}">seller profil</p>
                    <button id="buttonBuy${i}" data="${i}" onclick="addInBasket()">Buy</button>
                </div>  
            </div>
        </div>`
    
        let ProductTitle = document.getElementById(`ProductTitle${i}`);
        let Price = document.getElementById(`Price${i}`);
        let Description = document.getElementById(`Description${i}`);
        let imgOut = document.getElementById(`imgOut${i}`);

        ProductTitle.innerHTML = inputDat[i].name;
        Price.innerHTML += inputDat[i].price;
        Description.innerHTML += inputDat[i].description;
        imgOut.setAttribute("src", inputDat[i].photo_url);

       
    }
    
    
};

function addInBasket(){
    console.log(inputDat.id);           
}
