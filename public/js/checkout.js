
var form1 = document.getElementById('form1');
var btn = document.getElementById('pay_button');
var first_elem = document.getElementById('first');
var last_elem = document.getElementById('last');
var card_elem = document.getElementById('card');
var expires_elem = document.getElementById('Expires');
var csc_elem = document.getElementById('CSC');

//billing
var first1_elem = document.getElementById('first1');
var last1_elem = document.getElementById('last1');
var number_elem = document.getElementById('number');
var email_elem = document.getElementById('email');
var adi1_elem = document.getElementById('add1');
var adi2_elem = document.getElementById('add2');
var city_elem = document.getElementById('city');

btn.addEventListener('click', () => {
  const first = first_elem.value;
  const last = last_elem.value;
  const card = card_elem.value;
  const expires = expires_elem.value;
  const csc = csc_elem.value;

  //billing
  const first1 = first1_elem.value;
  const last1 = last1_elem.value;
  const number = number_elem.value;
  const email = email_elem.value;
  const addi1 = adi1_elem.value;
  const addi2 = adi2_elem.value;
  const city = city_elem.value;
  

  

  const billing = {
        firstName: first1,
        lastName: last1,
        firstName: number,
        lastName: email,
        firstName: addi1,
        lastName: addi2,
        firstName: city,
        
  };

  const person = {
        firstName: first,
        lastName: last,
        card: card,
        expires: expires,
        csc: csc
        
        
  };

  console.log(billing,person);

})




function yourOder(title,price) {
    var prntElm = document.querySelector('.list')
    var list = document.createElement('li');

    var tag = document.createElement('a');
    tag.setAttribute('href','#');
    var text = document.createTextNode(title);
    tag.appendChild(text);

    var sp = document.createElement('span');
    sp.setAttribute('class','middle');
    var amount = document.createTextNode('x '+'01');
    sp.appendChild(amount);

    var sp1 = document.createElement('span');
    sp1.setAttribute('class','last');
    var amount1 = document.createTextNode(price);
    sp1.appendChild(amount1);

    tag.appendChild(sp);
    tag.appendChild(sp1)
    list.appendChild(tag);

    prntElm.appendChild(list)

    

}

let data = sessionStorage.getItem('product');
var cartObj = JSON.parse( data );
console.log(cartObj.name)

var title = cartObj.name;
var price = cartObj.price;

yourOder(title,price)


