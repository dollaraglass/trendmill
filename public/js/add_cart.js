// import {createRow} from './cart.js'

// import * as Math from './cart.js';

//Add to cart

var explore_btn = document.querySelectorAll('.add_cart');

// createrow()

function itemClicked() {
    explore_btn.forEach(elem => {
        elem.addEventListener('click', (e) => {
            let item_id = e.target;
            var item = item_id.parentNode.parentNode;
            let productName = item.querySelector("h4").innerText;
            let productPrice = item.querySelector("h3").innerText;
            let productImg = item.querySelector("img")
            
            let productObject = {
                name : productName,
                price : productPrice,
                img : productImg
            }

            var productJson = JSON.stringify(productObject);
            sessionStorage.setItem('product', productJson);
            console.log(productObject.name);
        })
        
    });
}

itemClicked();
