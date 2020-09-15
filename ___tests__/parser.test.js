const request = require('../lib/request');
const parser = require('../lib/parser');

describe('parse function', () => {
  it('returns object book from document request', async() => {
    const document = await request();

    const books = parser(document);

    expect(books).toEqual(expect.arrayContaining([
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
    ]));
  });
});
