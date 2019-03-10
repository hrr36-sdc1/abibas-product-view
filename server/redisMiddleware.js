const Redis = require('ioredis');

const client = new Redis(6379, 'redis');

const redisMiddleware = (req, res, next) => {
  const key = `__express__${req.originalUrl}` || req.url;
  client.get(key, (err, reply) => {
    if (reply) {
      res.send(reply);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.set(key, JSON.stringify(body));
        res.sendResponse(JSON.stringify(body));
      };
      next();
    }
  });
};

module.exports.redisMiddleware = redisMiddleware;
