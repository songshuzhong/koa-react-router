/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/16
 *@desc 在本地缓存中增、删、查用户信息
 */

const saveAuth = ( name, value ) => {
  let Days = 30;
  let exp = new Date();

  exp.setTime( exp.getTime() + 30 * 60 * 1000 );
  document.cookie = name + "="+ escape ( value ) + ";expires=" + exp.toGMTString();
};

const getAuth = ( name = 'loginId' ) => {
  let arr, reg = new RegExp( "(^| )" + name + "=([^;]*)(;|$)" );

  if ( typeof document === 'undefined' ) {
    return false;
  } else if( arr = document.cookie.match( reg ) ) {
      return unescape( arr[2] );
    } else
      return null;
};

const isAuthExisted = ( name = 'token' ) => {
  let arr, reg = new RegExp( "(^| )" + name + "=([^;]*)(;|$)" );
  if ( typeof document === 'undefined' ) {
    return false;
  } else if( arr = document.cookie.match( reg ) ) {
      return true;
  } else {
      return false;
    }
};

const delAuth = ( name = [ 'loginId', 'token', 'userAutority' ] ) => {
  let exp = new Date();

  exp.setTime(exp.getTime() - 1);
  for( let i = 0; i < name.length; i++ ) {
    document.cookie = name[i] + "= TimeOuts;expires=" + exp.toGMTString();
  }
};

/**
 * @param callback
 * @return boolean, string
 * @desc 返回登录真值和loginId
 */
const isAuthLogged = ( reject, resolve ) => {

  let loginId = getAuth();
  let token = getAuth( 'token' );

  if( loginId === "" || loginId === null || loginId === 'undefined' ) {
    return reject( false );
  } else {
    fetch( `http://coptest.bonc.yz/copinternet/internet/v1/user/${ loginId }/token/${ token }`, { method : "GET" } )
      .then( ( response ) => response.json() )
      .then( ( response ) => { response.status === 'success'? resolve( true, loginId ): reject( false ) } )
      .catch( ( error ) => console.log( "Error fetching and parsing data", error ) );
  }
};
/**
 * @param self
 * @desc 将登录真值和loginId存入状态机
 */
const authToState = ( self ) => {
  isAuthLogged(
    ( authLogged ) => self.setState( { authLogged } ),
    ( authLogged, loginId ) => { self.setState( { authLogged, loginId } ) } );
};

module.exports = { saveAuth, getAuth, isAuthExisted, delAuth, isAuthLogged, authToState };
