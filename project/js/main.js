'use strict'

const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title, price) => {
  return `
      <div class="container">
          <div class="card">
              <h3>${title}</h3>
              <p>${price}</p>
              <button class="buy-btn">Добавить</button>                     
          </div>
      </div>`
};

const renderProducts = (list) => {
    const productsList = list
      .map(item => renderProduct(item.title, item.price, item.image));
    // console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(" ");
};

renderProducts(products);

