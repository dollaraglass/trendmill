//Add to cart

var elem = document.querySelector('.btn_3');


function SingleItemClicked() {
        elem.addEventListener('click', (e) => {
            let item_id = e.target;
            let item = item_id.parentNode.parentNode;
            console.log(item);
            let productName = item.querySelector("h3").innerText;
            let productPrice = item.querySelector("h2").innerText;
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
        
}

SingleItemClicked()