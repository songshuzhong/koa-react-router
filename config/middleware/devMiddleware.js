/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 16:07$
 *@desc
 */
const webpackDev  = require('webpack-dev-middleware');

const devMiddleware = (compiler, opts) => {
  const middleware = webpackDev(compiler, opts);
  return async (ctx, next) => {
    await middleware(ctx.req, {
      end: (content) => {
        ctx.body = content
      },
      setHeader: (name, value) => {
        ctx.set(name, value)
      }
    }, next)
  }
};

module.exports = devMiddleware;