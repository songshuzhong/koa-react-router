/**
 * Created by Steven Song on 2017/11/20.
 */
const { RawSource } = require( 'webpack-sources' );

class ReactPlugin {
  constructor( options = {} ) {
    this.options = options;
  }

  apply( compiler ) {
    compiler.plugin( "emit", ( compilation, callback ) => {
      compilation.chunks.forEach( ( chunk ) => {
        chunk.files.forEach( ( filename ) => {
          if ( filename.includes( `.js` ) ) {
            let { js, cs, title, contextPath } = this.options;
            let source = compilation.assets[ filename ].source().toString();
            let newSource = source
              .replace( /STYLESHEET_SOURCE_PLACEHOLDER/g, `${ contextPath }/${ filename.replace(/js/g, 'cs').replace( /\.cs/g, '.css' ) }` )
              .replace( /JAVASCRIPT_SOURCE_PLACEHOLDER/g, `${ contextPath }/${ filename }` )
              .replace( /CONTEXTPATH_SOURCE_PLACEHOLDER/g, `${ contextPath }` )
              .replace( /TITLE_SOURCE_PLACEHOLDER/g, `${ title }` );
            compilation.assets[ filename ] = new RawSource( newSource );
          }
        });
      });

      callback();
    });
  }
}

module.exports = ReactPlugin;