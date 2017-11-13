const vm = require( 'vm' );
const path = require( 'path' );

const getApp = ( code ) => {
  const exports = {};
  const sandbox = {
    __CONTEXT_PATH__: '',
    module: {
        exports
    },
    exports,
    console
  };

  vm.runInNewContext( code, sandbox );

  return sandbox.module.exports;
};

module.exports = ( compiler ) => {
  let app = {
    ssr() {
      return 'ReactRender： wait until bundle finished.';
    }
  };

  const fs = compiler.outputFileSystem;
  const filename = path.join( __dirname, '../../dist/bundle.js' );

  compiler.plugin( 'done', () => {
    if ( fs.existsSync( filename ) ) {
      const code = fs.readFileSync( filename ).toString();
      app = getApp( code );
    }
  } );

  return () => app;
};