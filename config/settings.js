const path = require( 'path' );
const cwd = process.cwd();
const pkg = require( path.resolve( cwd, 'package.json' ) );
const config = require( path.resolve( cwd, 'frontend.config.js' ) );

module.exports = {

  banner: [
    '/*!',
    ` * ${pkg.name} - ${pkg.description}`,
    ` * @version v${pkg.version}`,
    ` * @link ${pkg.homepage}`,
    ' * Copyright (C) 2017 BONC All rights reserved.',
    ' */',
    ''
  ].join( '\n'),

  paths: {
    source: {
      js: path.resolve( cwd, 'client/scripts' ),
      cs: path.resolve( cwd, 'client/styles' )
    },
    output: {
      views: path.resolve( cwd, 'dist' )
    }
  },
  config: {
    js: config.js,
    cs: config.cs,
    title: config.title,
    contextPath: config.contextPath,
    port: config.port,
    static: config.static,
    extLibs: config.extLibs
  }
};