window.pdp = {};

const author = {
  name: 'Rohit sharma',
};

const reactChart = document.createElement('header-react');
reactChart.setAttribute('person', 'Sachin 10kar');
reactChart.setAttribute('class', 'react');
const reactContainer = document.getElementById('react-element');
if (reactContainer.children.length > 0) {
  reactContainer.removeChild(reactContainer.children[0]);
}
reactContainer.appendChild(reactChart);

const reactAlert = document.createElement('alert-react');
reactAlert.setAttribute('person', author.name);
reactAlert.setAttribute('class', 'aus-cricketer');
const alertContainer = document.getElementById('react-alert-element');
if (alertContainer.children.length > 0) {
  alertContainer.removeChild(alertContainer.children[0]);
}
alertContainer.appendChild(reactAlert);

window.pdp.cart = {
  count: 0,
  addToCart() {
    window.pdp.cart.count += 1;
    window.dispatchEvent(new Event('cartChange'));
  },
};

window.pdp.product = {
  name: 'Dog 1',
  image: 'https://images.dog.ceo/breeds/puggle/IMG_071023.jpg',
  setProduct(name, image) {
    window.pdp.product.name = name;
    window.pdp.product.image = image;
    window.dispatchEvent(new Event('productChange'));
  },
};
