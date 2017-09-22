/** 数据的深度比较 */
const compare = ( a, b ) => {
  /** 对数组的比较 */
  const compareArray = ( a, b ) => {
    if ( a.length !== b.length ) {
      return false;
    }
    if ( a.length === 0 && b.length === 0 ) {
      return true;
    }
    for ( const index in a ) {
      const flag = compare( a[ index ], b[ index ] );

      if ( !flag ) {
        return false;
      }
    }

    return true;
  };

  /** 对 object 的比较 */
  const compareObj = ( a, b ) => {
    for ( const key in a ) {
      if ( a[ key ] === 'undefine' || b[ key ] === 'undefine' ) {
        return false;
      }
      const flag = compare( a[ key ], b[ key ] );

      if ( !flag ) {
        return false;
      }
    }

    return true;
  };

  /** 判断类型，及对其他类型数据的比较 */
  if ( typeof a !== typeof b ) {
    return false;
  } else if ( a instanceof Promise || b instanceof Promise || typeof a === 'function' || typeof b === 'function' ) {
    return a === b;
  } else if ( a instanceof Array && b instanceof Array ) {
    return compareArray( a, b );
  } else if ( a instanceof Object && b instanceof Object ) {
    return compareObj( a, b );
  } else if ( typeof a === typeof b ) {
    return a === b;
  } else {
    return false;
  }
};

export { compare };
