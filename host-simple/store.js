window.pdp = {};

const reactChart = document.createElement('header-react');
reactChart.setAttribute('person', 'Sachin 10kar');
reactChart.setAttribute('class', 'react');
const reactContainer = document.getElementById('react-element');
if (reactContainer.children.length > 0) {
  reactContainer.removeChild(reactContainer.children[0]);
}
reactContainer.appendChild(reactChart);

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
