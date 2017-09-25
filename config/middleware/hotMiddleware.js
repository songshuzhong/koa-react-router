/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 16:09$
 *@desc
 */
const webpackHot = require('webpack-hot-middleware');
const PassThrough = require('stream').PassThrough;

const hotMiddleware = (compiler, opts) => {
  const middleware = webpackHot(compiler, opts);
  return async (ctx, next) => {
    let stream = new PassThrough();
    ctx.body = stream;
    await middleware(ctx.req, {
      write: stream.write.bind(stream),
      writeHead: (status, headers) => {
        ctx.status = status;
        ctx.set(headers)
      }
    }, next)
  }

};


module.exports = hotMiddleware;