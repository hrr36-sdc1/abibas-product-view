const redis = require('redis');

/* REDIS MIDDLEWARE */
const client = redis.createClient();

const redisMiddleware = (req, res, next) => {
  const key = `__express__${req.originalUrl}` || req.url;
  client.get(key, (err, reply) => {
    if (reply) {
      res.send(reply);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.set(key, JSON.stringify(body));
        res.sendResponse(body);
      };
      next();
    }
  });
};

module.exports.redisMiddleware = redisMiddleware;
