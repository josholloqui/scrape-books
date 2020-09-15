const request = require('./request');

describe('request function', () => {
  it('makes a request to the books to scrape page and returns html', async() => {
    const document = await request();

    expect(document.querySelector('small').textContent).toEqual(' We love being scraped!');
  });
});
