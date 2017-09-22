import { fetch } from './fetch';

/**
 *   getDataSource 方法接收两个参数。
 *   dataSource: 数据源
 *   callback: 回调函数
 */
const getDataSource = ( dataSource, callback ) => {
  
  /** 分类获取 dataSource */
  const dispatchGetDataSource = ( dataResult ) => {
    if ( typeof dataResult === 'string' && fetch ) {
      fetch( dataResult, { credentials: 'same-origin', headers: { 'Content-Type': 'application/json' } } )
      .then( ( response ) => {
        return response.json();
      } )
      .then( ( data ) => {
        callback( data );
      } )
      .catch( ( err ) => console.error( err.toString() ) );
    } else if ( dataResult instanceof Promise ) {
      // 如果 dataSource 是一个 Promise 对象，则将 reslove 函数的参数作为 dataSource 保存
      dataResult
      .then( ( response ) => { return response.json(); } )
      .then( ( data ) => {
        callback( data );
      } )
      .catch( ( err ) => console.error( err.toString() ) );
    } else {
      // 如果 dataSource 是其他类型数据，则直接保存
      callback( dataResult );
    }
  };
  const dispatchPostDataSource = ( dataResult, reqParams ) => {
    fetch( dataResult, { method: 'POST', credentials: 'same-origin', body: JSON.stringify( reqParams ) } )
      .then( ( response ) => response.json() )
      .then( ( data ) => callback( data ) )
      .catch( ( err ) => console.error( err.toString() ) );
  };

  if ( typeof dataSource === 'function' || Array.isArray( dataSource ) || typeof dataSource === 'string' ) {
    dispatchGetDataSource( dataSource );
  } else {
    const { url, params } = dataSource;
    dispatchPostDataSource( url, params )
  }
  
};

export { getDataSource };
