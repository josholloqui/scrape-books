const parser = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];

  return bookElements.map(book => ({
    title: book.querySelector('h3 > a').getAttribute('title'),
    coverImg: book.querySelector('img').src,
    rating: book.querySelector('.star-rating').getAttribute('class').split(' ')[1],
    price: book.querySelector('.price_color').textContent,
    inStock: book.querySelector('.instock').textContent.includes('In stock') ? true : false
  }));
}
;
module.exports = parser;
