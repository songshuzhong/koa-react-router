// 数据的克隆（同时能够消除数据引用对代码流程带来的一些影响）
const clone = ( obj ) => {
  let o = null;

  if ( typeof obj == 'object' ) {
    if ( obj === null ) {
      o = null;
    } else if ( obj instanceof Array ) {
      o = [];
      for ( let i = 0, len = obj.length; i < len; i++ ) {
        o.push( clone( obj[ i ] ) );
      }
    } else {
      o = {};
      for ( const j in obj ) {
        o[ j ] = clone( obj[ j ] );
      }
    }
  } else {
    o = obj;
  }

  return o;
};

export { clone };
