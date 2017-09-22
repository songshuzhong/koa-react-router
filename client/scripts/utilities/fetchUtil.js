const r20 = /%20/g;
const rbracket = /\[]$/;

const buildParams = ( prefix, obj, add ) => {
  let name = '';

  if ( Array.isArray( obj ) ) {
    // Serialize array item.
    obj.forEach( ( v, i ) => {
      if ( rbracket.test( prefix ) ) {
        buildParams( `${ prefix }[${ typeof v === 'object' && v != null ? i : '' }]`,
          v, add );
      } else {
        // Treat each array item as a scalar.
        add( prefix, v );
      }
    } );

  } else if ( typeof obj === 'object' ) {

    // Serialize object item.
    for ( name in obj ) {
      buildParams( `${ prefix }[${ name }]`, obj[ name ], add );
    }

  } else {

    // Serialize scalar item.
    add( prefix, obj );
  }
};

const param = ( a ) => {
  let prefix = '';
  const s = [];
  const add = ( key, value ) => {
    // If value is a function, invoke it and return its value
    if ( typeof value === 'function' ) {
      value();
    } else if ( value === null ) {
      value = '';
    }

    // value = typeof value === 'function' ? value() : ( value == null ? '' : value );
    s[ s.length ] = `${ encodeURIComponent( key ) }=${ encodeURIComponent( value ) }`;
  };

  if ( Array.isArray( a ) ) {
    // Serialize the forms elements
    a.forEach( ( item ) => {
      add( item.name, item.value );
    } );
  } else {

    for ( prefix in a ) {
      buildParams( prefix, a[ prefix ], add );
    }
  }
  
  return s.join( '&' ).replace( r20, '+' );
};

export { buildParams, param };
