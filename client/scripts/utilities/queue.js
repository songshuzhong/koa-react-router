const defaultConfigs = {
  
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

/**
 * 简单封装了 Promise 
 */ 
class QPromise {
  /**
   * Creates an instance of QPromise.
   */
  constructor() {
    this.Promise = Promise;
  }

  /**
   * defer
   * 
   * @returns {Object}
   */
  defer() {
    let resolve = null;
    let reject = null;
    const promise = new Promise( ( _resolve, _reject ) => {
      resolve = _resolve;
      reject = _reject;
    } );

    return {
      promise,
      resolve,
      reject
    };
  }

  /**
   * resolve
   * 
   * @param {any} obj 
   * @returns {Promise}
   */
  resolve( obj ) {
    const defer = this.defer();

    defer.resolve( obj );

    return defer.promise;
  }
  
  /**
   * reject
   * 
   * @param {any} obj 
   * @returns {Promise}
   */
  reject( obj ) {
    const defer = this.defer();

    defer.reject( obj );

    return defer.promise;
  }
}

/**
 * 队列执行单类
 */
class QueueUnit {
  /**
   * Creates an instance of QueueUnit.
   * @param {any} _Promise 
   * @param {any} fn 运行函数
   */
  constructor( _Promise, fn ) {
    this.fn = fn;
    this.defer = _Promise.defer();
  }

}

/**
 * 队列类
 */
class Queue {
  
  /**
   * Creates an instance of Queue.
   * @param {any} max 队列最大并行数
   */
  constructor( max ) {
    this._Promise = new QPromise();
    this._queue = [];
    this._max = this.maxFormat( max );
    
    // 正在运行的项数
    this._runCount = 0;
    
    // 队列是否已开始运行
    this._isStart = false;
    this._isStop = 0;
  }

  /**
   * 添加执行项，并会启动队列
   */
  push( ...args ) {
    const unit = this.getQueueUnit.apply( this, args );

    this._addItem( unit, true );
    
    return unit.defer.promise;
  }

  /**
   * 向队列插入执行单元 
   * 
   * @param {any} unit 执行单元对像
   * @param {any} start 是否启动队列
   */
  _addItem( unit, start ) {
    this._queue.push( unit );
    if ( start ) {
      this.start();
    }
  }

  /**
   * 执行下一项
   */
  next() {
    if ( this._runCount < this._max && !this._isStop && this._queue.length > 0 ) {
      const unit = this._queue.shift();

      const issucc = ( data ) => {
        this._runCount--;

        // 通知执行单元,成功
        unit.defer.resolve( data ); 
      };

      const iserr = ( err ) => {
        this._runCount--;

        // 通知执行单元,失败
        unit.defer.reject( err ); 
      };

      if ( this._runCount === 0 && !this._isStart ) {
        this._isStart = true;
      }

      this.toPromise( () => {
        return unit.fn.apply( null );
      } )
      .then( issucc, iserr )
      .then( () => {
        if ( this._queue.length > 0 ) {
          this.queueRun();
        } else if ( this._runCount === 0 && this._isStart ) {
           // 队列结束执行事件
          this._isStart = false;
        }
      } );

      this._runCount += 1;
      
      return;
    }
    
    return true;
  }

  /**
   * 执行队列
   */
  queueRun() {
    while ( !this.next() ) {
      /* empty */
    }
  }

  /**
   * 开始执行队列
   */
  start() {
    this._isStop = 0;
    this.queueRun();
  }

  /**
   * 构建执行单元对象
   * 
   * @param {any} fn 
   * @returns {QueueUnit}
   */
  getQueueUnit( fn ) {
    return new QueueUnit( this._Promise, fn );
  }

  /**
   * Promise
   * 
   * @param {any} fn 
   * @returns {Promise}
   */
  toPromise( fn ) {
    try {
      return this._Promise.resolve( fn() );
    } catch ( e ) {
      return this._Promise.reject( e );
    }
  }

  /**
   * 格式化 Max
   * 
   * @param {any} max 
   * @returns 
   */
  maxFormat( max ) {
    if ( Number.isInteger( max ) && max > 0 ) {
      return max;
    } else {
      return defaultConfigs.queue.singleQueueMaxRequest;
    }
  }
}

export default Queue;
export { Queue };
