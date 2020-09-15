const Book = require('./model/book');

const store = books => {
  return Promise.all(
    books.map(text => Book.insert(text))
  );
};

module.exports = store;
