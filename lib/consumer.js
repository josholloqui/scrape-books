const { taskQueue } = require('./queue');

taskQueue.process(5, `${__dirname}/scrape-worker.js`);
