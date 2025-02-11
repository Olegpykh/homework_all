let product = {
  title: 'Велосипед',
  img: './img/annie-spratt-irAb1MXqAqQ-unsplash.jpg',
  count: 10,
  favorite: false,
};

localStorage.setItem('product', JSON.stringify(product));



const btn_minus = document.querySelector('.btn-1');
const btn_plus = document.querySelector('.btn-2');
const number_1 = document.querySelector('.number-1');

let count = localStorage.getItem('product')
  ? JSON.parse(localStorage.getItem('product')).count
  : product.count;

number_1.textContent = count;

btn_minus.addEventListener('click', () => {
  const product_obj = JSON.parse(localStorage.getItem('product'));
  product_obj.count--;
  localStorage.setItem(
    'product',
    JSON.stringify(product_obj)
  )((number_1.textContent = product_obj.count));
});

btn_plus.addEventListener('click', () => {
  const product_obj = JSON.parse(localStorage.getItem('product'));
  product_obj.count++;
  localStorage.setItem(
    'product',
    JSON.stringify(product_obj)
  )((number_1.textContent = product_obj.count));
});

const btn_switch = document.querySelector('.switch');



btn_switch.addEventListener('click', () => {
  const product_obj = JSON.parse(localStorage.getItem('product'));

  product_obj.favorite = !product_obj.favorite
  localStorage.setItem('product', JSON.stringify(product_obj));
  
});


