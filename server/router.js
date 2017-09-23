const Router = require( 'koa-router' );

const navaidAction = require( './controller/comm-navaid' );

const getRouter = () => {
  const router = new Router();

  router.get( '/common-navaid/data', navaidAction.getNavaidData );

  return router;
};

module.exports = getRouter();