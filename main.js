// var subNav = document.querySelector('.items__items');

// //subNav.classList.toggle('display');
// setInterval(() => {
//   subNav.classList.toggle('display');
// }, 1000);
// //var getValue;
// var getElement = document.querySelector('.input__text');
// getElement.oninput = function (e) {
//   console.log(e.target.value);
// };

// var aLinksCheck = document.links;
// var aboutLength = aLinksCheck.length;
// for (var i = 0; i < aboutLength; i++) {
//   aLinksCheck[i].onclick = function (e) {
//     if (!e.target.href.startsWith('https://google.com')) {
//       e.preventDefault();
//     }
//   };
// }
// //stopPropagation(): NGĂN CHẶN SỰ KIỆN NỔI BỌT
// var aChecks = document.querySelector('.items__signin');
// function viec1() {
//   console.log('addEvent');
// }
// aChecks.addEventListener('click', viec1);

/** JSON: là 1 định dạng dữ liệu ( chuỗi ) ( Javascripts Object Notation)
 * JSON thể hiện các kiểu dữ liệu sau: Number, Null, Object, Array, Boolean
 */
//Example
//Định dạng dữ liệu dưới là số
//var json = '1'
//Định dạng dữ liệu là boolean
//var json = 'true' || var json = 'false'
//Định dạng dữ liệu là Object
//var json = '{"name":"Bi", "age": 1}'
//Định dạng dữ liệu là array
//var json = '["Javascripts", "CSS", "MySQL"]';
/**
 * Stringyfy : Chuyển dữ liệu từ JS > JSON
 * Example :
 * console.log(json.stringyfy(1)) // > 1
 * console.log(json.stringyfy(abc)) // > 'abc'
 * console.log(json.stringyfy(["JS", "PHP"])) // > ['"JS","PHP"']
 * console.log(json.stringyfy({name: "Quy", age: 18})) // > {'"name":"Quy", "age":18'}
 * parse: chuyển dữ liệu từ JSON > JS
 * Example
 * var json = '1'
 * console.log(JSON.parse(json)) > 1
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
document.get;

// call
const authBtn = $('.js-auth-btn');
const modalFormAuth = $('.js-modal');
const authFormOverleyAuth = $('.js-modal-overley');
const backBtnAuth = $('.btn-back');
const switchAuthModalBtn = $('.auth-form__switch');
const loginForm = $('.auth-form');
const registerForm = $('.modal-register');
const creatAccount = $('.js-creat-account');
const dataPost = 'http://localhost:3000/products';
const productsShow = $('.item-products');
const touchIconLove = $('.handle-product');
var month = 2;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log('31 ngày');
//     break;
//   case 2:
//     // Coi như năm nay là năm nhuận
//     console.log('Tháng có 29 ngày');
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log('Tháng có 30 ngày');
//     break;
// }
//check
console.log();
// func
function openModalAuth() {
  modalFormAuth.classList.add('active');
}

function closeModalAuth() {
  modalFormAuth.classList.remove('active');
}

function switchAuthModal() {
  if ((loginForm.style.display = 'none')) {
    registerForm.classList.add('active');
  }
}

// excute
authBtn.addEventListener('click', openModalAuth); // click login to open modal

authFormOverleyAuth.addEventListener('click', closeModalAuth); // click overley to close modal

backBtnAuth.addEventListener('click', closeModalAuth); // click back button to close modal

switchAuthModalBtn.addEventListener('click', switchAuthModal);

creatAccount.addEventListener('click', switchAuthModal);

// Fecth data
fetch(dataPost)
  .then(function (respond) {
    return respond.json();
  })
  .then(function (data) {
    let dataPushTop = '';
    let dataPushBottom = '';
    let dataPushAccessary = '';

    data.map(function (values, index) {
      if (values.slug === 'bamboo-top') {
        dataPushTop += `
          <div class="col l-3 m-6 c-6">
                <div class="item-products">
                 <div class="infor">
                    <div class="item-background" style="background-image: url(${
                      values.image
                    })"></div>
                    <div class="infor-products">
                    <p class="item-category">${values.category}</p>
                    <h4 class="item-name">${values.name}</h4>
                    <div class="item-price">
                      <span class="item-price-current">${values.price}$</span>
                      <br/>
                      <span class="item-price-old">${values.price * 2}$</span>
                    </div>
                    </div>
                    <button class="btn2 buy-btn"><span>${
                      values.handle
                    }</span></button>
                    </div>
                    </div>
                </div>
      `;
      }
      if (values.slug === 'bamboo-bottom') {
        dataPushBottom += `
          <div class="col l-3 m-6 c-6">
                <div class="item-products">
                 <div class="infor">
                    <div class="item-background" style="background-image: url(${
                      values.image
                    })"></div>
                    <div class="infor-products">
                    <p class="item-category">${values.category}</p>
                    <h4 class="item-name">${values.name}</h4>
                    <div class="item-price">
                      <span class="item-price-current">${values.price}$</span>
                      <br/>
                      <span class="item-price-old">${values.price * 2}$</span>
                    </div>
                    </div>
                    <button class="btn2 buy-btn"><span>${
                      values.handle
                    }</span></button>
                    </div>
                    </div>
                </div>
      `;
      }
      if (values.slug === 'bamboo-accessary') {
        dataPushAccessary += `
        <div class="col l-3 m-6 c-6">
        <div class="item-products">
         <div class="infor">
            <div class="item-background" style="background-image: url(${
              values.image
            })"></div>
            <div class="infor-products">
            <p class="item-category">${values.category}</p>
            <h4 class="item-name">${values.name}</h4>
            <div class="item-price">
              <span class="item-price-current">${values.price}$</span>
              <br/>
              <span class="item-price-old">${values.price * 2}$</span>
            </div>
            </div>
            <button class="btn2 buy-btn"><span>${values.handle}</span></button>
            </div>
            </div>
        </div>
      `;
      }
    });
    $('#data-top-js').innerHTML = dataPushTop;
    $('#data-bottom-js').innerHTML = dataPushBottom;
    $('#data-accessary-js').innerHTML = dataPushAccessary;
  })
  .catch(function () {
    alert('Please Reload The Page');
  });
