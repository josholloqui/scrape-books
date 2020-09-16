const request = require('./lib/request');
const parser = require('./lib/parser');
const store = require('./lib/store');

module.exports = job => {
  console.log(`Currently Scrapping ${job.data.page}`);
  return request(job.data.page)
    .then(parser)
    .then(store);
};
