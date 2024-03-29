const http = require('http');

// 组合中间件
function compose(middlewareList) {
  return function (ctx) {
    function next(i) {
      const fn = middlewareList[i];
      try {
        return Promise.resolve(
          /* next 函数的 实际逻辑是 next 的执行，和 express 类似 */
          fn(ctx, next.bind(null, i + 1)) // promise
        );
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return next(0);
  };
}

class LikeKoa2 {
  constructor() {
    this.middlewareList = [];
  }

  use(fn) {
    this.middlewareList.push(fn);
    return this;
  }

  createContext(req, res) {
    const ctx = {
      req,
      res,
    };
    ctx.query = req.query;
    return ctx;
  }

  handleRequest(ctx, fn) {
    return fn(ctx);
  }

  callback() {
    const fn = compose(this.middlewareList);

    return (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

module.exports = LikeKoa2;
