import { extend } from './object';
import Queue from './queue';

const configs = {
  
  // fetch 参数设置, 与 fetch 原生 API 保持一致
  'fetch': {
    'method': 'GET',
    'credentials': 'include'
  },
  
  // 队列设置
  'queue': {
    
    // 是否启用队列
    'enable': true,
    
    // 单个队列最大请求并发数
    'singleQueueMaxRequest': 5
  },
  
  // 样式的命名空间
  'ui': { 'classPrefix': 'epm' }
};

let queue = null;

/**
 * fetch封装
 * @param {String} url:请求路径 
 * @param {Object} options:请求参数 
 */
const fetch = ( url, options ) => {

  const f = () => {
    return new Promise( ( resolve, reject ) => {

      const defaultFetchOptions = configs.fetch || {};
      let _options = {};

      if ( options ) {
        _options = extend( {}, defaultFetchOptions, options );
      } else {
        _options = extend( {}, defaultFetchOptions );
      }

      window.fetch( url, _options )
        .then( ( response ) => {
          if ( response.ok ) {
            return resolve( response );
          }

          if ( response.status === 404 ) {
            return reject( new Error( `Page not found: ${ url }` ) );
          }

          return reject( new Error( `HTTP error: ${ response.status }` ) );

        } )
        .catch( ( error ) => {
          return reject( new Error( error.message ) );
        } );
    } );
  };

  if ( configs.queue && configs.queue.enable ) {
    if ( !queue ) {
      queue = new Queue( configs.queue.singleQueueMaxRequest );
    }
    
    return queue.push( f );
  } else {
    return f();
  }
  
};

export default fetch;
export { fetch };
