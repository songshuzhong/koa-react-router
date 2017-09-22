/** object 的判空 */
export const isEmpty = ( obj ) => {
  // null and undefined are "empty"
  if ( obj === null || obj === undefined ) {
    return true;
  }

  if ( typeof obj === 'number' && isNaN( obj ) ) {
    return true;
  }

  if ( obj.length !== undefined ) {
    return obj.length === 0;
  }

  if ( obj instanceof Date ) {
    return false;
  }

  if ( typeof obj === 'object' ) {
    return Object.keys( obj ).length === 0;
  }

  return false;
};

export const forEach = ( obj, fn, context ) => {
  Object.keys( obj ).forEach( ( key ) => fn.call( context, obj[ key ], key ) );
};

/** object 的继承 */
export const extend = ( ...args ) => {
  let target = args[ 0 ] || {};
  const length = args.length;
  let options = null;
  let i = 1;

  // Handle case when target is a string or something (possible in deep copy)
  if ( ( typeof target !== 'object' && typeof target !== 'function' ) || typeof target === 'boolean' ) {
    target = {};
  }

  if ( i === length ) {
    const self = this;

    target = self;
    i--;
  }

  for ( ; i < length; i++ ) {
    if ( ( options = args[ i ] ) != null ) {
      for ( const argProp in options ) {

        const argVal = options[ argProp ];

        // Is this value an object?  If so, iterate over its properties, copying them over
        if ( argVal && Object.prototype.toString.call( argVal ) === '[object Object]' ) {
          target[ argProp ] = target[ argProp ] || {};
          extend( target[ argProp ], argVal );
        } else {
          target[ argProp ] = argVal;
        }
      }

    }
  }

  return target;
};
