const fs = require('fs');
const store = require('../lib/store');
const pool = require('../lib/utils/pool');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes in books and stores them in SQL db', async() => {
    const books = [
      {
        title: 'Sapiens: A Brief History of Humankind',
        coverImg: 'media/cache/be/a5/bea5697f2534a2f86a3ef27b5a8c12a6.jpg',
        rating: 'Five',
        price: '£54.23',
        inStock: true
      },
      {
        title: 'Rip it Up and Start Again',
        coverImg: 'media/cache/81/c4/81c4a973364e17d01f217e1188253d5e.jpg',
        rating: 'Five',
        price: '£35.02',
        inStock: true
      }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(2);
  });
});
