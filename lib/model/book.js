const pool = require('../utils/pool');

class Book {
  id;
  title;
  coverImg;
  rating;
  price;
  inStock;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.coverImg = row.coverImg;
    this.rating = row.rating;
    this.price = row.price;
    this.inStock = row.inStock;
  }

  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, cover_img, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [book.title, book.coverImg, book.rating, book.price, book.inStock]
    );

    return new Book(rows[0]);
  }
}

module.exports = Book;
