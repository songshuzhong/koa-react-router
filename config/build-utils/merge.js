/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
const mergeWith = require( 'lodash.mergewith' );

module.exports = ( ...args ) => mergeWith( ...args, ( objValue, srcValue ) => {
  if ( Array.isArray( objValue ) ) {
    return objValue.concat( srcValue );
  }
} );